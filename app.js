'use strict';
/* English, German, topic, sample, translation */
const LEGACY_WORDS=[
['cat','Katze','Tiere','The cat is small.','Die Katze ist klein.'],['dog','Hund','Tiere','My dog is happy.','Mein Hund ist glücklich.'],['bird','Vogel','Tiere','The bird can fly.','Der Vogel kann fliegen.'],['horse','Pferd','Tiere','The horse is fast.','Das Pferd ist schnell.'],['rabbit','Kaninchen','Tiere','The rabbit is white.','Das Kaninchen ist weiß.'],['fish','Fisch','Tiere','The fish is in the water.','Der Fisch ist im Wasser.'],['mouse','Maus','Tiere','The mouse is tiny.','Die Maus ist winzig.'],['sheep','Schaf','Tiere','The sheep is on the farm.','Das Schaf ist auf dem Bauernhof.'],['butterfly','Schmetterling','Tiere','The butterfly is beautiful.','Der Schmetterling ist schön.'],['turtle','Schildkröte','Tiere','The turtle moves slowly.','Die Schildkröte bewegt sich langsam.'],
['apple','Apfel','Essen','I eat an apple.','Ich esse einen Apfel.'],['bread','Brot','Essen','The bread is fresh.','Das Brot ist frisch.'],['water','Wasser','Essen','I drink water.','Ich trinke Wasser.'],['cheese','Käse','Essen','I like cheese.','Ich mag Käse.'],['strawberry','Erdbeere','Essen','The strawberry is red.','Die Erdbeere ist rot.'],['breakfast','Frühstück','Essen','Breakfast is ready.','Das Frühstück ist fertig.'],['hungry','hungrig','Essen','I am hungry.','Ich habe Hunger.'],['delicious','lecker','Essen','This cake is delicious.','Dieser Kuchen ist lecker.'],['juice','Saft','Essen','I would like some juice.','Ich hätte gerne etwas Saft.'],['vegetable','Gemüse','Essen','Carrots are vegetables.','Karotten sind Gemüse.'],
['school','Schule','Schule','I go to school.','Ich gehe zur Schule.'],['teacher','Lehrkraft','Schule','The teacher is friendly.','Die Lehrkraft ist freundlich.'],['book','Buch','Schule','This book is interesting.','Dieses Buch ist interessant.'],['pencil','Bleistift','Schule','Where is my pencil?','Wo ist mein Bleistift?'],['question','Frage','Schule','I have a question.','Ich habe eine Frage.'],['answer','Antwort','Schule','I know the answer.','Ich kenne die Antwort.'],['homework','Hausaufgaben','Schule','I finish my homework.','Ich mache meine Hausaufgaben fertig.'],['learn','lernen','Schule','I learn English.','Ich lerne Englisch.'],['understand','verstehen','Schule','I understand the story.','Ich verstehe die Geschichte.'],['difficult','schwierig','Schule','This puzzle is difficult.','Dieses Rätsel ist schwierig.'],
['happy','glücklich','Gefühle','I feel happy today.','Ich bin heute glücklich.'],['sad','traurig','Gefühle','She feels sad.','Sie ist traurig.'],['brave','mutig','Gefühle','You are very brave.','Du bist sehr mutig.'],['excited','aufgeregt','Gefühle','I am excited about the trip.','Ich freue mich auf die Reise.'],['tired','müde','Gefühle','I am tired now.','Ich bin jetzt müde.'],['proud','stolz','Gefühle','I am proud of you.','Ich bin stolz auf dich.'],['kind','freundlich','Gefühle','Be kind to others.','Sei freundlich zu anderen.'],['worried','besorgt','Gefühle','I am worried about the test.','Ich mache mir Sorgen wegen der Prüfung.'],['calm','ruhig','Gefühle','Take a calm breath.','Atme ruhig durch.'],['curious','neugierig','Gefühle','I am curious about space.','Ich bin neugierig auf den Weltraum.'],
['play','spielen','Alltag','We play outside.','Wir spielen draußen.'],['sleep','schlafen','Alltag','I sleep at night.','Ich schlafe nachts.'],['friend','Freund oder Freundin','Alltag','My friend is here.','Mein Freund oder meine Freundin ist hier.'],['family','Familie','Alltag','I love my family.','Ich liebe meine Familie.'],['morning','Morgen','Alltag','Good morning!','Guten Morgen!'],['evening','Abend','Alltag','See you this evening.','Wir sehen uns heute Abend.'],['weather','Wetter','Alltag','The weather is nice.','Das Wetter ist schön.'],['window','Fenster','Alltag','Open the window, please.','Öffne bitte das Fenster.'],['garden','Garten','Alltag','The flowers grow in the garden.','Die Blumen wachsen im Garten.'],['bicycle','Fahrrad','Alltag','My bicycle is blue.','Mein Fahrrad ist blau.'],
['adventure','Abenteuer','Abenteuer','We go on an adventure.','Wir erleben ein Abenteuer.'],['forest','Wald','Abenteuer','The forest is quiet.','Der Wald ist ruhig.'],['treasure','Schatz','Abenteuer','We found the treasure.','Wir haben den Schatz gefunden.'],['mystery','Geheimnis','Abenteuer','This is a mystery.','Das ist ein Geheimnis.'],['explore','erkunden','Abenteuer','Let us explore the island.','Lass uns die Insel erkunden.'],['journey','Reise','Abenteuer','Our journey begins today.','Unsere Reise beginnt heute.'],['discover','entdecken','Abenteuer','I want to discover new things.','Ich möchte neue Dinge entdecken.'],['mountain','Berg','Abenteuer','The mountain is high.','Der Berg ist hoch.'],['secret','Geheimnis','Abenteuer','I have a secret.','Ich habe ein Geheimnis.'],['courage','Mut','Abenteuer','Courage helps you try.','Mut hilft dir, etwas zu versuchen.']
].map((w,i)=>({id:i,en:w[0],de:w[1],topic:w[2],sentence:w[3],translation:w[4]}));
// Alte 60 Wörter und ihre gespeicherten IDs bleiben erhalten.
// Bisherige Lernkarten werden nicht gelöscht; sie bleiben als Zusatztraining nutzbar.
const WORDS=[...LEGACY_WORDS.map(w=>({...w,topic:'Zusatztraining'})),...COURSE_WORDS.map(w=>({...w,topic:'Zusatztraining'})),...BOOK_WORDS];
const TOPICS=[...UNITS.map(([code,emoji])=>[code,emoji]),['Zusatztraining','⭐']];
const courseTopicLabel=topic=>{const u=UNITS.find(u=>u[0]===topic);return u?`${u[0]} · ${u[2]}`:topic==='Zusatztraining'?'Freies Zusatztraining':'Alle Units'};
const topicWords=topic=>topic==='Zusatztraining'?WORDS.filter(w=>w.topic==='Zusatztraining'):(BOOK_WORDS.length?BOOK_WORDS:COURSE_WORDS).filter(w=>topic==='Alle'||w.topic===topic);
const topicActivities=topic=>topic==='Zusatztraining'?[]:COURSE_ACTIVITIES.filter(a=>topic==='Alle'||a.topic===topic);
const STORAGE_KEY='lingolumi-v1'; // Liest auch den Lernstand der ersten Version.
const app=document.getElementById('app');
const soundButton=document.getElementById('sound');
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
const localDate=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const plusDays=(days)=>{let d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+days);return localDate(d)};
const fresh=()=>({name:'',sound:true,voiceChoice:'auto',speechRate:0.85,topic:'Hello!',courseVersion:4,items:{},activities:{},history:[],sessions:0,created:localDate()});
const validDate=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)?x:'';
const validTopic=x=>x==='Alle'||TOPICS.some(t=>t[0]===x)?x:'Hello!';
const cleanNumber=(x,min,max)=>Number.isFinite(x)?clamp(Math.floor(x),min,max):min;
function normalize(raw){
  const result=fresh();
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;
  result.name=typeof raw.name==='string'?raw.name.slice(0,22):'';
  result.sound=raw.sound!==false;
  result.voiceChoice=typeof raw.voiceChoice==='string'&&raw.voiceChoice.length<=220?raw.voiceChoice:'auto';
  result.speechRate=[0.72,0.85,1,1.12].includes(raw.speechRate)?raw.speechRate:0.85;
  result.topic=Number(raw.courseVersion)>=3?validTopic(raw.topic):'Hello!';
  result.sessions=cleanNumber(raw.sessions,0,100000);
  result.created=validDate(raw.created)||localDate();
  if(raw.items&&typeof raw.items==='object'&&!Array.isArray(raw.items)){
    WORDS.forEach(w=>{
      const p=raw.items[w.id];if(!p||typeof p!=='object'||Array.isArray(p))return;
      const tries=cleanNumber(p.tries,0,100000),correct=clamp(cleanNumber(p.correct,0,100000),0,tries);
      result.items[w.id]={score:cleanNumber(p.score,0,5),tries,correct,streak:cleanNumber(p.streak,0,100000),due:validDate(p.due),last:validDate(p.last)};
    });
  }
  // V3->V4: Fortschritt für Wörter mit identischer Schreibweise in derselben Unit übernehmen.
  // Die alten Datensätze selbst bleiben unverändert im Zusatztraining erhalten.
  if(Number(raw.courseVersion)<4 && raw.items && typeof raw.items==='object'){
    for(const w of BOOK_WORDS){
      if(result.items[w.id])continue;
      const old=COURSE_WORDS.find(c=>c.topic===w.topic&&c.en.toLocaleLowerCase('en')===w.en.toLocaleLowerCase('en'));
      if(old&&result.items[old.id])result.items[w.id]={...result.items[old.id]};
    }
  }
  if(raw.activities&&typeof raw.activities==='object'&&!Array.isArray(raw.activities)){
    COURSE_ACTIVITIES.forEach(a=>{
      const x=raw.activities[a.id];if(!x||typeof x!=='object'||Array.isArray(x))return;
      const tries=cleanNumber(x.tries,0,100000),correct=clamp(cleanNumber(x.correct,0,100000),0,tries);
      result.activities[a.id]={score:cleanNumber(x.score,0,5),tries,correct,streak:cleanNumber(x.streak,0,100000),due:validDate(x.due),last:validDate(x.last)};
    });
  }
  if(Array.isArray(raw.history))result.history=raw.history.slice(-100).filter(h=>h&&typeof h==='object'&&validDate(h.date)).map(h=>({date:h.date,correct:cleanNumber(h.correct,0,5),total:5}));
  return result;
}
let data=fresh(),storageOk=true,route='home',session=null;
try{const stored=localStorage.getItem(STORAGE_KEY);if(stored)data=normalize(JSON.parse(stored))}catch{storageOk=false}
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));storageOk=true}catch{storageOk=false}}
function item(w){return data.items[w.id]||{score:0,tries:0,correct:0,due:'',streak:0,last:''}}
function activityItem(a){return data.activities[a.id]||{score:0,tries:0,correct:0,due:'',streak:0,last:''}}
function mastered(w){return item(w).score>=4}
function isDue(w){const p=item(w);return p.tries>0&&(!p.due||p.due<=localDate())}
function dueCount(){return topicWords(data.topic).filter(isDue).length+topicActivities(data.topic).filter(a=>{const x=activityItem(a);return x.tries>0&&(!x.due||x.due<=localDate())}).length}
const percentage=(a,b)=>b?Math.round(a/b*100):0;
function stats(){const ws=BOOK_WORDS.length?BOOK_WORDS:COURSE_WORDS;return {learned:ws.filter(w=>item(w).tries>0).length,mastered:ws.filter(mastered).length,total:ws.length,exercises:COURSE_ACTIVITIES.filter(a=>activityItem(a).tries>0).length}}
const audioSupported='speechSynthesis'in window&&'SpeechSynthesisUtterance'in window;
function englishVoices(){
  if(!audioSupported)return [];
  try{return window.speechSynthesis.getVoices().filter(v=>/^en(?:-|$)/i.test(v.lang)).sort((a,b)=>{
    const rank=v=>String(v.lang).toLowerCase()==='en-gb'?0:String(v.lang).toLowerCase()==='en-us'?1:2;
    return rank(a)-rank(b)||Number(b.localService)-Number(a.localService)||a.name.localeCompare(b.name);
  })}catch{return []}
}
function voiceKey(v){return v.voiceURI+'|'+v.lang}
function preferredVoice(){
  const voices=englishVoices();
  if(data.voiceChoice!=='auto'){
    const selected=voices.find(v=>voiceKey(v)===data.voiceChoice);
    if(selected)return selected;
  }
  return voices.find(v=>v.lang.toLowerCase()==='en-gb'&&v.localService)
    ||voices.find(v=>v.lang.toLowerCase()==='en-gb')
    ||voices.find(v=>v.localService)||voices[0]||null;
}
// Ausschließlich die installierten Systemstimmen des Geräts, keine Web-API- oder Cloud-KI-Anfragen.
function speak(text,slow=false){
  if(!data.sound||!audioSupported)return false;
  try{
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    const voice=preferredVoice();
    if(voice){u.voice=voice;u.lang=voice.lang}else u.lang='en-GB';
    u.rate=slow?Math.min(data.speechRate,0.72):data.speechRate;
    u.pitch=1;u.volume=1;
    window.speechSynthesis.speak(u);
    return true;
  }catch{return false}
}
function canListen(){return audioSupported&&data.sound}
function voiceChoices(){
  const voices=englishVoices();
  return `<option value="auto" ${data.voiceChoice==='auto'?'selected':''}>Automatisch · britisches Englisch</option>`+
    voices.map(v=>`<option value="${escapeHtml(voiceKey(v))}" ${data.voiceChoice===voiceKey(v)?'selected':''}>${escapeHtml(v.name)} · ${escapeHtml(v.lang)}${v.localService?' · auf dem Gerät':''}</option>`).join('');
}
function nav(next){window.speechSynthesis?.cancel?.();route=next;session=null;render();window.scrollTo(0,0)}
function render(){
  document.querySelectorAll('.navbtn').forEach(b=>{b.classList.toggle('active',b.dataset.route===route);if(b.dataset.route===route)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  soundButton.textContent=data.sound?'🔊':'🔇';soundButton.setAttribute('aria-label',data.sound?'Ton ausschalten':'Ton einschalten');
  app.innerHTML=({home,learn,progress,settings,quiz,done})[route]();
  if(route==='quiz'&&session?.kind==='spell'&&!session.answered){/* Tastatur nicht automatisch öffnen: Das verdeckt auf kleinen iPhones die Frage. */}
}
function home(){
  const s=stats(),first=!data.sessions,hasDue=dueCount()>0,active=courseTopicLabel(data.topic);
  return `<section class="hero"><div class="eyebrow">${first?'Willkommen bei LingoLumi':'Schön, dass du da bist!'}</div><h1>${data.name?`Hey ${escapeHtml(data.name)}!`:'Dein Englisch-Abenteuer.'}</h1><p>${first?'Lerne die Wörter aus deinem Lighthouse-Buch Schritt für Schritt.':'Ein paar Minuten üben reichen. Fehler sind eine Chance zum Lernen.'}</p><div class="mascot" aria-hidden="true">🦊</div></section>
    ${!storageOk?storageWarning():''}
    <div class="book-banner"><b>📘 Lighthouse · Band 1</b><span>5. Klasse · Schulbuchvokabeln von Seite 214–253</span><small>Bedeutungen teils vereinfacht · Eigene Grammatik- und Leseaufgaben</small></div>
    ${!BOOK_WORDS.length?`<div class="feedback retry"><b>Deine Buch-Wortliste fehlt noch.</b><p>Öffne „Mehr“ und importiere einmalig die private Schulbuch-Datei. Bis dahin laufen die bisherigen Übungen weiter.</p><button class="btn secondary" data-route="settings">Wortliste einrichten</button></div>`:''}
    <div class="card"><div class="eyebrow">Dein Lernabschnitt</div><h2 style="margin:6px 0">${escapeHtml(active)}</h2><div class="muted">${hasDue?'Es gibt Wörter oder Aufgaben zum Wiederholen.':'5 Aufgaben · etwa 3–5 Minuten · kein Zeitdruck'}</div><div style="height:14px"></div><button class="btn" data-action="start">Jetzt üben</button><button class="btn secondary" style="margin-top:10px" data-route="learn">Anderen Abschnitt wählen</button></div>
    <div class="stats"><div class="stat"><strong>${s.learned}</strong><span>${BOOK_WORDS.length?'Buchvokabeln geübt':'Übungswörter geübt'}</span></div><div class="stat"><strong>${s.exercises}</strong><span>Grammatik- & Leseaufgaben entdeckt</span></div></div>
    <h2>Alle Lernabschnitte</h2><div class="topicgrid">${UNITS.map(([code,emoji,title,desc])=>`<button class="topic ${data.topic===code?'selected':''}" data-topic="${code}"><span class="emoji" aria-hidden="true">${emoji}</span><b>${code}: ${escapeHtml(title)}</b><small>${escapeHtml(desc)}</small></button>`).join('')}</div>`;
}
function storageWarning(){return `<div class="feedback retry" role="status"><strong>Dein Lernstand wird gerade nicht gespeichert.</strong><p>Bitte prüfe, ob private Browser-Einstellungen oder Speicherbeschränkungen aktiv sind.</p></div>`}
function learn(){
  return `<div class="eyebrow">Lighthouse · Band 1</div><h1>Was übst du heute?</h1><p class="muted">Wähle die Unit aus dem Buch. Nach dem Import erscheinen neue Vokabeln innerhalb einer Unit ungefähr in Buchreihenfolge; unsichere Wörter kommen wieder. Jede Runde enthält auch eigene Grammatik- und Leseaufgaben.</p>
    <div class="card"><button class="topic ${data.topic==='Alle'?'selected':''}" style="min-height:75px;width:100%" data-topic="Alle" aria-pressed="${data.topic==='Alle'}"><b>🌈 Alle Units mischen</b><small>Für Wiederholungen nach mehreren Kapiteln</small></button>
    <div class="topicgrid" style="margin-top:10px">${UNITS.map(([code,emoji,title,desc])=>`<button class="topic ${data.topic===code?'selected':''}" data-topic="${code}" aria-pressed="${data.topic===code}"><span class="emoji" aria-hidden="true">${emoji}</span><b>${code}: ${escapeHtml(title)}</b><small>${escapeHtml(desc)}</small></button>`).join('')}</div></div>
    <div class="card"><h3>${escapeHtml(courseTopicLabel(data.topic))}</h3><p class="muted">Fünf Aufgaben in einer Runde. Schwierige Fragen werden häufiger wiederholt, gut gelöste später erneut.</p><button class="btn" data-action="start">Runde starten</button></div>
    <button class="topic ${data.topic==='Zusatztraining'?'selected':''}" style="width:100%;margin-bottom:10px" data-topic="Zusatztraining"><b>⭐ Bisheriges Zusatztraining</b><small>Die alten 60 Grundwörter und 168 Übungswörter bleiben mit ihrem Lernstand erhalten.</small></button>`;
}
function progress(){
  const s=stats();
  return `<div class="eyebrow">Dein Lernweg</div><h1>Schau, was du schon kannst!</h1>
    <div class="card"><div class="row"><h3>Wörter aus den Lernabschnitten</h3><b>${s.learned} / ${s.total}</b></div><div class="meter" role="progressbar" aria-label="Geübte Wörter" aria-valuenow="${s.learned}" aria-valuemin="0" aria-valuemax="${s.total}"><div class="fill" style="width:${percentage(s.learned,s.total)}%"></div></div><p class="muted">Jedes neue Wort zählt. Nur geübte Wörter sind noch nicht automatisch sicher gekonnt.</p></div>
    <div class="stats"><div class="stat"><strong>${s.mastered}</strong><span>Gut geübte Wörter</span></div><div class="stat"><strong>${data.sessions}</strong><span>Abgeschlossene Runden</span></div></div>
    <h2>Fortschritt nach Units</h2>${UNITS.map(([code,emoji,title])=>{let ws=topicWords(code),n=ws.filter(mastered).length,activities=topicActivities(code),a=activities.filter(x=>activityItem(x).tries>0).length;return `<div class="card"><div class="row"><span><b>${emoji} ${code}: ${escapeHtml(title)}</b><span class="muted" style="display:block">${n} von ${ws.length} Wörtern gut geübt · ${a} von ${activities.length} Zusatzaufgaben bearbeitet</span></span><span class="pill">${percentage(n,ws.length)} %</span></div><div class="meter" style="margin-top:12px" role="progressbar" aria-label="${code}" aria-valuenow="${n}" aria-valuemin="0" aria-valuemax="${ws.length}"><div class="fill" style="width:${percentage(n,ws.length)}%"></div></div></div>`}).join('')}
    <p class="note">„Gut geübt“ bedeutet: wiederholt richtig gelöst. Auch beherrschte Wörter kommen später zurück. Der bisherige Lernstand bleibt erhalten. Nach dem Import zeigen die Schulbuchkarten zeigen die vereinfachte Hauptbedeutung; Mehrdeutigkeiten können im Buch genauer erklärt sein.</p>`;
}
function settings(){
  return `<div class="eyebrow">Dein Lernbegleiter</div><h1>Meine Einstellungen</h1>
    <div class="card"><label for="name"><b>Wie darf ich dich nennen?</b></label><p class="muted">Am besten nur ein Spitzname. Bleibt auf diesem Gerät.</p><input id="name" class="textinput" maxlength="22" placeholder="Dein Spitzname" value="${escapeHtml(data.name)}"><button class="btn secondary" style="margin-top:12px" data-action="name">Namen speichern</button></div>
    <div class="card"><h3>Englische Stimme</h3><label class="opt"><input id="audio" type="checkbox" ${data.sound?'checked':''} ${!audioSupported?'disabled':''}><span><b>Englisch vorlesen</b><span class="muted" style="display:block">Benutzt die Systemstimmen des iPhones.</span></span></label>
      <label class="field-label" for="voice-choice">Stimme auswählen</label><select id="voice-choice" class="voice-select" ${!audioSupported?'disabled':''}>${voiceChoices()}</select>
      <p class="note">${englishVoices().length?`${englishVoices().length} englische Stimme(n) verfügbar. Wähle die angenehmste aus.`:'Wenn keine Stimmen angezeigt werden, versucht LingoLumi automatisch eine englische Systemstimme.'} Nicht jede iPhone-Stimme ist für Web-Apps auswählbar.</p>
      <label class="field-label" for="speech-rate">Sprechtempo</label><select id="speech-rate" class="voice-select" ${!audioSupported?'disabled':''}>${[[0.72,'Ruhig · langsam'],[0.85,'Lerntempo · empfohlen'],[1,'Normal'],[1.12,'Etwas schneller']].map(([n,label])=>`<option value="${n}" ${data.speechRate===n?'selected':''}>${label}</option>`).join('')}</select>
      <button class="btn tertiary" style="margin-top:12px" data-action="test-audio" ${!canListen()?'disabled':''}>Stimme ausprobieren</button><button class="btn secondary" style="margin-top:10px" data-action="refresh-voices" ${!audioSupported?'disabled':''}>Stimmen neu laden</button>
      <p class="note">${audioSupported?'In Hörübungen kannst du jedes Wort zusätzlich langsam anhören. Hörst du nichts, prüfe die Lautstärke.':'Diese Browserumgebung unterstützt keine Sprachausgabe. Die App bietet dann nur Lese- und Schreibaufgaben.'}</p></div>
    <div class="card"><h3>Datenschutz & Lernstand</h3><p class="muted">Keine Anmeldung, Werbung oder Nachverfolgung. Antworten und Fortschritte bleiben lokal in dieser Web-App.</p><p class="note">Safari und die installierte Home-Bildschirm-App können getrennte Speicher verwenden. Der Lernstand wird nicht automatisch übertragen. Das Löschen der App oder ihrer Daten kann den Lernstand entfernen.</p>${!storageOk?storageWarning():''}
    <button class="btn tertiary" data-action="export">Lernstand sichern</button><label for="import" class="btn secondary file-label">Sicherung wiederherstellen</label><input id="import" type="file" accept=".json,application/json" class="visually-hidden"><p class="note">Eine Sicherung ist eine JSON-Datei. Sie kann später hier wieder eingelesen werden.</p></div>
    <div class="card"><h3>Schulbuch-Wortliste</h3><p class="muted">${BOOK_WORDS.length?`${BOOK_WORDS.length} Wörter aus den fotografierten Buchseiten sind auf diesem iPhone gespeichert.`:'Noch keine private Buch-Wortliste geladen. Bis zum Import nutzt LingoLumi die bisherigen allgemeinen Übungen.'}</p><label for="book-import" class="btn secondary file-label">${BOOK_WORDS.length?'Wortliste erneut importieren':'Private Wortliste importieren'}</label><input id="book-import" type="file" accept=".json,application/json" class="visually-hidden"><p class="note">Die Wortliste bleibt ausschließlich in dieser installierten App. Lade sie nicht in dein öffentliches GitHub-Repository hoch. Bewahre die private JSON-Datei für eine spätere Neuinstallation auf.</p></div>
    <div class="card"><h3>Für Eltern</h3><p class="muted">Nach privatem Import Vokabelkarten auf Grundlage deiner fotografierten Lighthouse-Wortlisten (Buchseiten 214–253), 48 eigenständig formulierte Grammatikfragen und 12 eigene kurze Lesetexte. Alte Lernkarten und ihr Fortschritt bleiben unter Zusatztraining erhalten. Die deutschen Bedeutungen sind für kurze Übungen teilweise vereinfacht, keine Buchabschrift und keine Aussprachebewertung.</p><button class="linkbtn" data-action="reset">Gesamten Lernstand zurücksetzen</button></div>`;
}
// Gemischte, adaptive Auswahl mit kleinen Aufgabenserien. Kein Zugriff auf künftige Units ohne Auswahl.
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}
function isTaskDue(task,get){const p=get(task);return p.tries>0&&(!p.due||p.due<=localDate())}
function pickItems(pool,n,get){
  const due=shuffle(pool.filter(a=>isTaskDue(a,get))).sort((a,b)=>get(a).score-get(b).score);
  const neverSeen=pool.filter(a=>get(a).tries===0);
  // In einer einzelnen Unit zuerst die früheren Buchseiten erschließen statt Zufall aus dem ganzen Kapitel.
  const unseen=(pool.length&&pool[0].book&&data.topic!=='Alle')?shuffle(neverSeen.slice(0,Math.max(n*3,12))):shuffle(neverSeen);
  const future=shuffle(pool.filter(a=>get(a).tries>0&&!isTaskDue(a,get))).sort((a,b)=>(get(a).due||'').localeCompare(get(b).due||''));
  const out=[];const add=x=>{if(x&&!out.includes(x)&&out.length<n)out.push(x)};
  due.slice(0,Math.ceil(n*.6)).forEach(add);unseen.forEach(add);due.forEach(add);future.forEach(add);
  return out;
}
function chooseWords(){
  const ws=topicWords(data.topic),as=topicActivities(data.topic);
  const wantWords=as.length?3:5;
  const chosen=[...pickItems(ws,wantWords,item),...pickItems(as,5-wantWords,activityItem)];
  if(chosen.length<5){for(const w of pickItems([...ws,...as],5,x=>x.kind?activityItem(x):item(x))){if(!chosen.includes(w))chosen.push(w);if(chosen.length===5)break}}
  return shuffle(chosen.slice(0,5));
}
function start(){
  const words=chooseWords();if(!words.length){nav('learn');return}
  session={words,index:0,correct:0,answered:false,kind:'enToDe',options:[],selectedId:null};
  route='quiz';setupQuestion();render();window.scrollTo(0,0);
}
function makeOptions(word,kind){
  const side=kind==='deToEn'?'en':'de';
  const other=WORDS.filter(w=>w.id!==word.id&&w.topic===word.topic&&w[side]!==word[side]&&(kind!=='deToEn'||w.de!==word.de)&&(kind!=='enToDe'||w.en.toLowerCase()!==word.en.toLowerCase()));
  for(let i=other.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[other[i],other[j]]=[other[j],other[i]]}
  const seen=new Set([word[side]]),picked=[word];
  for(const w of other){if(picked.length===4)break;if(!seen.has(w[side])){picked.push(w);seen.add(w[side])}}
  for(let i=picked.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[picked[i],picked[j]]=[picked[j],picked[i]]}
  return picked.map(w=>({id:w.id,label:w[side]}));
}
function setupQuestion(){
  if(!session)return;
  const w=session.words[session.index];
  if(w.kind==='grammar'||w.kind==='reading'){
    session.kind=w.kind;session.answered=false;session.selectedId=null;session.wasCorrect=false;
    session.options=w.choices.map((label,id)=>({id,label}));return;
  }
  const p=item(w);
  const ambiguous=WORDS.some(o=>o.id!==w.id&&o.topic===w.topic&&(o.de===w.de||o.en.toLowerCase()===w.en.toLowerCase()));
  const writable=/^[A-Za-z]{2,20}$/.test(w.en)&&!w.de.includes(';');
  const r=Math.random();
  session.kind=(p.score>=2&&p.tries>=2&&writable&&!ambiguous&&r<.30)?'spell':(canListen()&&r<.30?'listen':r<.66?'deToEn':'enToDe');
  session.answered=false;session.selectedId=null;session.wasCorrect=false;
  session.options=session.kind==='spell'?[]:makeOptions(w,session.kind);
}
function quiz(){
  if(!session)return home();
  if(session.kind==='grammar'||session.kind==='reading')return activityQuiz();
  const w=session.words[session.index],kind=session.kind;
  const prompt={spell:'Wie heißt das auf Englisch?',listen:'Höre zu. Was bedeutet das?',enToDe:'Was bedeutet dieses Wort?',deToEn:'Wie heißt das auf Englisch?'}[kind];
  const questionWord=kind==='listen'?'🎧':kind==='enToDe'?w.en:w.de;
  const showSpeak=canListen()&&(kind==='listen'||kind==='enToDe');
  return `<div class="qtop"><button class="iconbtn" data-action="exit" aria-label="Runde verlassen">✕</button><div class="meter" role="progressbar" aria-label="Rundenfortschritt" aria-valuenow="${session.index+1}" aria-valuemin="0" aria-valuemax="${session.words.length}"><div class="fill" style="width:${session.index/session.words.length*100}%"></div></div><span class="pill">${session.index+1}/${session.words.length}</span></div>
    ${w.book?`<div class="eyebrow">Lighthouse · ${escapeHtml(w.topic)} · Buchseite ${w.page}</div>`:''}<div class="question"><div class="prompt">${prompt}</div><div class="word">${escapeHtml(questionWord)}</div>
    ${showSpeak?`<button class="speak" data-action="speak" aria-label="Englisches Wort anhören">🔊 <span>Wort anhören</span></button><button class="linkbtn" data-action="speak-slow">🐢 Langsam anhören</button>`:''}
    ${kind==='listen'?'<p class="sub">Du kannst es so oft anhören, wie du möchtest.</p><button class="linkbtn" data-action="read-instead">Ich kann nichts hören – lieber lesen</button>':kind==='spell'?'<p class="sub">Schreibe das englische Wort. Groß- und Kleinschreibung ist egal.</p>':''}
    </div>
    ${kind==='spell'?`<div class="card"><label for="spell" class="visually-hidden">Deine englische Antwort</label><input class="textinput spell" id="spell" type="text" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Englisches Wort" ${session.answered?'disabled':''}><button class="btn" style="margin-top:12px" data-action="check" ${session.answered?'disabled':''}>Antwort prüfen</button></div>`:
      `<div class="answers">${session.options.map(o=>`<button class="answer ${session.answered?(o.id===w.id?'correct':o.id===session.selectedId?'wrong':''):''}" data-answer="${o.id}" ${session.answered?'disabled':''}>${escapeHtml(o.label)}</button>`).join('')}</div>`}
    ${session.answered?`<div class="feedback ${session.wasCorrect?'':'retry'}" role="status"><strong>${session.wasCorrect?'Richtig! Gut gemacht. ✨':'Gut versucht! Hier ist die Lösung.'}</strong><p><b>${escapeHtml(w.en)}</b> bedeutet <b>${escapeHtml(w.de)}</b>.</p>${canListen()?`<button class="listen-example" data-action="speak-slow">🔊 Wort langsam wiederholen</button>`:''}${w.sentence?`<p class="example">${escapeHtml(w.sentence)}<br><span class="muted">${escapeHtml(w.translation)}</span></p><button class="listen-example" data-action="speak-sentence" ${!canListen()?'disabled':''}>🔊 Beispielsatz anhören</button>`:''}${w.book?`<p class="note">Aus deiner Buch-Wortliste · Seite ${w.page}. Die Kurzantwort kann weitere Bedeutungen haben.</p>`:''}</div>
      <button class="btn" data-action="next">${session.index===session.words.length-1?'Runde abschließen':'Weiter'}</button>`:''}`;
}
function activityQuiz(){
  const a=session.words[session.index],reading=a.kind==='reading';
  return `<div class="qtop"><button class="iconbtn" data-action="exit" aria-label="Runde verlassen">✕</button><div class="meter" role="progressbar" aria-label="Rundenfortschritt" aria-valuenow="${session.index+1}" aria-valuemin="0" aria-valuemax="${session.words.length}"><div class="fill" style="width:${session.index/session.words.length*100}%"></div></div><span class="pill">${session.index+1}/${session.words.length}</span></div>
    <div class="eyebrow">${reading?'Kurzer Lesetext':'Grammatik verstehen'} · ${escapeHtml(a.topic)}</div>
    ${reading?`<div class="reading"><p>${escapeHtml(a.story)}</p>${canListen()?`<button class="speak" data-action="speak-story" aria-label="Text auf Englisch vorlesen">🔊 <span>Text anhören</span></button>`:''}</div>`:''}
    <div class="question"><div class="prompt">${reading?'Lies den Text und beantworte die Frage.':'Wähle die passende Antwort.'}</div><div class="activity-question">${escapeHtml(a.question)}</div></div>
    <div class="answers">${session.options.map(o=>`<button class="answer ${session.answered?(o.id===a.answer?'correct':o.id===session.selectedId?'wrong':''):''}" data-answer="${o.id}" ${session.answered?'disabled':''}>${escapeHtml(o.label)}</button>`).join('')}</div>
    ${session.answered?`<div class="feedback ${session.wasCorrect?'':'retry'}" role="status"><strong>${session.wasCorrect?'Richtig! Gut gemacht. ✨':'Gut versucht – so geht es richtig.'}</strong><p><b>${escapeHtml(a.choices[a.answer])}</b></p><p>${escapeHtml(a.explain)}</p></div><button class="btn" data-action="next">${session.index===session.words.length-1?'Runde abschließen':'Weiter'}</button>`:''}`;
}
function check(answer){
  if(!session||session.answered)return;
  const w=session.words[session.index];
  if(session.kind==='spell'&&!String(answer).trim()){
    const input=document.getElementById('spell');if(input){input.focus();input.setAttribute('aria-invalid','true');input.placeholder='Bitte gib ein Wort ein'}return;
  }
  const correct=session.kind==='spell'?String(answer).trim().toLocaleLowerCase('en')===w.en.toLowerCase():(w.kind==='grammar'||w.kind==='reading'?Number(answer)===w.answer:Number(answer)===w.id);
  session.answered=true;session.selectedId=Number(answer);session.wasCorrect=correct;if(correct)session.correct++;
  const old=w.kind?activityItem(w):item(w),score=clamp(old.score+(correct?1:-1),0,5);
  // Bessere Leistungen verlängern die Abstände, Fehler führen zur nächsten Wiederholung.
  const days=correct?[0,1,2,4,7,14][score]:0;
  const progress={score,tries:old.tries+1,correct:old.correct+(correct?1:0),streak:correct?old.streak+1:0,due:plusDays(days),last:localDate()};
  if(w.kind)data.activities[w.id]=progress;else data.items[w.id]=progress;
  save();render();
}
function next(){
  if(!session||!session.answered)return;
  if(session.index===session.words.length-1){
    data.sessions++;data.history.push({date:localDate(),correct:session.correct,total:session.words.length});data.history=data.history.slice(-100);save();route='done';
  }else{session.index++;setupQuestion()}
  render();window.scrollTo(0,0);
}
function done(){
  const n=session?.correct??0,total=session?.words.length??5;
  return `<div class="completed"><div class="star" aria-hidden="true">${n>=4?'🏆':'🌈'}</div><div class="eyebrow">Runde geschafft</div><h1>${n===total?'Alles richtig – stark!':n>=3?'Gut drangeblieben!':'Schön, dass du geübt hast!'}</h1><p class="muted">${n} von ${total} Aufgaben waren richtig. Schwierige Aufgaben kommen wieder – du lernst Schritt für Schritt.</p></div>
    <div class="card"><h3>Dein Lernerfolg</h3><p>✨ ${total} Aufgaben geübt<br>🧠 Die nächsten Übungen passen sich an<br>💜 Jedes Üben zählt</p><button class="btn" data-action="start">Noch eine Runde</button><button class="btn secondary" style="margin-top:10px" data-action="home">Für heute fertig</button></div>`;
}
function exportData(){
  const payload={app:'LingoLumi',format:1,exported:new Date().toISOString(),data};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`lingolumi-lernstand-${localDate()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),15000);
}
async function importData(file){
  if(!file)return;
  try{
    if(file.size>200000)throw new Error('Datei zu groß');
    const parsed=JSON.parse(await file.text());
    if(parsed.app!=='LingoLumi'||!parsed.data||typeof parsed.data!=='object'||!parsed.data.items||!Array.isArray(parsed.data.history))throw new Error('Keine gültige LingoLumi-Sicherung');
    if(!confirm('Möchtest du den aktuellen Lernstand durch diese Sicherung ersetzen?'))return;
    data=normalize(parsed.data);save();nav('progress');alert(storageOk?'Lernstand wurde wiederhergestellt.':'Der Lernstand konnte nicht dauerhaft gespeichert werden.');
  }catch{alert('Die Datei ist keine gültige LingoLumi-Sicherung. Es wurde nichts geändert.')}finally{const input=document.getElementById('import');if(input)input.value=''}
}
async function importBookData(file){
  if(!file)return;
  try {
    if(file.size>300000)throw new Error('zu groß');
    const payload=JSON.parse(await file.text());
    const legalTopics=new Set(UNITS.map(u=>u[0]));
    if(payload.format!==1||payload.isbn!=='9783060345472'||!Array.isArray(payload.words)||payload.words.length<100||payload.words.length>1000)throw new Error('falsches Format');
    const unique=new Set();
    const cleaned=payload.words.map(w=>{
      if(!w||!Number.isInteger(w.id)||w.id<3000||w.id>3999||!Number.isInteger(w.page)||w.page<214||w.page>253||!legalTopics.has(w.topic)||typeof w.en!=='string'||typeof w.de!=='string'||!w.en.trim()||!w.de.trim()||w.en.length>90||w.de.length>160)throw new Error('ungültige Karte');
      const identity=w.topic+'|'+w.en.toLowerCase();if(unique.has(identity))throw new Error('doppelte Karte');unique.add(identity);
      return {id:w.id,topic:w.topic,page:w.page,en:w.en,de:w.de,sentence:'',translation:'',book:true};
    });
    localStorage.setItem(BOOK_STORAGE,JSON.stringify({format:1,words:cleaned}));
    // Neu laden: beide Datenbestände werden von Anfang an korrekt aufgebaut.
    location.reload();
  }catch(e){alert('Die private Buch-Wortliste konnte nicht importiert werden. Bitte wähle die Datei LingoLumi-Schulbuch-Wortliste-PRIVAT.json. Dein Lernstand bleibt erhalten.');}
}
document.addEventListener('click',event=>{
  const el=event.target.closest('[data-action],[data-route],[data-topic],[data-answer]');if(!el)return;
  if(el.dataset.route){nav(el.dataset.route);return}
  if(el.dataset.topic){data.topic=validTopic(el.dataset.topic);save();nav('learn');return}
  if(el.hasAttribute('data-answer')){check(el.dataset.answer);return}
  switch(el.dataset.action){
    case 'start':start();break;
    case 'speak':if(session)speak(session.words[session.index].en);break;
    case 'speak-slow':if(session&&!session.words[session.index].kind)speak(session.words[session.index].en,true);break;
    case 'speak-sentence':if(session&&!session.words[session.index].kind&&session.words[session.index].sentence)speak(session.words[session.index].sentence);break;
    case 'speak-story':if(session&&session.kind==='reading')speak(session.words[session.index].story);break;
    case 'test-audio':speak('Hello! Let us learn English together. Take your time, and have fun!');break;
    case 'refresh-voices':render();break;
    case 'read-instead':if(session&&!session.answered){session.kind='enToDe';session.options=makeOptions(session.words[session.index],'enToDe');render()}break;
    case 'check':check(document.getElementById('spell')?.value||'');break;
    case 'next':next();break;
    case 'exit':nav('home');break;
    case 'home':nav('home');break;
    case 'name':data.name=String(document.getElementById('name')?.value||'').trim().slice(0,22);save();render();break;
    case 'export':exportData();break;
    case 'reset':if(confirm('Wirklich ALLE Lernfortschritte löschen? Das lässt sich nur mit einer Sicherung rückgängig machen.')){data=fresh();save();nav('home')}break;
  }
});
soundButton.addEventListener('click',()=>{if(!audioSupported){alert('Auf diesem Gerät ist keine Sprachausgabe verfügbar.');return}data.sound=!data.sound;save();render()});
document.addEventListener('change',e=>{
  if(e.target.id==='audio'){data.sound=e.target.checked;save();render()}
  if(e.target.id==='voice-choice'){data.voiceChoice=e.target.value;save();}
  if(e.target.id==='speech-rate'){data.speechRate=[0.72,0.85,1,1.12].includes(Number(e.target.value))?Number(e.target.value):0.85;save();}
  if(e.target.id==='import'){importData(e.target.files?.[0])}
  if(e.target.id==='book-import'){importBookData(e.target.files?.[0])}
});
if(audioSupported&&typeof window.speechSynthesis.addEventListener==='function'){
  window.speechSynthesis.addEventListener('voiceschanged',()=>{if(route==='settings'&&document.activeElement?.id!=='voice-choice')render()});
}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='spell'&&session&&!session.answered){e.preventDefault();check(e.target.value)}});
if('serviceWorker'in navigator&&location.protocol==='https:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
render();
