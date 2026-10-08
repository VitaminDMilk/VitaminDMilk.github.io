# Validation

Browser validation completed on October 4, 2026 (America/Indianapolis) using headless Microsoft Edge and local files.

62 integration checks passed with no JavaScript runtime errors.

- Four experience entries, three selected projects, and two education entries render.
- Both language versions include all interface translations and technical content.
- English and Chinese layouts have no horizontal overflow at 320, 375, 390, 768, 850, 1024, and 1440 pixels.
- Day, night, and blush themes update correctly; language and theme survive reload.
- Core English experience, projects, and contact remain available with JavaScript disabled.
- Language and theme still work when browser preference storage is blocked.
- Existing section anchors resolve; GitHub, email, and intentionally public US phone links remain.
- The old TOEFL score is absent. Missing resume, project URLs, and media do not produce empty buttons.
- System reduced-motion preference stops background animation.
- Image and video gallery behavior was verified using synthetic local fixtures excluded from the delivery.
- Gallery checks cover localized alt text and captions, video metadata loading, next/previous bounds, keyboard navigation, Escape, Close, media cleanup, and focus return.
- Unsafe script/data URLs and URLs containing credentials are rejected.
- Desktop, mobile, Chinese, projects, and night screenshots were inspected.

The replacement script was also run against a disposable copy of the original repository. It preserved the existing uncommitted files in its backup, copied the updated source, and left Git history unchanged.

## Animated background restoration — October 5, 2026

Restored the original 80 blue bubbles, 200 twinkling stars, 100 rotating falling petals, and three gradient backgrounds. The original desktop backup was rendered for comparison; its original `petal.png` is preserved. Canvas layering now explicitly places the background above the body paint and below the page content.

The 62 integration checks were rerun and passed. An additional 21 background checks passed, covering visible frame changes in all three themes, visible particles, original flower asset loading, gradient restoration, pause/resume, saved preference, manual animation activation with reduced motion enabled, translated controls, and header layout at 320px. No JavaScript runtime errors were recorded.

Restored day, night, blush, and mobile screenshots were inspected in the previous session. The user has since applied that version to the desktop repository; no replacement script is needed for ongoing edits.

The online page could not be reached from this environment (`ERR_NETWORK_ACCESS_DENIED`). No live-site visual comparison, external destination availability check, GitHub push, or deployment was performed. All implementation changes are based on the complete supplied content brief and the current local working files, including their uncommitted changes.

No real project screenshots, demo URLs, project repository URLs, or resume PDF were supplied. Their fields remain empty. Project cover graphics describe project themes and do not depict application screenshots.

## Repository handoff and interaction fixes — October 5, 2026

Read the complete content brief and inspected the existing uncommitted diff before editing directly in `C:\Users\david\Desktop\HTML-Portfolio`. No applicable `AGENTS.md` was found in the repository or its ancestor directories. Existing changes were preserved. README installation instructions now describe this repository and no longer ask the user to copy files or run the absent replacement script.

Fixed background pause/resume and visibility handling to retain the current particle scene, rather than rebuilding it at each pause or tab visibility change. Original particle types, counts, assets, gradients, and layering are unchanged. Gallery navigation now returns immediately at the first/last item, so a repeated direction key cannot recreate the current video.

