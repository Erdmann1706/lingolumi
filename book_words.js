/* Die Schulbuchvokabeln werden nur lokal auf dem Gerät gespeichert. Diese Datei enthält keine Buchinhalte. */
const BOOK_STORAGE='lingolumi-private-book-v1';
let BOOK_WORDS=[];
try {
  const store=JSON.parse(localStorage.getItem(BOOK_STORAGE)||'null');
  if(store&&store.format===1&&Array.isArray(store.words)&&store.words.length<=1000){
    BOOK_WORDS=store.words.filter(w=>w&&typeof w.id==='number'&&w.id>=3000&&w.id<=3999&&typeof w.en==='string'&&typeof w.de==='string'&&typeof w.topic==='string'&&Number.isInteger(w.page)&&w.page>=214&&w.page<=253);
  }
} catch { /* ohne private Daten bleibt die thematische Grundversion verfügbar */ }
