const CACHE_NAME = 'tk-ananda-v2'; // Naikkan versi ke v2
const assets = [
  './',
  './index.html',
  './arsip.html',
  './input_lama.html',
  './pic/logo.png',
  './manifest.json'
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Menggunakan return agar proses instalasi tidak berhenti jika satu file gagal
      return cache.addAll(assets);
    })
  );
});

// Strategi Network First: Coba ambil data terbaru, jika gagal/offline gunakan cache
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});