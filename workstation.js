/* Floating workstation hero. Native HTML/CSS geometry; no remote dependencies. */
(() => {
  'use strict';
  const scene = document.querySelector('.core-scene');
  const device = document.getElementById('system-core');
  const buttons = [...document.querySelectorAll('[data-core-domain]')];
  const panels = [...document.querySelectorAll('[data-core-view]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.getElementById('toggle-animation');
  const text = {
    en: {hint:'Choose a direction to explore my work.',project:'Explore related project ↗',experience:'Explore related experience ↗'},
    zh: {hint:'选择一个方向，看看相关作品与经历。',project:'查看相关项目 ↗',experience:'查看相关经历 ↗'}
  };
  const directions = [
    {name:'focusSoftware',tech:'C++ / Qt / Next.js',href:'#project-ai-workspace',label:'project'},
    {name:'focusSystems',tech:'C / ADC / PWM / EEPROM',href:'#project-smart-locker',label:'project'},
    {name:'focusPerception',tech:'focusSensing',href:'#experience',label:'experience'}
  ];
  let selected=0, clock=0, lastTime=0, lastDraw=0, frame=null, count=0;
  let active=true, hidden=false, pointer=[0,0], smoothPointer=[0,0];
  const enabled=()=>!motion.matches && toggle.getAttribute('aria-pressed')==='true' && !document.hidden;
  const language=()=>document.documentElement.lang==='zh-CN'?'zh':'en';

  // The shared renderer keeps its original particles and lifecycle. The workstation
  // scene supplies a refined day-bubble material through the optional hook.
  window.PortfolioSceneEffects = {
    paintBubble(context, bubble) {
      const {x,y,radius:r}=bubble;
      const light=context.createRadialGradient(x-r*.32,y-r*.34,r*.03,x,y,r);
      light.addColorStop(0,'rgba(249,253,255,.66)');
      light.addColorStop(.25,'rgba(159,187,222,.075)');
      light.addColorStop(.72,'rgba(120,153,199,.13)');
      light.addColorStop(.97,'rgba(96,133,184,.28)');
      light.addColorStop(1,'rgba(89,125,176,.34)');
      context.save();
      context.fillStyle=light;
      context.strokeStyle='rgba(94,125,168,.28)';
      context.lineWidth=.8;
      context.beginPath();context.arc(x,y,r,0,Math.PI*2);context.fill();context.stroke();
      context.strokeStyle='rgba(255,255,255,.74)';
      context.lineWidth=1;
      context.beginPath();context.arc(x-r*.035,y-r*.035,r*.81,Math.PI*1.03,Math.PI*1.56);context.stroke();
      context.restore();
    }
  };

  function labels() {
    const lang=language(), ui=window.PORTFOLIO_CONTENT[lang].ui;
    document.querySelectorAll('[data-core-copy]').forEach(element=>{element.textContent=text[lang][element.dataset.coreCopy];});
    const item=directions[selected];
    document.getElementById('core-detail-name').textContent=ui[item.name];
    document.getElementById('core-detail-tech').textContent=selected===2?ui[item.tech]:item.tech;
    const link=document.getElementById('core-related');
    link.href=item.href; link.textContent=text[lang][item.label];
    buttons.forEach((button,index)=>{button.setAttribute('aria-pressed',String(index===selected));});
    panels.forEach((panel,index)=>{panel.hidden=index!==selected;});
    scene.querySelector('[role="group"]').setAttribute('aria-label',ui.focusLabel);
    scene.dataset.active=String(selected);
  }
  function draw() {
    const lift=Math.sin(clock*.7)*3.5;
    device.style.setProperty('--device-lift',(-lift)+'px');
    device.style.setProperty('--device-pitch',(-12+smoothPointer[1]*5)+'deg');
    device.style.setProperty('--device-yaw',(-18+Math.sin(clock*.32)*2.2+smoothPointer[0]*7)+'deg');
    device.style.setProperty('--device-roll',(-6+Math.sin(clock*.25)*.6)+'deg');
    scene.dataset.frame=String(++count);
  }
  function tick(now) {
    frame=null;
    if(hidden||!active||!enabled()){lastTime=0;return;}
    if(lastTime)clock+=Math.min(now-lastTime,100)/1000;
    lastTime=now;
    smoothPointer=smoothPointer.map((value,index)=>value+(pointer[index]-value)*.06);
    if(now-lastDraw>40){draw();lastDraw=now;}
    frame=requestAnimationFrame(tick);
  }
  function sync() {
    document.body.classList.toggle('core-reduced',motion.matches);
    const stopped=!enabled()||!active||hidden;
    scene.classList.toggle('core-paused',stopped);
    draw();
    if(stopped){cancelAnimationFrame(frame);frame=null;lastTime=0;}
    else if(!frame)frame=requestAnimationFrame(tick);
  }
  function select(index) {selected=index;labels();sync();}

  addEventListener('DOMContentLoaded',()=>{
    labels();scene.dataset.renderer='css-3d';sync();
    buttons.forEach((button,index)=>{
      button.addEventListener('click',()=>select(index));
      button.addEventListener('keydown',event=>{
        if(['ArrowLeft','ArrowRight'].includes(event.key)){
          event.preventDefault();
          const next=(index+(event.key==='ArrowRight'?1:2))%3;
          select(next);buttons[next].focus();
        }
      });
    });
    new MutationObserver(()=>{labels();sync();}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    new MutationObserver(sync).observe(toggle,{attributes:true,attributeFilter:['aria-pressed']});
    new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{
      active=entries[0].isIntersecting;scene.classList.toggle('core-offscreen',!active);sync();
    },{threshold:.01}).observe(scene);
    document.addEventListener('visibilitychange',sync);
    motion.addEventListener('change',sync);
    scene.addEventListener('pointermove',event=>{
      if(!enabled()||event.pointerType==='touch')return;
      const rect=scene.getBoundingClientRect();
      pointer=[(event.clientX-rect.left)/rect.width-.5,(event.clientY-rect.top)/rect.height-.5];
    },{passive:true});
    scene.addEventListener('pointerleave',()=>{pointer=[0,0];});
  });
  addEventListener('pagehide',()=>{hidden=true;cancelAnimationFrame(frame);frame=null;lastTime=0;});
  addEventListener('pageshow',event=>{if(event.persisted){hidden=false;sync();}});
})();
