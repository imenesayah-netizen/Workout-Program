// Clear all caches on install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.skipWaiting();
});
self.addEventListener('activate', e => { self.clients.claim(); });
