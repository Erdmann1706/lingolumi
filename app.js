'use strict';
/* English, German, topic, sample, translation */
const WORDS=[
['cat','Katze','Tiere','The cat is small.','Die Katze ist klein.'],['dog','Hund','Tiere','My dog is happy.','Mein Hund ist glücklich.'],['bird','Vogel','Tiere','The bird can fly.','Der Vogel kann fliegen.'],['horse','Pferd','Tiere','The horse is fast.','Das Pferd ist schnell.'],['rabbit','Kaninchen','Tiere','The rabbit is white.','Das Kaninchen ist weiß.'],['fish','Fisch','Tiere','The fish is in the water.','Der Fisch ist im Wasser.'],['mouse','Maus','Tiere','The mouse is tiny.','Die Maus ist winzig.'],['sheep','Schaf','Tiere','The sheep is on the farm.','Das Schaf ist auf dem Bauernhof.'],['butterfly','Schmetterling','Tiere','The butterfly is beautiful.','Der Schmetterling ist schön.'],['turtle','Schildkröte','Tiere','The turtle moves slowly.','Die Schildkröte bewegt sich langsam.'],
['apple','Apfel','Essen','I eat an apple.','Ich esse einen Apfel.'],['bread','Brot','Essen','The bread is fresh.','Das Brot ist frisch.'],['water','Wasser','Essen','I drink water.','Ich trinke Wasser.'],['cheese','Käse','Essen','I like cheese.','Ich mag Käse.'],['strawberry','Erdbeere','Essen','The strawberry is red.','Die Erdbeere ist rot.'],['breakfast','Frühstück','Essen','Breakfast is ready.','Das Frühstück ist fertig.'],['hungry','hungrig','Essen','I am hungry.','Ich habe Hunger.'],['delicious','lecker','Essen','This cake is delicious.','Dieser Kuchen ist lecker.'],['juice','Saft','Essen','I would like some juice.','Ich hätte gerne etwas Saft.'],['vegetable','Gemüse','Essen','Carrots are vegetables.','Karotten sind Gemüse.'],
['school','Schule','Schule','I go to school.','Ich gehe zur Schule.'],['teacher','Lehrkraft','Schule','The teacher is friendly.','Die Lehrkraft ist freundlich.'],['book','Buch','Schule','This book is interesting.','Dieses Buch ist interessant.'],['pencil','Bleistift','Schule','Where is my pencil?','Wo ist mein Bleistift?'],['question','Frage','Schule','I have a question.','Ich habe eine Frage.'],['answer','Antwort','Schule','I know the answer.','Ich kenne die Antwort.'],['homework','Hausaufgaben','Schule','I finish my homework.','Ich mache meine Hausaufgaben fertig.'],['learn','lernen','Schule','I learn English.','Ich lerne Englisch.'],['understand','verstehen','Schule','I understand the story.','Ich verstehe die Geschichte.'],['difficult','schwierig','Schule','This puzzle is difficult.','Dieses Rätsel ist schwierig.'],
['happy','glücklich','Gefühle','I feel happy today.','Ich bin heute glücklich.'],['sad','traurig','Gefühle','She feels sad.','Sie ist traurig.'],['brave','mutig','Gefühle','You are very brave.','Du bist sehr mutig.'],['excited','aufgeregt','Gefühle','I am excited about the trip.','Ich freue mich auf die Reise.'],['tired','müde','Gefühle','I am tired now.','Ich bin jetzt müde.'],['proud','stolz','Gefühle','I am proud of you.','Ich bin stolz auf dich.'],['kind','freundlich','Gefühle','Be kind to others.','Sei freundlich zu anderen.'],['worried','besorgt','Gefühle','I am worried about the test.','Ich mache mir Sorgen wegen der Prüfung.'],['calm','ruhig','Gefühle','Take a calm breath.','Atme ruhig durch.'],['curious','neugierig','Gefühle','I am curious about space.','Ich bin neugierig auf den Weltraum.'],
['play','spielen','Alltag','We play outside.','Wir spielen draußen.'],['sleep','schlafen','Alltag','I sleep at night.','Ich schlafe nachts.'],['friend','Freund oder Freundin','Alltag','My friend is here.','Mein Freund oder meine Freundin ist hier.'],['family','Familie','Alltag','I love my family.','Ich liebe meine Familie.'],['morning','Morgen','Alltag','Good morning!','Guten Morgen!'],['evening','Abend','Alltag','See you this evening.','Wir sehen uns heute Abend.'],['weather','Wetter','Alltag','The weather is nice.','Das Wetter ist schön.'],['window','Fenster','Alltag','Open the window, please.','Öffne bitte das Fenster.'],['garden','Garten','Alltag','The flowers grow in the garden.','Die Blumen wachsen im Garten.'],['bicycle','Fahrrad','Alltag','My bicycle is blue.','Mein Fahrrad ist blau.'],
['adventure','Abenteuer','Abenteuer','We go on an adventure.','Wir erleben ein Abenteuer.'],['forest','Wald','Abenteuer','The forest is quiet.','Der Wald ist ruhig.'],['treasure','Schatz','Abenteuer','We found the treasure.','Wir haben den Schatz gefunden.'],['mystery','Geheimnis','Abenteuer','This is a mystery.','Das ist ein Geheimnis.'],['explore','erkunden','Abenteuer','Let us explore the island.','Lass uns die Insel erkunden.'],['journey','Reise','Abenteuer','Our journey begins today.','Unsere Reise beginnt heute.'],['discover','entdecken','Abenteuer','I want to discover new things.','Ich möchte neue Dinge entdecken.'],['mountain','Berg','Abenteuer','The mountain is high.','Der Berg ist hoch.'],['secret','Geheimnis','Abenteuer','I have a secret.','Ich habe ein Geheimnis.'],['courage','Mut','Abenteuer','Courage helps you try.','Mut hilft dir, etwas zu versuchen.']
].map((w,i)=>({id:i,en:w[0],de:w[1],topic:w[2],sentence:w[3],translation:w[4]}));
const TOPICS=[['Tiere','🐾'],['Essen','🍓'],['Schule','📚'],['Gefühle','💜'],['Alltag','☀️'],['Abenteuer','🗺️']];
const STORAGE_KEY='lingolumi-v1'; // Liest auch den Lernstand der ersten Version.
const app=document.getElementById('app');
const soundButton=document.getElementById('sound');
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
const localDate=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const plusDays=(days)=>{let d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+days);return localDate(d)};
const fresh=()=>({name:'',sound:true,topic:'Alle',items:{},history:[],sessions:0,created:localDate()});
const validDate=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)?x:'';
const validTopic=x=>x==='Alle'||TOPICS.some(t=>t[0]===x)?x:'Alle';
const cleanNumber=(x,min,max)=>Number.isFinite(x)?clamp(Math.floor(x),min,max):min;
function normalize(raw){
  const result=fresh();
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;
  result.name=typeof raw.name==='string'?raw.name.slice(0,22):'';
  result.sound=raw.sound!==false;
  result.topic=validTopic(raw.topic);
  result.sessions=cleanNumber(raw.sessions,0,100000);
  result.created=validDate(raw.created)||localDate();
  if(raw.items&&typeof raw.items==='object'&&!Array.isArray(raw.items)){
    WORDS.forEach(w=>{
      const p=raw.items[w.id];if(!p||typeof p!=='object'||Array.isArray(p))return;
      const tries=cleanNumber(p.tries,0,100000),correct=clamp(cleanNumber(p.correct,0,100000),0,tries);
      result.items[w.id]={score:cleanNumber(p.score,0,5),tries,correct,streak:cleanNumber(p.streak,0,100000),due:validDate(p.due),last:validDate(p.last)};
    });
  }
  if(Array.isArray(raw.history))result.history=raw.history.slice(-100).filter(h=>h&&typeof h==='object'&&validDate(h.date)).map(h=>({date:h.date,correct:cleanNumber(h.correct,0,5),total:5}));
  return result;
}
let data=fresh(),storageOk=true,route='home',session=null;
try{const stored=localStorage.getItem(STORAGE_KEY);if(stored)data=normalize(JSON.parse(stored))}catch{storageOk=false}
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));storageOk=true}catch{storageOk=false}}
function item(w){return data.items[w.id]||{score:0,tries:0,correct:0,due:'',streak:0,last:''}}
function mastered(w){return item(w).score>=4}
function isDue(w){const p=item(w);return p.tries>0&&(!p.due||p.due<=localDate())}
function dueCount(){return WORDS.filter(isDue).length}
const percentage=(a,b)=>b?Math.round(a/b*100):0;
function stats(){return {learned:WORDS.filter(w=>item(w).tries>0).length,mastered:WORDS.filter(mastered).length,total:WORDS.length}}
const audioSupported='speechSynthesis'in window&&'SpeechSynthesisUtterance'in window;
function speak(text){
  if(!data.sound||!audioSupported)return false;
  try{
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='en-GB';u.rate=.82;u.pitch=1;
    const voices=window.speechSynthesis.getVoices();
    u.voice=voices.find(v=>v.lang.toLowerCase()==='en-gb')||voices.find(v=>v.lang.toLowerCase().startsWith('en'))||null;
    window.speechSynthesis.speak(u);
    return true;
  }catch{return false}
}
function canListen(){return audioSupported&&data.sound}
function nav(next){window.speechSynthesis?.cancel?.();route=next;session=null;render();window.scrollTo(0,0)}
function render(){
  document.querySelectorAll('.navbtn').forEach(b=>{b.classList.toggle('active',b.dataset.route===route);if(b.dataset.route===route)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  soundButton.textContent=data.sound?'🔊':'🔇';soundButton.setAttribute('aria-label',data.sound?'Ton ausschalten':'Ton einschalten');
  app.innerHTML=({home,learn,progress,settings,quiz,done})[route]();
  if(route==='quiz'&&session?.kind==='spell'&&!session.answered){/* Tastatur nicht automatisch öffnen: Das verdeckt auf kleinen iPhones die Frage. */}
}
function home(){
  const s=stats(),first=!data.sessions,hasDue=dueCount()>0;
  return `<section class="hero"><div class="eyebrow">${first?'Willkommen bei LingoLumi':'Schön, dass du da bist!'}</div><h1>${data.name?`Hey ${escapeHtml(data.name)}!`:'Englisch lernen, ganz entspannt.'}</h1><p>${first?'Entdecke englische Wörter in deinem Tempo. Fehler gehören zum Lernen.':'Ein paar Minuten üben reichen. Du bestimmst dein Tempo.'}</p><div class="mascot" aria-hidden="true">🦊</div></section>
    ${!storageOk?storageWarning():''}
    <div class="card"><div class="row"><div><span class="eyebrow">Deine nächste Runde</span><h2 style="margin:5px 0">${hasDue?'Wiederholen & Neues lernen':'5 kleine Aufgaben'}</h2><div class="muted">Etwa 3–5 Minuten · ohne Zeitdruck</div></div><div class="sparkle" aria-hidden="true">✨</div></div><div style="height:17px"></div><button class="btn" data-action="start">Jetzt loslegen</button></div>
    <div class="stats"><div class="stat"><strong>${s.learned}</strong><span>Wörter entdeckt</span></div><div class="stat"><strong>${s.mastered}</strong><span>Wörter gut geübt</span></div></div>
    <h2>Deine Themen</h2><div class="topicgrid">${TOPICS.map(([name,emoji])=>`<button class="topic" data-topic="${name}"><span class="emoji" aria-hidden="true">${emoji}</span><b>${name}</b><small>${WORDS.filter(w=>w.topic===name&&item(w).tries>0).length} von 10 entdeckt</small></button>`).join('')}</div>`;
}
function storageWarning(){return `<div class="feedback retry" role="status"><strong>Dein Lernstand wird gerade nicht gespeichert.</strong><p>Bitte prüfe, ob private Browser-Einstellungen oder Speicherbeschränkungen aktiv sind.</p></div>`}
function learn(){
  return `<div class="eyebrow">Dein eigenes Tempo</div><h1>Was möchtest du üben?</h1><p class="muted">Du kannst ein Thema wählen oder alles mischen. Die App merkt sich, welche Wörter noch Übung brauchen.</p>
    <div class="card"><button class="topic ${data.topic==='Alle'?'selected':''}" style="min-height:75px;width:100%" data-topic="Alle" aria-pressed="${data.topic==='Alle'}"><b>🌈 Alles gemischt</b><small>Abwechslung aus allen Themen</small></button>
    <div class="topicgrid" style="margin-top:10px">${TOPICS.map(([name,emoji])=>`<button class="topic ${data.topic===name?'selected':''}" data-topic="${name}" aria-pressed="${data.topic===name}"><span class="emoji" aria-hidden="true">${emoji}</span><b>${name}</b></button>`).join('')}</div></div>
    <div class="card"><h3>Deine Übungsrunde</h3><p class="muted">Fünf Aufgaben: lesen, zuordnen, auf Wunsch hören und später auch schreiben.</p><button class="btn" data-action="start">Runde starten</button></div>`;
}
function progress(){
  const s=stats();
  return `<div class="eyebrow">Dein Lernweg</div><h1>Schau, was du schon kannst!</h1>
    <div class="card"><div class="row"><h3>Entdeckte Wörter</h3><b>${s.learned} / ${s.total}</b></div><div class="meter" role="progressbar" aria-label="Entdeckte Wörter" aria-valuenow="${s.learned}" aria-valuemin="0" aria-valuemax="${s.total}"><div class="fill" style="width:${percentage(s.learned,s.total)}%"></div></div><p class="muted">Jedes neue Wort zählt. Du musst nicht alles sofort können.</p></div>
    <div class="stats"><div class="stat"><strong>${s.mastered}</strong><span>Gut geübte Wörter</span></div><div class="stat"><strong>${data.sessions}</strong><span>Abgeschlossene Runden</span></div></div>
    <h2>Deine Themen</h2>${TOPICS.map(([name,emoji])=>{let ws=WORDS.filter(w=>w.topic===name),n=ws.filter(mastered).length;return `<div class="card"><div class="row"><span><b>${emoji} ${name}</b><span class="muted" style="display:block">${n} von ${ws.length} gut geübt</span></span><span class="pill">${percentage(n,ws.length)} %</span></div><div class="meter" style="margin-top:12px" role="progressbar" aria-label="${name}" aria-valuenow="${n}" aria-valuemin="0" aria-valuemax="${ws.length}"><div class="fill" style="width:${percentage(n,ws.length)}%"></div></div></div>`}).join('')}
    <p class="note">„Gut geübt“ bedeutet: Dieses Wort wurde mehrfach richtig beantwortet. Auch danach wird es gelegentlich wiederholt.</p>`;
}
function settings(){
  return `<div class="eyebrow">Dein Lernbegleiter</div><h1>Meine Einstellungen</h1>
    <div class="card"><label for="name"><b>Wie darf ich dich nennen?</b></label><p class="muted">Am besten nur ein Spitzname. Bleibt auf diesem Gerät.</p><input id="name" class="textinput" maxlength="22" placeholder="Dein Spitzname" value="${escapeHtml(data.name)}"><button class="btn secondary" style="margin-top:12px" data-action="name">Namen speichern</button></div>
    <div class="card"><label class="opt"><input id="audio" type="checkbox" ${data.sound?'checked':''} ${!audioSupported?'disabled':''}><span><b>Englisch vorlesen</b><span class="muted" style="display:block">Benutzt die Sprachausgabe des iPhones.</span></span></label><button class="btn tertiary" data-action="test-audio" ${!canListen()?'disabled':''}>Stimme ausprobieren</button><p class="note">${audioSupported?'Falls du nichts hörst, prüfe die Lautstärke. In Hörfragen kannst du jederzeit zur Leseaufgabe wechseln.':'Diese Browserumgebung unterstützt keine Sprachausgabe. Die App bietet dann nur Lese- und Schreibaufgaben.'}</p></div>
    <div class="card"><h3>Datenschutz & Lernstand</h3><p class="muted">Keine Anmeldung, Werbung oder Nachverfolgung. Antworten und Fortschritte bleiben lokal in dieser Web-App.</p><p class="note">Safari und die installierte Home-Bildschirm-App können getrennte Speicher verwenden. Der Lernstand wird nicht automatisch übertragen. Das Löschen der App oder ihrer Daten kann den Lernstand entfernen.</p>${!storageOk?storageWarning():''}
    <button class="btn tertiary" data-action="export">Lernstand sichern</button><label for="import" class="btn secondary file-label">Sicherung wiederherstellen</label><input id="import" type="file" accept=".json,application/json" class="visually-hidden"><p class="note">Eine Sicherung ist eine JSON-Datei. Sie kann später hier wieder eingelesen werden.</p></div>
    <div class="card"><h3>Für Eltern</h3><p class="muted">60 überprüfbare Wörter aus sechs Themen, angepasstes Wiederholen und kein freier Chat. Es wird keine generative KI verwendet. Die App bewertet keine Aussprache.</p><button class="linkbtn" data-action="reset">Gesamten Lernstand zurücksetzen</button></div>`;
}
// Mischung aus fälligen Wiederholungen und neuen Wörtern. Bereits beherrschte Wörter bleiben im Wiederholungsplan.
function chooseWords(){
  const pool=WORDS.filter(w=>data.topic==='Alle'||w.topic===data.topic);
  const due=pool.filter(isDue).sort((a,b)=>{
    const pa=item(a),pb=item(b);return (pa.score-pb.score)||(pa.due||'').localeCompare(pb.due||'')||(Math.random()-.5);
  });
  const freshWords=pool.filter(w=>item(w).tries===0).sort(()=>Math.random()-.5);
  const future=pool.filter(w=>item(w).tries>0&&!isDue(w)).sort((a,b)=>item(a).due.localeCompare(item(b).due));
  const chosen=[];
  const add=w=>{if(w&&!chosen.some(x=>x.id===w.id))chosen.push(w)};
  // Bis zu drei fällige Wiederholungen und zwei neue Wörter; bei Bedarf auffüllen.
  due.slice(0,3).forEach(add);freshWords.slice(0,2).forEach(add);
  [...due,...freshWords,...future].forEach(w=>{if(chosen.length<5)add(w)});
  // Auf vollständigem Pool jederzeit fünf unterschiedliche Aufgaben.
  return chosen.slice(0,5).sort(()=>Math.random()-.5);
}
function start(){
  const words=chooseWords();if(!words.length){nav('learn');return}
  session={words,index:0,correct:0,answered:false,kind:'enToDe',options:[],selectedId:null};
  route='quiz';setupQuestion();render();window.scrollTo(0,0);
}
function makeOptions(word,kind){
  const side=kind==='deToEn'?'en':'de';
  const other=WORDS.filter(w=>w.id!==word.id&&w.topic===word.topic&&w[side]!==word[side]);
  for(let i=other.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[other[i],other[j]]=[other[j],other[i]]}
  const seen=new Set([word[side]]),picked=[word];
  for(const w of other){if(picked.length===4)break;if(!seen.has(w[side])){picked.push(w);seen.add(w[side])}}
  for(let i=picked.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[picked[i],picked[j]]=[picked[j],picked[i]]}
  return picked.map(w=>({id:w.id,label:w[side]}));
}
function setupQuestion(){
  if(!session)return;
  const w=session.words[session.index],p=item(w);
  const ambiguous=WORDS.some(o=>o.id!==w.id&&o.de===w.de);
  const r=Math.random();
  session.kind=(p.score>=2&&p.tries>=2&&!ambiguous&&r<.30)?'spell':(canListen()&&r<.30?'listen':r<.66?'deToEn':'enToDe');
  session.answered=false;session.selectedId=null;session.wasCorrect=false;
  session.options=session.kind==='spell'?[]:makeOptions(w,session.kind);
}
function quiz(){
  if(!session)return home();
  const w=session.words[session.index],kind=session.kind;
  const prompt={spell:'Wie heißt das auf Englisch?',listen:'Höre zu. Was bedeutet das?',enToDe:'Was bedeutet dieses Wort?',deToEn:'Wie heißt das auf Englisch?'}[kind];
  const questionWord=kind==='listen'?'🎧':kind==='enToDe'?w.en:w.de;
  const showSpeak=canListen()&&(kind==='listen'||kind==='enToDe');
  return `<div class="qtop"><button class="iconbtn" data-action="exit" aria-label="Runde verlassen">✕</button><div class="meter" role="progressbar" aria-label="Rundenfortschritt" aria-valuenow="${session.index+1}" aria-valuemin="0" aria-valuemax="${session.words.length}"><div class="fill" style="width:${session.index/session.words.length*100}%"></div></div><span class="pill">${session.index+1}/${session.words.length}</span></div>
    <div class="question"><div class="prompt">${prompt}</div><div class="word">${escapeHtml(questionWord)}</div>
    ${showSpeak?`<button class="speak" data-action="speak" aria-label="Englisches Wort anhören">🔊 <span>Wort anhören</span></button>`:''}
    ${kind==='listen'?'<p class="sub">Du kannst es so oft anhören, wie du möchtest.</p><button class="linkbtn" data-action="read-instead">Ich kann nichts hören – lieber lesen</button>':kind==='spell'?'<p class="sub">Schreibe das englische Wort. Groß- und Kleinschreibung ist egal.</p>':''}
    </div>
    ${kind==='spell'?`<div class="card"><label for="spell" class="visually-hidden">Deine englische Antwort</label><input class="textinput spell" id="spell" type="text" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Englisches Wort" ${session.answered?'disabled':''}><button class="btn" style="margin-top:12px" data-action="check" ${session.answered?'disabled':''}>Antwort prüfen</button></div>`:
      `<div class="answers">${session.options.map(o=>`<button class="answer ${session.answered?(o.id===w.id?'correct':o.id===session.selectedId?'wrong':''):''}" data-answer="${o.id}" ${session.answered?'disabled':''}>${escapeHtml(o.label)}</button>`).join('')}</div>`}
    ${session.answered?`<div class="feedback ${session.wasCorrect?'':'retry'}" role="status"><strong>${session.wasCorrect?'Richtig! Gut gemacht. ✨':'Gut versucht! Hier ist die Lösung.'}</strong><p><b>${escapeHtml(w.en)}</b> bedeutet <b>${escapeHtml(w.de)}</b>.</p><p class="example">${escapeHtml(w.sentence)}<br><span class="muted">${escapeHtml(w.translation)}</span></p><button class="listen-example" data-action="speak-sentence" ${!canListen()?'disabled':''}>🔊 Beispielsatz anhören</button></div>
      <button class="btn" data-action="next">${session.index===session.words.length-1?'Runde abschließen':'Weiter'}</button>`:''}`;
}
function check(answer){
  if(!session||session.answered)return;
  const w=session.words[session.index];
  if(session.kind==='spell'&&!String(answer).trim()){
    const input=document.getElementById('spell');if(input){input.focus();input.setAttribute('aria-invalid','true');input.placeholder='Bitte gib ein Wort ein'}return;
  }
  const correct=session.kind==='spell'?String(answer).trim().toLocaleLowerCase('en')===w.en.toLowerCase():Number(answer)===w.id;
  session.answered=true;session.selectedId=Number(answer);session.wasCorrect=correct;if(correct)session.correct++;
  const old=item(w),score=clamp(old.score+(correct?1:-1),0,5);
  // Bessere Leistungen verlängern die Abstände, Fehler führen zur nächsten Wiederholung.
  const days=correct?[0,1,2,4,7,14][score]:0;
  data.items[w.id]={score,tries:old.tries+1,correct:old.correct+(correct?1:0),streak:correct?old.streak+1:0,due:plusDays(days),last:localDate()};
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
  return `<div class="completed"><div class="star" aria-hidden="true">${n>=4?'🏆':'🌈'}</div><div class="eyebrow">Runde geschafft</div><h1>${n===total?'Alles richtig – stark!':n>=3?'Gut drangeblieben!':'Schön, dass du geübt hast!'}</h1><p class="muted">${n} von ${total} Aufgaben waren richtig. Schwierige Wörter kommen wieder – du lernst Schritt für Schritt.</p></div>
    <div class="card"><h3>Dein Lernerfolg</h3><p>✨ ${total} Wörter geübt<br>🧠 Die nächsten Übungen passen sich an<br>💜 Jedes Üben zählt</p><button class="btn" data-action="start">Noch eine Runde</button><button class="btn secondary" style="margin-top:10px" data-action="home">Für heute fertig</button></div>`;
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
document.addEventListener('click',event=>{
  const el=event.target.closest('[data-action],[data-route],[data-topic],[data-answer]');if(!el)return;
  if(el.dataset.route){nav(el.dataset.route);return}
  if(el.dataset.topic){data.topic=validTopic(el.dataset.topic);save();nav('learn');return}
  if(el.hasAttribute('data-answer')){check(el.dataset.answer);return}
  switch(el.dataset.action){
    case 'start':start();break;
    case 'speak':if(session)speak(session.words[session.index].en);break;
    case 'speak-sentence':if(session)speak(session.words[session.index].sentence);break;
    case 'test-audio':speak('Hello! Let us learn English together.');break;
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
document.addEventListener('change',e=>{if(e.target.id==='audio'){data.sound=e.target.checked;save();render()}if(e.target.id==='import'){importData(e.target.files?.[0])}});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='spell'&&session&&!session.answered){e.preventDefault();check(e.target.value)}});
if('serviceWorker'in navigator&&location.protocol==='https:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
render();
