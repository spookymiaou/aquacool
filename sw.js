// AquaCool — fait marcher le jeu hors connexion
const CACHE = 'aquacool-v19';
const FILES = ['./', './index.html', './style.css?v=19', './script.js?v=19', './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Réseau d'abord (pour avoir les mises à jour), sinon la copie gardée
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (/goatcounter\.com|gc\.zgo\.at/.test(e.request.url)) return; // statistiques : jamais en cache
  e.respondWith(
    fetch(e.request,{cache:'no-cache'}).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
