const CACHE_NAME='tv-player-v1';
const urlsToCache=[
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  // Não fazer cache de iframes (streams)
  if(e.request.url.includes('sinalpublicoetv.vercel.app')||
     e.request.url.includes('iframe')||
     e.request.method!=='GET'){
    return;
  }

  e.respondWith(
    caches.match(e.request).then(response=>{
      if(response)return response;
      return fetch(e.request).then(res=>{
        if(!res||res.status!==200)return res;
        const resClone=res.clone();
        caches.open(CACHE_NAME).then(cache=>{
          if(e.request.url.startsWith(self.location.origin)){
            cache.put(e.request,resClone);
          }
        });
        return res;
      }).catch(()=>caches.match('./index.html'));
    })
  );
});
