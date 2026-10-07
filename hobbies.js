/* One shared scheduler, lazy sprites, and static photo/poster fallbacks. */
(function () {
  'use strict';
  const items = window.PORTFOLIO_INTERESTS || [];
  const labels = {
    en: { label: '06 / INTERESTS', title: 'Outside engineering.', intro: 'Sports, travel, and the things I enjoy in everyday life.', hint: 'Click a pixel character to replay its action. The animation switch also controls these scenes.', photo: 'View photo', replay: 'Replay', illustration: 'Pixel illustration', more: 'A few more things I enjoy', playing: 'Replaying' },
    zh: { label: '06 / 兴趣爱好', title: '工程之外。', intro: '运动、旅行，以及日常生活中的兴趣。', hint: '点击像素小人，从头重播动作；右上角动画开关也控制这些小场景。', photo: '查看照片', replay: '重播', illustration: '像素插画', more: '还有这些日常兴趣', playing: '正在重播' }
  };
  let players = [], observer = null, frame = null, selectedLanguage = 'en';
  let isEnabled = () => false;
  function escape(value) {
    return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  }
  function card(item, lang, interactive) {
    const ui = labels[lang], name = item.name[lang];
    const photo = item.photo ? '<a class="hobby-photo" href="' + escape(item.photo) + '" data-interest-photo="' + item.id + '" aria-label="' + escape(ui.photo + ': ' + name) + '"><img src="' + escape(item.photo) + '" alt="' + escape(item.alt[lang]) + '" loading="lazy" decoding="async"><span aria-hidden="true">↗</span></a>' : '';
    const character = '<img class="hobby-poster" src="' + escape(item.poster) + '" alt="' + escape(name + ' — ' + ui.illustration) + '" width="256" height="256" loading="lazy" decoding="async">' + (interactive ? '<canvas class="hobby-canvas" width="256" height="256" data-frame="0" hidden aria-hidden="true"></canvas><span class="hobby-replay-mark" aria-hidden="true">↻</span>' : '');
    const scene = interactive ? '<button class="hobby-replay" type="button" data-hobby="' + item.id + '" aria-label="' + escape(ui.replay + ': ' + name) + '" aria-describedby="interests-instructions">' + character + '</button>' : '<div class="hobby-replay">' + character + '</div>';
    return '<article class="hobby-card' + (item.photo ? '' : ' hobby-card-illustrated') + '" id="interest-' + item.id + '"><div class="hobby-visuals">' + photo + scene + '</div><h3>' + escape(name) + '</h3></article>';
  }
  function markup(lang = 'en', interactive = false) {
    lang = Object.hasOwn(labels, lang) ? lang : 'en';
    const ui = labels[lang];
    return '<div class="section-heading"><p class="section-label">' + ui.label + '</p><h2 id="interests-title">' + ui.title + '</h2><p class="section-intro">' + ui.intro + '</p></div><p class="interests-instructions" id="interests-instructions">' + ui.hint + '</p><div class="hobbies-grid">' + items.filter(i => i.photo).map(i => card(i, lang, interactive)).join('') + '<div class="hobby-extras-group"><p class="more-interests-label">' + ui.more + '</p><div class="hobbies-extras">' + items.filter(i => !i.photo).map(i => card(i, lang, interactive)).join('') + '</div></div></div><p class="visually-hidden" id="hobby-announcement" role="status" aria-live="polite"></p>';
  }
  function draw(player, index) {
    if (!player.ready || index === player.lastFrame) return;
    const { context, canvas, image, item } = player;
    const col = index % item.cols, row = Math.floor(index / item.cols);
    const left = Math.round(col * image.width / item.cols), right = Math.round((col + 1) * image.width / item.cols);
    const top = Math.round(row * image.height / item.rows), bottom = Math.round((row + 1) * image.height / item.rows);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = false;
    context.drawImage(image, left, top, right - left, bottom - top, 0, 0, canvas.width, canvas.height);
    player.lastFrame = index;
    canvas.dataset.frame = String(index);
  }
  function poseAt(player, elapsed) {
    let boundary = 0;
    const time = elapsed % player.total;
    return player.item.durations.findIndex(duration => (boundary += duration) > time);
  }
  function updateActive(player, now) {
    const active = isEnabled() && !document.hidden && player.visible && player.ready;
    if (player.active && !active) player.offset = (player.offset + now - player.start) % player.total;
    if (!player.active && active) player.start = now;
    player.active = active;
  }
  function tick(now) {
    frame = null;
    players.forEach(player => {
      updateActive(player, now);
      if (player.active) draw(player, poseAt(player, player.offset + now - player.start));
    });
    schedule();
  }
  function schedule() {
    if (frame === null && players.some(player => player.active)) frame = requestAnimationFrame(tick);
  }
  function sync() {
    const now = performance.now();
    players.forEach(player => updateActive(player, now));
    if (!players.some(player => player.active)) { cancelAnimationFrame(frame); frame = null; }
    schedule();
  }
  function load(player) {
    if (player.loaded) return;
    player.loaded = true;
    player.image.onload = () => {
      if (!player.button.isConnected) return;
      player.ready = true;
      draw(player, 0);
      player.canvas.hidden = false;
      player.button.querySelector('.hobby-poster').hidden = true;
      sync();
    };
    player.image.onerror = () => { player.ready = false; };
    player.image.src = player.item.sprite;
  }
  function render(lang, enabled) {
    cancelAnimationFrame(frame); frame = null;
    observer?.disconnect();
    players.forEach(player => { player.image.onload = null; player.image.onerror = null; });
    players = [];
    selectedLanguage = Object.hasOwn(labels, lang) ? lang : 'en';
    isEnabled = enabled;
    const container = document.getElementById('interests');
    container.innerHTML = markup(selectedLanguage, true);
    players = [...container.querySelectorAll('button[data-hobby]')].map(button => {
      const item = items.find(item => item.id === button.dataset.hobby);
      const canvas = button.querySelector('canvas'), context = canvas.getContext('2d');
      const player = { item, button, canvas, context, image: new Image(), ready: false, loaded: false, visible: false, active: false, start: 0, offset: 0, lastFrame: -1, total: item.durations.reduce((a, b) => a + b, 0) };
      button.addEventListener('click', () => {
        player.offset = 0; player.start = performance.now(); player.lastFrame = -1;
        draw(player, 0);
        button.dataset.replays = String(Number(button.dataset.replays || 0) + 1);
        document.getElementById('hobby-announcement').textContent = labels[selectedLanguage].playing + ': ' + item.name[selectedLanguage];
        sync();
      });
      return player;
    }).filter(player => player.context);
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const player = players.find(player => player.button === entry.target);
          if (!player) return;
          player.visible = entry.isIntersecting;
          if (player.visible) load(player);
        });
        sync();
      }, { rootMargin: '100px 0px', threshold: 0 });
      players.forEach(player => observer.observe(player.button));
    } else {
      players.forEach(player => { player.visible = true; load(player); });
    }
  }
  window.PortfolioHobbies = { markup, render, sync };
})();
