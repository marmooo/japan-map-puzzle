const CACHE_NAME = "2025-06-22 03:20";
const urlsToCache = [
  "/japan-map-puzzle/",
  "/japan-map-puzzle/en/",
  "/japan-map-puzzle/index.js",
  "/japan-map-puzzle/map.svg",
  "/japan-map-puzzle/data/en.lst",
  "/japan-map-puzzle/mp3/decision50.mp3",
  "/japan-map-puzzle/mp3/correct1.mp3",
  "/japan-map-puzzle/mp3/correct3.mp3",
  "/japan-map-puzzle/favicon/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
