/* LingoLumi: vollständige Offline-App; niemals private Vokabeldateien cachen. */
const CACHE='lingolumi-v42-20261118';
const ASSETS=['./','./index.html','./style.css?v=42','./app.js?v=42','./course.js?v=42','./book_words.js?v=42','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(ASSETS);
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('lingolumi-')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const req=event.request,url=new URL(req.url),scope=new URL(self.registration.scope);
  if(req.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    if(req.mode==='navigate'){
      try{
        const response=await fetch(req,{cache:'no-store'});
        if(response.ok){await cache.put('./index.html',response.clone());await cache.put('./',response.clone());}
        return response;
      }catch{return await cache.match('./index.html')||await cache.match('./')||Response.error()}
    }
    // Feste App-Dateien aus derselben geprüften Version; bei Versionswechsel wird
    // ein neuer Cache atomar vorab geladen. Dadurch funktioniert Offline weiterhin.
    const hit=await cache.match(req,{ignoreSearch:false});
    if(hit)return hit;
    try{
      const response=await fetch(req);
      if(response.ok)await cache.put(req,response.clone());
      return response;
    }catch{return Response.error()}
  })());
});
