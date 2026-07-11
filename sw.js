// PROSPER Service Worker — offline-first cache for tube/commute
const CACHE = 'prosper-xau-v26-20260711-evidence-pack';
const ASSETS = [
  './course_xau.html',
  './course.html',
  './tradelog.html',
  './course_v2.html',
  './course_swing_v3.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  './media/xau_demos/tradingview_xau_base.png',
  './media/xau_demos/xau_h1_setup_to_execution_narrated.mp4',
  './media/xau_demos/xau_h1_setup_to_execution.vtt',
  './media/xau_demos/xau_case_clean_vs_messy.mp4',
  './media/xau_demos/xau_case_clean_vs_messy.vtt',
  './media/xau_demos/xau_case_wick_false_breakout.mp4',
  './media/xau_demos/xau_case_wick_false_breakout.vtt',
  './media/xau_demos/xau_case_ema_dxy_block.mp4',
  './media/xau_demos/xau_case_ema_dxy_block.vtt',
  './media/xau_demos/xau_case_risk_journal.mp4',
  './media/xau_demos/xau_case_risk_journal.vtt',
  './media/video_lessons/lesson01_reading_one_candle_uk_voice.png',
  './media/video_lessons/lesson01_reading_one_candle_uk_voice.mp4',
  './media/video_lessons/lesson01_reading_one_candle_uk_voice.vtt',
  './media/video_lessons/lesson04_breakout_close_uk_voice.png',
  './media/video_lessons/lesson04_breakout_close_uk_voice.mp4',
  './media/video_lessons/lesson04_breakout_close_uk_voice.vtt',
  './media/evidence_pack/case01_current_rollover_messy_dont_trade.png',
  './evidence_pack/README.md',
  './evidence_pack/case_register.csv',
  './evidence_pack/cases/case01_current_rollover_messy_dont_trade.md',
  './GPT_VIDEO_LESSON_PACKAGES_2026_07_11.md',
  './art/hero.png',
  './art/icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
