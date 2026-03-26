const CACHE_NAME = 'paulog-v19';
const ASSETS = [
  './',
  './index.html',
  './paulog-manifest.json',
  './paulog-icon-192.png',
  './paulog-icon-512.png'
];

// URLs that should never be cached (Supabase API + CDN)
const NO_CACHE = [
  'supabase.co',
  'cdn.jsdelivr.net'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Never cache Supabase API calls or CDN scripts
  if (NO_CACHE.some(h => url.includes(h))) {
    e.respondWith(fetch(e.request));
    return;
  }
  // Network-first for HTML (always get latest version, cache as fallback for offline)
  if (e.request.mode === 'navigate' || url.endsWith('index.html') || url.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return r;
      }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  // Cache-first for static assets (icons, manifest)
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
