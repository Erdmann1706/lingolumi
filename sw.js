/* Alle benötigten App-Dateien vorladen und offline verfügbar halten. */
const CACHE='lingolumi-v41-20261118';
const ASSETS=['./','./index.html','./style.css','./app.js','./course.js','./book_words.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('lingolumi-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const req=event.request,url=new URL(req.url),scope=new URL(self.registration.scope);
  if(req.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}
    catch{return await cache.match(req)|| (req.mode==='navigate'?await cache.match('./index.html'):undefined)||Response.error()}
  })());
});
