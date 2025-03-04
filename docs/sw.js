const CACHE_NAME="2025-03-05 00:00",urlsToCache=["/japan-map-puzzle/","/japan-map-puzzle/en/","/japan-map-puzzle/index.js","/japan-map-puzzle/map.svg","/japan-map-puzzle/data/en.lst","/japan-map-puzzle/mp3/decision50.mp3","/japan-map-puzzle/mp3/correct1.mp3","/japan-map-puzzle/mp3/correct3.mp3","/japan-map-puzzle/favicon/favicon.svg"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})