Current-session verification (separate from the previous session's 83 checks):

- The in-app browser loaded the current repository through a loopback-only local server.
- All 14 English/Chinese layout combinations at 320, 375, 390, 768, 850, 1024, and 1440px had no horizontal overflow.
- Three theme controls selected their expected gradient and full-viewport canvas; the visible day background was inspected.
- Language and paused-animation state survived reload; resume restored the pressed playback control.
- Four experiences, three projects, two education entries, and hidden unconfigured resume/media/project links were confirmed in the rendered page.
- No browser warning or error logs were returned during these checks.
- A temporary Node regression harness exercised the actual background scheduler in all three themes: pause does not repaint or rerandomize the scene, resume retains particles, tab visibility retains particles, and repeated synchronization creates one animation loop. System reduced motion and explicit on/off choices also passed.
- The harness verified first/last gallery bounds leave the current media untouched and valid navigation renders the next item. Image/video playback, Escape, and focus return were covered by the previous session; those full media integration checks were not rerun in this session because production media remains unconfigured.
- JavaScript syntax checks and `git diff --check` passed. Git reported its existing LF-to-CRLF conversion notices.

The live site remained inaccessible through the web tool, so this session does not verify its deployed appearance. GitHub's official documentation confirms the existing project-site URL structure and the optional `<owner>.github.io` user-site repository structure. No commit, push, deployment, repository rename, or DNS change was performed.

## VDM Ledger public interactive demo — October 5, 2026

The user supplied `https://vdm-ledger.vercel.app/dashboard` and requested a demo. Browser inspection found an owner-only sign-in screen. The user then explicitly requested an anonymous demo with synthetic data.

Added `demos/vdm-ledger/` directly to this portfolio repository. Its interface and rules are grounded in the actual local Ledger source: dashboard, transactions, payments, monthly reports, spending service, app shell, original brand artwork, and the explicit mock-data fixture. All account names and suffixes were replaced with demo labels. No production database, environment file, credentials, bank records, or private session data was copied. The original Ledger repository and application were not modified.

The working demo provides dashboard/category/account summaries, month switching, merchant/account/category/status/movement filters, sample category and note edits, separate card-payment reporting, monthly breakdowns, CSV download, reset, English/Chinese, light/dark appearance, native modal keyboard support, and focus restoration. Edits remain in memory and reset on reload. It clearly identifies itself as a functional preview with synthetic data; banking connections and authentication are outside its scope. It does not claim to implement the complete production application or XLSX export.

The portfolio's Ledger card now links to `demos/vdm-ledger/index.html` through the existing localized demo action. The English static HTML includes the same link when JavaScript is disabled. The private production application remains available as a labeled owner-sign-in link in the demo footer. No private GitHub repository link was exposed as a public source-code action.

Verification:

- All nine `node --test tests/ledger-demo.test.cjs` tests passed: August spending/income/pending/payment separation, month boundaries, refunds and eligible fees, internal-payment exclusion, pending exclusion, category/account reconciliation, edits, combined filtering, CSV escaping, and formula-safe text fields.
- The sample August summary was $384.43 posted spending, $2,650.00 income, $31.18 pending estimate, and $500.00 card repayments. June was $14.00 net spending ($39.00 eligible fee minus $25.00 refund), and July was $119.08.
- Browser checks verified merchant search (two Uber results), combined pending filtering (one result), filter reset (15 August rows), category/note saves, safe literal note text, chart reallocation without changing spending, cancellation through Escape, focus return, and focus fallback when a category edit removes the row from the filtered result.
- The CSV download actually created `vdm-ledger-demo-2026-06.csv`; its contents were read and matched the two June sample transactions. The in-app browser's download-event wait timed out even though the file was successfully downloaded; direct file inspection confirmed the result.
- All 28 English/Chinese dashboard/transactions layouts at 320, 375, 390, 768, 850, 1024, and 1440px had no horizontal overflow. Chinese payments, monthly reports, and the edit dialog were also checked at 320px.
- Light/dark appearance, localized controls, reset/reload behavior, correct report totals, and desktop/mobile screenshots were inspected. No browser warning/error logs were recorded for the demo.
- The rendered portfolio card exposed the correct relative demo link. Browser automation disallows `file:` navigation, so browser testing used a loopback-only local server. Direct-file opening by automation was not verified; the files use classic local scripts and relative assets without a build step.
- JavaScript syntax checks and `git diff --check` passed.

This demo is available locally and will be served under the existing GitHub Pages project path when the portfolio is committed, pushed, and deployed. No commit, push, deployment, domain change, or production financial action was performed.

## Subsequent publication and portfolio effects — October 5, 2026

After the preceding local-only checkpoint, the user requested publication of the anonymous demo on the existing Ledger site, followed by additional portfolio effects.

- Ledger commit `92c838f1e3cc86ca1a9658774ef3759a44a51c8f` was pushed to its existing private repository. All 126 non-database tests, lint, TypeScript checks, production build, and staged credential scan passed.
- An exact read-only public route allowlist serves static demo assets before owner authentication. The existing production authentication, same-origin checks, security headers, and CSP remain intact.
- Deployed successfully to the existing Vercel project. Anonymous HTTP requests to `https://vdm-ledger.vercel.app/demo` and its JavaScript returned 200; `/dashboard` returned 307 to `/login`, the export API returned 401, and unknown demo paths still required login.
- Live browser verification confirmed the sample totals, two Uber search results, sample-note save, reset, Chinese translation, and no warning/error logs. No production bank or database mutation was performed.
- Both portfolio configuration and English static HTML now link to `https://vdm-ledger.vercel.app/demo`; the local demo remains available.

Added staggered hero entrance and scroll entrance through Web Animations, a floating focus panel, pulsing status dot, project scanning texture/orbit/arrow, CTA sheen, desktop card spotlight and limited perspective, reading progress, and current-section navigation. Content is visible by default; scroll effects do not leave offscreen sections hidden. All new animations obey the existing manual switch and system reduced-motion preference. Fine-pointer detection excludes touch interaction from tilt. No external dependency was added. Original day/night/blush particle counts, sizes, colors, gradients, and pause/resume scheduler were retained.

- All 14 English/Chinese layouts from 320 to 1440px were rechecked with effects enabled and had no horizontal overflow.
- Actual pointer interaction activated the Ledger card glow and nonidentity cover transform; project navigation selected its current section and updated reading progress.
- Pause removed the panel/arrow animation and perspective transform; the pause preference survived reload, and resuming/language rerender restored effects.
- A temporary harness exercised the actual script with five automatic/manual/system motion combinations and verified cancellation of in-progress entrances when paused. The reduced-motion stylesheet disables CSS animation and transition.
- Day, night, and blush backgrounds remained full-viewport; desktop and mobile previews were inspected. Browser logs, syntax checks, the nine demo model tests, and whitespace checks passed.

The Ledger public demo is online. Portfolio files are modified directly in the original checkout and remain uncommitted; their new link and effects have not yet been published to GitHub Pages.

## Portfolio publication preflight — October 5, 2026

The user subsequently explicitly requested publishing the new portfolio. The original checkout remained on `main`, matched `origin/main` before publication, and contained only the expected portfolio, demo, documentation, and test changes. No applicable AGENTS.md was found. GitHub Pages was verified through the authenticated repository API: legacy build from the `main` branch root, no custom domain, HTTPS enabled, and the existing `https://vitamindmilk.github.io/HTML-Portfolio/` URL.

JavaScript syntax checks, all nine Ledger model tests, and whitespace checks passed before publication. This release includes all previously verified bilingual content, the preserved original particle backgrounds, additional effects, and the live Ledger demo link. Publish by normal commit/push to the configured branch, then verify the Pages build revision and compare served assets with local source. No repository rename or DNS modification is part of this release.

## Migration to free user-site URL — October 5, 2026

The user approved the proposed `https://vitamindmilk.github.io/` migration, preserving the old project-site redirect and updating the Ledger return link. An authenticated API check confirmed that the user-site repository did not already exist. A new public repository was created for the same already-public portfolio; the existing repository and all Git history remain recoverable. The homepage has an explicit canonical URL and `.nojekyll` for the static site. The original desktop checkout remains the maintenance directory. New user-site deployment must be verified before publishing the old entry redirect.

Migration verification completed:

- User-site commit `3c2f079` deployed successfully. All 11 web assets at the new root returned HTTP 200 and matched local source after line-ending normalization (binary images matched byte-for-byte).
- Legacy commit `1df8dca` deployed the homepage and local-demo redirects without deleting existing assets or Git history. Real browser navigation preserved query parameters and `#project-vdm-ledger`; the old local-demo route preserved `#transactions` and displayed 15 sample transactions at the new path. JavaScript-disabled refresh and visible fallback links are present.
- A temporary harness executed both redirect scripts with query strings, UTF-8 encoded values, and fragments. All target URL assertions passed.
- Ledger commit `a93887e` updated both return links. Lint, TypeScript, three public-route tests, production build, and the staged secret scan passed. Deployment succeeded on the existing Vercel project with explicit `--scope pocket-ledger2`.
- Anonymous `/demo` returned 200 with the new backlink. The owner dashboard still redirected to login (307), and its export API still returned 401. The actual demo Back to portfolio link navigated to `https://vitamindmilk.github.io/#project-vdm-ledger`.
- New-root browser checks confirmed the canonical URL, Chinese rendering, three project cards, an enabled animation control, no horizontal overflow in the current viewport, and no warning/error logs. Core UI code is unchanged from the previously validated responsive release.
- Current desktop checkout's `origin` is the new homepage repository; `legacy` retains the old repository. Both migration commits preserve previous public history. The private Ledger repository remains separate.

The active portfolio URL is `https://vitamindmilk.github.io/`.


## Bright default theme — October 5, 2026

Added a fourth theme with warm-white background, graphite text, white panels, neutral project covers, fine borders, and subtle shadows. The static English HTML uses it by default as well. Hero/scroll entrance, hover feedback, navigation progress, and the manual motion switch remain available; the bright theme has no colored particles or recurring decorative animation. Original day/night/blush palettes, gradients, 80 bubbles / 200 stars / 100 petals, and particle scheduling remain intact. The favicon uses the new neutral accent.

The old implementation saved its day default automatically. A separate explicit-choice preference now preserves every future manual theme choice; existing night/blush selections survive migration, while old day/default and invalid preferences adopt bright. Old automatic day and manually selected day cannot be distinguished, so both migrate once; selecting day again is remembered. Storage failure falls back safely.

Verification before publication:

- Actual browser checks covered all 56 combinations of four themes, English/Chinese, and 320, 375, 390, 768, 850, 1024, and 1440px. No horizontal overflow occurred; header height stayed within navigation scroll padding. A narrow-screen adjustment keeps the fourth theme control beside the brand at 320px.
- Every theme and Chinese selection survived actual page reload. Pause survived reload; resume restored effects. The bright panel had no looping animation and project scan decoration was hidden. The existing three project cards and public Ledger demo link remained correct.
- A temporary harness executed the real script with 10 preference/storage cases and checked original particle counts, day bubble radii, and bright canvas clearing with no particle frame scheduled.
- Nine text/background pairs from the bright palette exceeded 4.5:1; the lowest measured ratio was 5.88:1. This checks those colors, not a claim of whole-site accessibility certification.
- Desktop hero, project cards, and 320px mobile appearance were inspected. Browser warning/error logs were empty; JavaScript syntax and whitespace checks passed. No external dependencies or personal-content changes were introduced.

Publish by normal commit/push to the existing homepage repository, then confirm the Pages revision and served assets. The old project-site redirect and the separate Ledger application require no change for this theme update.


## User-provided original resume download — October 5, 2026

Inspected the complete one-page PDF supplied by the user, extracted its text, and rendered the page for visual review. Its contact details match those already publicly displayed, and its portfolio URL is the current root homepage. Stored the PDF unchanged as resume.pdf (251,343 bytes); SHA-256 comparison confirmed byte-for-byte identity with the source. No re-export or resume-content editing was performed.

Enabled the existing bilingual homepage download link, with a descriptive Wei-David-Dai-Resume.pdf filename. The English static link also remains available without JavaScript. Browser checks verified both language labels and the correct visible destination at 320px and 1280px, with no horizontal overflow or warning/error logs. A local HTTP request returned 200 with a valid PDF signature and the original bytes. JavaScript syntax and whitespace checks passed.

The PDF still includes the old TOEFL entry, potentially ambiguous PFW degree wording, and does not include the previously confirmed Beijing Zhongheng Borui experience. The website's confirmed factual wording remains unchanged; revising the supplied resume is a separate follow-up. Publish through the existing homepage repository and verify the PDF's public response and byte identity after deployment.


Publication check: Pages built resume commit 9edc745 successfully, and the public PDF returned 200 with application/pdf and original bytes. Browser reload exposed an HTTP-cache issue: the new HTML was present, but the previous empty resume configuration was still cached, hiding the button. Versioned the content.js script URL to force retrieval of the updated configuration for returning visitors; verify this correction in the same browser session before reporting completion.


## Unified theme icons and animated bright theme — October 5, 2026

Following the user's feedback that the square icon looked inconsistent and the default theme felt too static, replaced all four theme glyphs with self-contained SVG icons sharing a 24px viewBox, 18px display size, and 1.6px rounded stroke. Bright uses a sun; day, night, and blush retain half-disc, moon, and flower meanings. Accessible names and pressed states remain on the buttons; SVGs are hidden from assistive technology.

The bright canvas now renders two broad neutral light fields, a faint grid, three moving orbital markers and rings, and 14 drifting nodes. The light palette remains restrained. Restored the existing floating panel, status pulse, project-cover scanning/orbit, CTA sheen, and hover/entrance feedback for bright, with slower decoration speeds and neutral panel/cover gradients. Original day/night/blush particle types, counts, radii, colors, gradients, and scheduler behavior remain unchanged. Asset URL versions for HTML's stylesheet and both scripts prevent returning visitors from using older cached behavior.

The user clarified that AI Workspace and Personal Smart Locker are not fully complete. Both now show localized In development / 开发中 badges, including in English static HTML; demo/source/media URLs remain empty. Previously confirmed component descriptions are retained, and the existing Ledger demo and resume remain available.

Verification:

- All 56 four-theme / two-language / seven-width layouts from 320 to 1440px passed without horizontal overflow; all four icons were present and sticky-header height stayed within navigation scroll padding. Desktop and 320px mobile visuals were inspected.
- A temporary harness executed the actual script for 12 theme/motion combinations, preserving 80 original bubbles, 200 stars, and 100 petals. Bright contains three orbital markers plus 14 nodes and two light fields. Frame progression changed coordinates; pause/resume reused the same scene; hiding the page stopped scheduling.
- Actual full-window screenshots showed changed pixels in a background-only region while running; two paused full-window screenshots were pixel-identical. The capture tool's clipped screenshots triggered viewport resizing and scene reinitialization, so final motion assertions used full-window captures and compared the background region afterward. This avoided confusing capture-induced resizing with animation.
- Actual pause survived reload; resuming restored the floating panel. Original background logic still uses the same single scheduler and capped pixel ratio. Both development labels, the public Ledger demo, and the visible resume action were checked. Browser warning/error logs, JavaScript syntax, and whitespace checks passed.

Publish normally to the existing homepage repository and verify the served versioned assets and live UI. No new demo, fabricated project media, dependency, or backend change was introduced. This completes the requested visual refinement; further site work can wait until there are real project milestones to present.


## Restore date-only project presentation — October 5, 2026

At the user's explicit request, removed the additional In development / 开发中 badges from AI Workspace and Personal Smart Locker. Both projects retain their original Aug. 2026 – Present / 2026 年 8 月 – 至今 dates. Removed the unused status fields, rendering fragment, and badge CSS; synchronized the English static HTML. Existing descriptions, links, themes, motion, and resume remain unchanged. Updated the three asset version tags so returning visitors retrieve the corrected presentation.

JavaScript syntax and whitespace checks passed. Verify both language renderings and publish normally to the existing homepage repository. This request supersedes the earlier choice to display extra project status badges.

## Pixel interests section — October 7, 2026

Added 06 / Interests between Leadership and Contact using the user's confirmed hobby list, seven real photographs, and two supplied videos as motion references. Eleven scenes cover golf, travel, road cycling, cooking/baking, bouldering, basketball, snowboarding, swimming, piano, computer games, and listening to music. Four hobbies without photographs use illustrations only. All generated bitmap assets were produced with built-in image_gen; prompt and refinement records are in assets/interests/GENERATION.md. Travel's route is illustrative, and the snow scene uses a snowboard matching the supplied media. Reference videos and private filesystem paths are not published.

Every scene has a transparent sprite atlas, static poster, and standalone looping GIF. Photographs are resized WebP exports without camera metadata; originals remain untouched. The website plays the atlases through one shared scheduler, loads them near the viewport, redraws only when a pose changes, and pauses offscreen/hidden-page players. Clicking or keyboard activation restarts at frame zero and then continues looping. Global animation pause preserves the current frame, including across language/theme changes; while paused, replay resets to the first pose. Fresh visitors who prefer reduced motion receive static scenes. Language changes disconnect old observers and players. Photo enlargement reuses the existing dialog with Escape and native focus restoration.

Verification performed on the actual local page:

- 24 language/theme/viewport combinations: English and Chinese, all four themes, widths 320/768/1440px, with no horizontal overflow, 11 cards, seven photo links, and nonempty localized headings.
- After refining the last-row layout, repeated the six language/width checks; four small illustrated cards fill the area beside the snowboarding photograph on desktop. Inspected desktop and phone layouts and corrected the small-avatar sizing to prevent clipping.
- All 11 atlases loaded on demand; all 11 replay controls returned to frame zero. Enter activated replay as well.
- Live frame values advanced while enabled. Paused frame values remained identical across separate observations; resuming advanced them again. Offscreen scenes did not run.
- Enlarged the real golf photo; closing the dialog restored focus to its photo link.
- Tested a fresh origin with emulated reduced motion: bright theme, animation disabled, every pose at zero. With script execution disabled, all 11 English cards, seven photographs, 11 static posters, photo destinations, and the existing resume link remained available.
- GIF inspection confirmed 16 golf frames and eight frames for each other hobby, matching configured durations, loop metadata, and transparent exported atlases.
- JavaScript syntax and whitespace checks passed; browser warning/error logs were empty. Existing Ledger calculation/export tests passed: nine tests.
- Existing project date-only presentation, Ledger demo link, resume, and original day/night/blush background implementations remain in place. Updated all stylesheet/script version markers for returning visitors.

Publish through the existing homepage repository and verify the built revision, served assets, and live interests UI before reporting deployment complete.

## Guitar correction — October 7, 2026

The user clarified that the instrument is guitar. Replaced the piano scene with a newly generated eight-frame acoustic-guitar scene, updated both language labels and the static English fallback, and refreshed the asset version markers. Earlier piano references in this validation record are historical. The other ten scenes are unchanged. All eleven active standalone GIFs are stored in assets/interests/<id>/animation.gif and tracked in the homepage repository; superseded piano assets remain recoverable from Git history.

Verified asset configuration and JavaScript syntax, eight guitar GIF frames with looping metadata and transparency, and both language labels on the actual local page. At 1280px and 320px, the guitar canvas loaded, click and Enter restarted playback, and there was no horizontal overflow. Browser warning/error logs were empty. The existing shared animation scheduler and other site functions were not modified. Publish and verify the served revision and media before reporting completion.

## Floating workstation homepage release — October 7, 2026

The user approved publishing the refined workstation preview. Promoted the complete page into `index.html`, with production `workstation.css` and `workstation.js`. The homepage now uses the enlarged three-direction controls, native floating laptop, and coordinated Bright, Day, Night, and Blush palettes. Removed preview comparison links and concept labels, restored the root canonical URL, and removed the preview's noindex directive. Refreshed all homepage stylesheet and script version markers for returning visitors.

The shared background controller accepts the workstation scene's bubble painter. Original particle counts, sizes, velocities, star blinking, flower rotation, pause preference, and animation lifecycle remain intact: 80 blue bubbles, 200 stars, and 100 flowers using the original `petal.png`. Day bubbles have glass highlights; Blush flowers use reduced color saturation. Bright remains the default. The production scene is scoped to `workstation-home`.

Release checks used the actual production homepage:

- 24 language/theme/width combinations: EN and Chinese, all four themes, and 320/768/1440px viewports. Per-tab device emulation was verified by measured client widths of 305/753/1425px, allowing for the scrollbar. All had no horizontal overflow, no failed loaded images, three projects, eleven interests, accessible control sizes, and no overlap between controls and the laptop. Final corrections confined the phone introduction's soft light within the page and added desktop clearance for the floating laptop.
- All 32 local HTML resource references exist; all 12 internal anchor references resolve; IDs are unique. The production page has the root canonical, no noindex directive, and no preview-only links or local server addresses.
- SHA-256 comparisons confirmed that 54 existing files, including content, base styles, resume, Ledger demo, photographs, sprite atlases, and GIFs, were unchanged.
- ArrowRight selected Embedded systems, exposed only its matching screen, and pointed the related link to Personal Smart Locker.
- Reduced motion paused the visible scene. With JavaScript disabled, the English page, three projects, eleven interests, static laptop, and resume link remained available.
- Browser warnings and errors were empty. Both changed JavaScript files passed syntax checks; whitespace checks passed.

Publish to the existing `main` branch and confirm the GitHub Pages workflow for that commit, served production bytes, and the live UI before reporting deployment complete. Earlier ocean and workstation concept files remain local working drafts and are not part of this release.
