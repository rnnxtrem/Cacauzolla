self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open('rd-sense').then(cache=>{
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/logo.png',
        '/gerador de config.html',
        '/CLT.apk'
      ]);
    })
  );
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(res=>res||fetch(e.request))
  );
});