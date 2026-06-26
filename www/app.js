/* ClassAI — English Course (Pupil's Book 6) | offline-first study app
   v2: detailed Arabic explanations, per-sentence translation, offline AI tutor, 4 quiz types */
'use strict';

/* ===================== Storage ===================== */
const KEY='classai_en6_v2';
const Store={
  load(){ try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return (window.__mem||{});} },
  save(s){ try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){window.__mem=s;} }
};
let state=Object.assign({
  name:'', xp:0, doneLessons:[], srs:{}, quizBest:{}, streak:0, lastDay:'',
  theme:'light', apiKey:'', model:'claude-3-5-haiku-20241022', aiOnline:false, chat:[]
}, Store.load());
function save(){ Store.save(state); }

/* streak */
(function(){
  const today=new Date().toISOString().slice(0,10);
  if(state.lastDay!==today){
    const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
    state.streak = (state.lastDay===y)? (state.streak||0)+1 : 1;
    state.lastDay=today; save();
  }
})();

/* ===================== Helpers ===================== */
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function toast(msg){ let t=$('#toast'); if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);} t.textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),1900); }
function levelFor(xp){ let lv=1,need=100; while(xp>=need){xp-=need;lv++;need=Math.round(need*1.35);} return {lv,into:xp,need}; }
function xpForLevel(xp){ return levelFor(xp); }
function addXP(n){ state.xp+=n; save(); }
function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function shade(hex,p){ const n=parseInt(hex.slice(1),16); let r=(n>>16)&255,g=(n>>8)&255,b=n&255; r=Math.round(r+(255-r)*p);g=Math.round(g+(255-g)*p);b=Math.round(b+(255-b)*p); return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1); }

/* ===================== Icons ===================== */
const ICON={
  home:'M3 11l9-8 9 8M5 10v10h14V10',
  book:'M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5z',
  cards:'M4 7h12v12H4zM8 4h12v12',
  brain:'M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 006 0V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-6 0',
  user:'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6',
  play:'M8 5v14l11-7z', check:'M5 12l5 5 9-11', star:'M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9z',
  fire:'M12 2c1 4-3 5-3 9a3 3 0 006 0c0-1-1-2-1-3 2 1 3 3 3 5a6 6 0 11-12 0c0-5 5-6 7-11z',
  trophy:'M6 4h12v3a4 4 0 01-4 4h-4a4 4 0 01-4-4zM9 15h6v4H9zM7 19h10',
  spark:'M12 3v6M12 15v6M3 12h6M15 12h6', sound:'M5 9v6h4l5 4V5L9 9zM16 8a4 4 0 010 8',
  chat:'M4 5h16v11H8l-4 4z', send:'M4 12l16-7-7 16-2-7z', edit:'M4 20h4L18 10l-4-4L4 16z',
  translate:'M4 5h7M7 4v1c0 4-2 7-4 8M5 9c0 2 2 4 5 5M13 19l4-9 4 9M14.5 16h5',
  bulb:'M9 18h6M10 21h4M12 3a6 6 0 00-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 00-4-10z',
  link:'M9 15l6-6M10 6l1-1a4 4 0 016 6l-1 1M14 18l-1 1a4 4 0 01-6-6l1-1',
  quiz:'M9 9a3 3 0 116 0c0 2-3 2-3 4M12 17v.01', list:'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'
};
function svg(name,size){ const s=size||24; return `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(ICON[name]||'').split('M').filter(Boolean).map(d=>`<path d="M${d}"/>`).join('')}</svg>`; }

/* ===================== TTS ===================== */
let _voices=[];
function loadVoices(){ try{_voices=speechSynthesis.getVoices()||[];}catch(e){_voices=[];} }
if('speechSynthesis' in window){ loadVoices(); speechSynthesis.onvoiceschanged=loadVoices; }
function speak(text,lang){
  if(!('speechSynthesis'in window)){toast('النطق غير مدعوم على هذا الجهاز');return;}
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text); u.lang=lang||'en-US'; u.rate=.9;
    const v=_voices.find(v=>v.lang&&v.lang.toLowerCase().startsWith((lang||'en').slice(0,2)));
    if(v)u.voice=v; speechSynthesis.speak(u);
  }catch(e){}
}
function speakSay(btn){ const t=btn.getAttribute('data-say'); if(t)speak(t,'en-US'); }
function speakLine(btn){ const t=btn.getAttribute('data-say'); if(t)speak(t,'en-US'); }

/* ===================== Content index ===================== */
function allLessons(){ const a=[]; COURSE.units.forEach(u=>u.lessons.forEach(l=>a.push({u,l}))); return a; }
function findLesson(code){ for(const u of COURSE.units){ const l=u.lessons.find(x=>x.code===code); if(l)return {u,l}; } return null; }
function unitProgress(u){ const done=u.lessons.filter(l=>state.doneLessons.includes(l.code)).length; return {done,total:u.lessons.length,pct:Math.round(done/u.lessons.length*100)}; }
function countUnitWords(u){ let n=0; u.lessons.forEach(l=>n+=(l.vocab||[]).length); return n; }
function lessonIcon(t){ return t==='vocab'?'book':t==='grammar'?'list':t==='conversation'?'chat':'book'; }

let _vdb=null;
function vocabDB(){
  if(_vdb)return _vdb;
  const arr=[];
  COURSE.units.forEach(u=>u.lessons.forEach(l=>(l.vocab||[]).forEach(w=>arr.push(Object.assign({},w,{code:l.code,unitNo:u.no,lessonTitle:l.titleAr})))));
  Object.keys(COURSE.readers||{}).forEach(k=>{ const r=COURSE.readers[k]; (r.vocab||[]).forEach(w=>arr.push(Object.assign({},w,{code:null,reader:k,lessonTitle:r.titleAr}))); });
  _vdb=arr; return arr;
}

/* ===================== SRS (Leitner) ===================== */
const SRS_INTERVALS=[0,1,2,4,8,16,32];
function ensureSrs(id){ if(!state.srs[id])state.srs[id]={box:0,due:Date.now()}; return state.srs[id]; }
function reviewWord(id,ok){ const c=ensureSrs(id); c.box=ok?Math.min(c.box+1,SRS_INTERVALS.length-1):0; c.due=Date.now()+SRS_INTERVALS[c.box]*864e5; save(); }
function dueCards(){ const now=Date.now(); return Object.keys(state.srs).filter(id=>state.srs[id].due<=now); }

/* ===================== Achievements ===================== */
const ACHS=[
  {id:'first',name:'أول خطوة',desc:'أكملت أول درس',icon:'star',on:s=>s.doneLessons.length>=1},
  {id:'five',name:'متعلّم نشِط',desc:'5 دروس',icon:'book',on:s=>s.doneLessons.length>=5},
  {id:'ten',name:'مثابر',desc:'10 دروس',icon:'spark',on:s=>s.doneLessons.length>=10},
  {id:'unit',name:'وحدة كاملة',desc:'أنهيت وحدة كاملة',icon:'trophy',on:s=>COURSE.units.some(u=>u.lessons.every(l=>s.doneLessons.includes(l.code)))},
  {id:'half',name:'منتصف الطريق',desc:'نصف المنهج',icon:'fire',on:s=>s.doneLessons.length>=22},
  {id:'all',name:'خرّيج',desc:'أنهيت كل الدروس',icon:'trophy',on:s=>s.doneLessons.length>=45},
  {id:'xp500',name:'500 نقطة',desc:'جمعت 500 XP',icon:'star',on:s=>s.xp>=500},
  {id:'xp1k',name:'1000 نقطة',desc:'جمعت 1000 XP',icon:'spark',on:s=>s.xp>=1000},
  {id:'streak3',name:'3 أيام',desc:'انتظام 3 أيام',icon:'fire',on:s=>s.streak>=3},
  {id:'streak7',name:'أسبوع كامل',desc:'انتظام 7 أيام',icon:'fire',on:s=>s.streak>=7},
  {id:'quiz',name:'ممتاز',desc:'100% في اختبار',icon:'check',on:s=>Object.values(s.quizBest).some(v=>v>=100)},
  {id:'words50',name:'50 كلمة',desc:'راجعت 50 كلمة',icon:'book',on:s=>Object.keys(s.srs).length>=50}
];
function earnedAchs(){ return ACHS.filter(a=>a.on(state)); }

/* ===================== Router ===================== */
let route={name:'home',code:null};
function go(name,code){ route={name,code:code||null}; if(name==='tutor')route._scroll=true; render(); window.scrollTo(0,0); }

/* ===================== Views: Home ===================== */
function viewHome(){
  const lv=xpForLevel(state.xp); const done=state.doneLessons.length; const pct=Math.round(done/45*100);
  const due=dueCards().length;
  const next=allLessons().find(({l})=>!state.doneLessons.includes(l.code));
  return `
  <div class="hero">
    <div class="hero-top">
      <div><div class="hello">أهلاً ${state.name?esc(state.name):'بك'} 👋</div>
      <div class="sub">لنُكمل تعلّم الإنجليزية اليوم</div></div>
      <div class="streak">${svg('fire',18)} <b>${state.streak}</b></div>
    </div>
    <div class="lvbar"><div class="lvbar-fill" style="width:${Math.round(lv.into/lv.need*100)}%"></div></div>
    <div class="lvmeta"><span>المستوى ${lv.lv}</span><span>${lv.into}/${lv.need} XP</span></div>
  </div>

  <div class="stat-row">
    <div class="stat"><div class="stat-n">${done}<small>/45</small></div><div class="stat-l">دروس</div></div>
    <div class="stat"><div class="stat-n">${pct}%</div><div class="stat-l">إنجاز</div></div>
    <div class="stat"><div class="stat-n">${state.xp}</div><div class="stat-l">نقاط</div></div>
    <div class="stat"><div class="stat-n">${earnedAchs().length}</div><div class="stat-l">أوسمة</div></div>
  </div>

  ${next?`<div class="card-cta" onclick="openLesson('${next.l.code}')">
    <div class="cta-ic" style="background:${next.u.color}22;color:${next.u.color}">${svg('play',22)}</div>
    <div class="cta-tx"><div class="cta-k">تابع من حيث وقفت</div><div class="cta-v">${esc(next.l.titleAr)} · ${next.l.code}</div></div>
    <div class="cta-go">${svg('play',16)}</div>
  </div>`:''}

  <div class="quick">
    <button class="qbtn" onclick="go('units')">${svg('book',22)}<span>الوحدات</span></button>
    <button class="qbtn" onclick="go('review')">${svg('cards',22)}<span>مراجعة${due?` <i>${due}</i>`:''}</span></button>
    <button class="qbtn" onclick="go('tutor')">${svg('brain',22)}<span>المعلّم</span></button>
    <button class="qbtn" onclick="go('profile')">${svg('user',22)}<span>حسابي</span></button>
  </div>

  <div class="sec-title">الوحدات</div>
  <div class="units-grid">${COURSE.units.map(unitCard).join('')}</div>`;
}
function unitCard(u){
  const p=unitProgress(u);
  return `<div class="unit-card" style="--uc:${u.color}" onclick="go('unit','${u.id}')">
    <div class="uc-no">${u.no}</div>
    <div class="uc-body"><div class="uc-title">${esc(u.titleAr)}</div>
      <div class="uc-en">${esc(u.title)}</div>
      <div class="uc-bar"><div style="width:${p.pct}%"></div></div>
      <div class="uc-meta">${p.done}/${p.total} دروس · ${countUnitWords(u)} كلمة</div>
    </div></div>`;
}

/* ===================== Views: Units list ===================== */
function viewUnits(){
  return `<div class="page-head"><button class="back" onclick="go('home')">${svg('home',18)}</button><h2>كل الوحدات</h2></div>
  <div class="units-grid wide">${COURSE.units.map(unitCard).join('')}</div>
  <div class="sec-title">القُرّاء (Readers)</div>
  ${Object.keys(COURSE.readers||{}).map(k=>{const r=COURSE.readers[k];return `
    <div class="reader-card" onclick="go('reader','${k}')">
      <div class="rc-ic">${svg('book',20)}</div>
      <div><div class="rc-t">${esc(r.titleAr)}</div><div class="rc-s">${esc(r.title)} · ${r.vocab.length} كلمة</div></div>
    </div>`;}).join('')}`;
}

/* ===================== Views: Unit detail ===================== */
function viewUnit(id){
  const u=COURSE.units.find(x=>x.id===id); if(!u)return viewHome();
  const p=unitProgress(u);
  return `<div class="page-head" style="--uc:${u.color}">
      <button class="back" onclick="go('home')">${svg('home',18)}</button>
      <h2>الوحدة ${u.no}</h2></div>
    <div class="unit-hero" style="--uc:${u.color}">
      <div class="uh-title">${esc(u.titleAr)}</div><div class="uh-en">${esc(u.title)}</div>
      <div class="uh-bar"><div style="width:${p.pct}%"></div></div>
      <div class="uh-meta">${p.done} من ${p.total} دروس مكتملة · ${countUnitWords(u)} كلمة</div>
    </div>
    <div class="lesson-list">${u.lessons.map(l=>{
      const done=state.doneLessons.includes(l.code);
      const best=state.quizBest[l.code];
      return `<div class="lesson-row ${done?'done':''}" onclick="openLesson('${l.code}')">
        <div class="lr-ic" style="background:${u.color}1f;color:${u.color}">${done?svg('check',18):svg(lessonIcon(l.type),18)}</div>
        <div class="lr-body"><div class="lr-title">${esc(l.titleAr)}</div>
          <div class="lr-sub">${esc(l.title)} · ${l.code}${best!=null?` · <span class="lr-best">${best}%</span>`:''}</div></div>
        <div class="lr-go">${svg('play',14)}</div>
      </div>`;}).join('')}</div>`;
}

/* ===================== Views: Reader ===================== */
function viewReader(key){
  const r=COURSE.readers[key]; if(!r)return viewUnits();
  return `<div class="page-head"><button class="back" onclick="go('units')">${svg('book',18)}</button><h2>${esc(r.titleAr)}</h2></div>
  <div class="intro-card"><div class="intro-ar">${esc(r.introAr||'')}</div><div class="intro-en ltr">${esc(r.intro||'')}</div></div>
  <div class="lbar"><button class="tool" onclick="trAll(this)">${svg('translate',16)} ترجمة الكل</button>
    <button class="tool" onclick="startFlashcards('reader:${key}')">${svg('cards',16)} بطاقات</button></div>
  <div id="lessonPanel" class="vlist">${(r.vocab||[]).map(vocabRowHTML).join('')}</div>`;
}

/* ===================== Views: Lesson + tabs ===================== */
let lessonTab='explain';
function openLesson(code){ route={name:'lesson',code}; lessonTab='explain'; render(); window.scrollTo(0,0); }
function lessonTabs(l){
  const t=[{id:'explain',label:'شرح',ic:'bulb'}];
  if(l.lines) t.push({id:'text',label:l.type==='conversation'?'الحوار':'النص',ic:'list'});
  if(l.grammar) t.push({id:'grammar',label:'القواعد',ic:'list'});
  if(l.vocab) t.push({id:'vocab',label:'المفردات',ic:'book'});
  t.push({id:'quiz',label:'اختبار',ic:'quiz'});
  return t;
}
function viewLesson(code){
  const f=findLesson(code); if(!f)return viewHome(); const {u,l}=f;
  const tabs=lessonTabs(l); if(!tabs.find(t=>t.id===lessonTab))lessonTab='explain';
  const done=state.doneLessons.includes(l.code);
  return `<div class="page-head" style="--uc:${u.color}">
      <button class="back" onclick="go('unit','${u.id}')">${svg('book',18)}</button>
      <h2>${l.code}</h2>
      ${done?`<span class="done-pill">${svg('check',14)} مكتمل</span>`:''}</div>
    <div class="lesson-top" style="--uc:${u.color}">
      <div class="lt-title">${esc(l.titleAr)}</div><div class="lt-en ltr">${esc(l.title)}</div></div>
    <div class="tabs">${tabs.map(t=>`<button class="tab ${lessonTab===t.id?'on':''}" data-tab="${t.id}" onclick="setLessonTab('${t.id}')">${esc(t.label)}</button>`).join('')}</div>
    <div id="lessonPanel">${lessonPanel(l,u)}</div>`;
}
function setLessonTab(id){
  lessonTab=id;
  $$('.tab').forEach(b=>b.classList.toggle('on',b.getAttribute('data-tab')===id));
  const f=findLesson(route.code); if(!f)return;
  $('#lessonPanel').innerHTML=lessonPanel(f.l,f.u);
  const p=$('#lessonPanel'); if(p)p.scrollIntoView({block:'nearest'});
}
function lessonPanel(l,u){
  switch(lessonTab){
    case 'text': return textPanel(l,u);
    case 'grammar': return grammarPanel(l,u);
    case 'vocab': return vocabPanel(l,u);
    case 'quiz': return quizPanel(l,u);
    default: return explainPanel(l,u);
  }
}

/* ---- translation toggle helpers ---- */
let _trId=0;
function trPair(arText){ const id='tr'+(++_trId); return {btn:`<button class="trbtn" onclick="trToggle('${id}',this)">${svg('translate',13)} ترجمة</button>`, body:`<div id="${id}" class="tr">${esc(arText)}</div>`}; }
function trToggle(id,btn){ const e=document.getElementById(id); if(!e)return; const open=e.classList.toggle('show'); if(btn){btn.classList.toggle('on',open); btn.innerHTML=open?(svg('translate',13)+' إخفاء'):(svg('translate',13)+' ترجمة');} }
function trAll(btn){
  const p=$('#lessonPanel')||document.body;
  const open=!(btn&&btn.classList.contains('on'));
  $$('.tr',p).forEach(e=>e.classList.toggle('show',open));
  $$('.trbtn',p).forEach(b=>{ b.classList.toggle('on',open); b.innerHTML=open?(svg('translate',13)+' إخفاء'):(svg('translate',13)+' ترجمة'); });
  if(btn){ btn.classList.toggle('on',open); btn.innerHTML=open?(svg('translate',16)+' إخفاء الترجمات'):(svg('translate',16)+' ترجمة الكل'); }
}

/* ---- Explain panel (headline offline feature) ---- */
function explainPanel(l,u){
  const done=state.doneLessons.includes(l.code);
  const intro = l.introAr?`<div class="intro-mini"><span>${esc(l.introAr)}</span></div>`:'';
  return `
  ${intro}
  <div class="explain-card" style="--uc:${u.color}">
    <div class="explain-head">${svg('bulb',18)} الشرح بالعربي</div>
    <div class="explain-body">${esc(l.explain||'').split('\n').map(p=>`<p>${esc(p)}</p>`).join('')}</div>
  </div>
  <div class="explain-actions">
    <button class="ea" onclick="offlineAsk('examples','${l.code}')">${svg('list',16)} أمثلة</button>
    <button class="ea" onclick="offlineAsk('quiz','${l.code}')">${svg('quiz',16)} اختبرني</button>
    <button class="ea" onclick="setLessonTab('quiz')">${svg('quiz',16)} اختبار تفاعلي</button>
    <button class="ea wide" onclick="offlineAsk('explain','${l.code}')">${svg('brain',16)} اسأل المعلّم الذكي عن هذا الدرس</button>
  </div>
  <button class="finish-btn ${done?'is-done':''}" onclick="toggleDone('${l.code}')">
    ${done?svg('check',18)+' تم الإنجاز — إلغاء':svg('check',18)+' وضع علامة: أنهيت الدرس'}
  </button>`;
}
function toggleDone(code){
  const i=state.doneLessons.indexOf(code);
  if(i<0){ state.doneLessons.push(code); addXP(20); toast('+20 XP · أحسنت! 🎉'); }
  else { state.doneLessons.splice(i,1); toast('أُزيلت علامة الإنجاز'); }
  save(); const f=findLesson(code); if(f){ $('#lessonPanel').innerHTML=lessonPanel(f.l,f.u); }
}

/* ---- Text / conversation panel (per-line translation) ---- */
function textPanel(l,u){
  const whole=(l.lines||[]).map(x=>x.en).join(' ');
  const rows=(l.lines||[]).map(line=>{
    const tr=trPair(line.ar);
    const sp=line.sp?`<span class="ln-sp">${esc(line.sp)}</span>`:'';
    return `<div class="lnrow">
      <div class="ln-main">${sp}<div class="ln-en ltr">${esc(line.en)}</div>${tr.body}</div>
      <div class="ln-side">${tr.btn}<button class="spk" data-say="${esc(line.en)}" onclick="speakLine(this)">${svg('sound',15)}</button></div>
    </div>`;
  }).join('');
  return `<div class="lbar">
      <button class="tool" onclick="speak(${JSON.stringify(whole).replace(/"/g,'&quot;')},'en-US')">${svg('sound',16)} استماع</button>
      <button class="tool" onclick="trAll(this)">${svg('translate',16)} ترجمة الكل</button>
      <button class="tool" onclick="offlineAsk('explain','${l.code}')">${svg('brain',16)} اشرح لي</button>
    </div>
    <div class="lnlist">${rows}</div>`;
}

/* ---- Grammar panel (per-example translation) ---- */
function grammarPanel(l,u){
  return `<div class="lbar"><button class="tool" onclick="trAll(this)">${svg('translate',16)} ترجمة الكل</button>
    <button class="tool" onclick="offlineAsk('examples','${l.code}')">${svg('list',16)} أمثلة إضافية</button></div>
  ${(l.grammar||[]).map(g=>`
    <div class="gcard" style="--uc:${u.color}">
      <div class="g-head"><div class="g-point ltr">${esc(g.point)}</div><div class="g-ar">${esc(g.ar)}</div></div>
      <div class="g-note">${esc(g.note)}</div>
      <div class="g-ex">${(g.ex||[]).map(e=>{ const tr=trPair(e.ar); return `
        <div class="gex">
          <div class="gex-main"><div class="gex-en ltr">${esc(e.en)}</div>${tr.body}</div>
          <div class="gex-side">${tr.btn}<button class="spk" data-say="${esc(e.en)}" onclick="speakLine(this)">${svg('sound',14)}</button></div>
        </div>`;}).join('')}</div>
    </div>`).join('')}`;
}

/* ---- Vocab panel ---- */
function vocabPanel(l,u){
  return `<div class="lbar">
      <button class="tool" onclick="trAll(this)">${svg('translate',16)} ترجمة الكل</button>
      <button class="tool" onclick="startFlashcards('lesson:${l.code}')">${svg('cards',16)} بطاقات</button>
    </div>
    <div class="vlist">${(l.vocab||[]).map(vocabRowHTML).join('')}</div>`;
}
function vocabRowHTML(w){
  const tr=trPair(w.exAr||'');
  const ex=w.ex?`<div class="v-ex"><div class="vex-main"><span class="ltr">${esc(w.ex)}</span>${w.exAr?tr.body:''}</div><div class="vex-side">${w.exAr?tr.btn:''}<button class="spk" data-say="${esc(w.ex)}" onclick="speakLine(this)">${svg('sound',13)}</button></div></div>`:'';
  return `<div class="vrow">
    <div class="v-head">
      <div class="v-en"><span class="ltr">${esc(w.en)}</span> <button class="spk sm" data-say="${esc(w.en)}" onclick="speakSay(this)">${svg('sound',13)}</button></div>
      <div class="v-ar">${esc(w.ar)}</div>
    </div>
    ${w.ipa?`<div class="v-ipa ltr">${esc(w.ipa)}</div>`:''}
    ${ex}
  </div>`;
}

/* ===================== Flashcards ===================== */
let fc={cards:[],idx:0,flipped:false,src:''};
function startFlashcards(src){
  let cards=[];
  if(src.startsWith('lesson:')){ const f=findLesson(src.slice(7)); cards=(f&&f.l.vocab||[]).slice(); }
  else if(src.startsWith('reader:')){ const r=COURSE.readers[src.slice(7)]; cards=(r&&r.vocab||[]).slice(); }
  else if(src==='review'){ const ids=dueCards(); const db=vocabDB(); cards=ids.map(id=>db.find(w=>w.en===id)).filter(Boolean); if(!cards.length)cards=shuffle(db).slice(0,12); }
  if(!cards.length){ toast('لا توجد كلمات هنا'); return; }
  fc={cards:shuffle(cards),idx:0,flipped:false,src}; route={name:'flash',code:src}; render();
}
function viewFlash(){
  const c=fc.cards[fc.idx]; if(!c){ return viewHome(); }
  const prog=Math.round((fc.idx)/fc.cards.length*100);
  return `<div class="page-head"><button class="back" onclick="exitFlashcards()">✕</button><h2>بطاقات</h2><span class="counter">${fc.idx+1}/${fc.cards.length}</span></div>
    <div class="fc-bar"><div style="width:${prog}%"></div></div>
    <div class="flashcard ${fc.flipped?'flip':''}" onclick="flipCard()">
      <div class="fc-inner">
        <div class="fc-face fc-front"><div class="fc-word ltr">${esc(c.en)}</div>${c.ipa?`<div class="fc-ipa ltr">${esc(c.ipa)}</div>`:''}<button class="spk lg" data-say="${esc(c.en)}" onclick="event.stopPropagation();speakSay(this)">${svg('sound',20)}</button><div class="fc-hint">اضغط للقلب</div></div>
        <div class="fc-face fc-back"><div class="fc-mean">${esc(c.ar)}</div>${c.ex?`<div class="fc-ex ltr">${esc(c.ex)}</div>`:''}${c.exAr?`<div class="fc-exar">${esc(c.exAr)}</div>`:''}</div>
      </div>
    </div>
    ${fc.flipped?`<div class="fc-grade">
      <button class="grade bad" onclick="gradeCard(false)">↻ مرة ثانية</button>
      <button class="grade good" onclick="gradeCard(true)">${svg('check',16)} عرفتها</button>
    </div>`:`<div class="fc-tip">راجع الكلمة ثم اقلب البطاقة</div>`}`;
}
function flipCard(){ fc.flipped=!fc.flipped; $('#screen').innerHTML=viewFlash(); }
function gradeCard(ok){
  const c=fc.cards[fc.idx]; if(c){ reviewWord(c.en,ok); if(ok)addXP(5); }
  fc.idx++; fc.flipped=false;
  if(fc.idx>=fc.cards.length){ toast('انتهت الجلسة 👏'); checkAchievements(); go('review'); return; }
  $('#screen').innerHTML=viewFlash();
}
function exitFlashcards(){ go(fc.src.startsWith('reader:')?'units':'home'); }

/* ===================== QUIZ (4 types) ===================== */
let quiz={items:[],idx:0,earned:0,max:0,code:null,cur:null,finished:false};
function escapeReg(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
function normTok(s){ return s.toLowerCase().replace(/[^a-z0-9']/g,''); }

function buildQuiz(l){
  const items=[];
  const vocab=(l.vocab||[]).filter(w=>w.en&&w.ar);
  const pool=vocab.slice();
  /* matching */
  if(vocab.length>=4){
    const pick=shuffle(vocab).slice(0,Math.min(5,vocab.length)).map(w=>({en:w.en,ar:w.ar}));
    items.push({type:'match',pairs:pick});
  }
  /* mcq en->ar */
  shuffle(vocab).slice(0,Math.min(2,vocab.length)).forEach(w=>{
    const opts=shuffle([w.ar].concat(shuffle(pool.filter(x=>x.ar!==w.ar)).slice(0,3).map(x=>x.ar)));
    if(opts.length>=2) items.push({type:'mcq',prompt:w.en,sub:'اختر المعنى الصحيح',options:opts,answer:w.ar,dir:'en'});
  });
  /* mcq ar->en */
  shuffle(vocab).slice(0,Math.min(1,vocab.length)).forEach(w=>{
    const opts=shuffle([w.en].concat(shuffle(pool.filter(x=>x.en!==w.en)).slice(0,3).map(x=>x.en)));
    if(opts.length>=2) items.push({type:'mcq',prompt:w.ar,sub:'اختر الكلمة الإنجليزية',options:opts,answer:w.en,dir:'ar'});
  });
  /* fill blank */
  const fillC=vocab.filter(w=>{const hw=w.en.split(' ')[0]; return w.ex&&new RegExp('\\b'+escapeReg(hw)+'\\b','i').test(w.ex);});
  shuffle(fillC).slice(0,2).forEach(w=>{
    const hw=w.en.split(' ')[0];
    const sent=w.ex.replace(new RegExp('\\b'+escapeReg(hw)+'\\b','i'),'____');
    const opts=shuffle([hw].concat(shuffle(pool.filter(x=>x.en.split(' ')[0].toLowerCase()!==hw.toLowerCase())).slice(0,3).map(x=>x.en.split(' ')[0])));
    if(opts.length>=2) items.push({type:'fill',sentence:sent,sub:w.exAr||'أكمل الفراغ بالكلمة الصحيحة',options:opts,answer:hw});
  });
  /* grammar-based (for grammar-heavy lessons) */
  if(l.grammar){
    const exs=[]; l.grammar.forEach(g=>(g.ex||[]).forEach(e=>{ if(e.en&&e.ar)exs.push(e); }));
    if(vocab.length<4){
      shuffle(exs).slice(0,3).forEach(e=>{
        const opts=shuffle([e.ar].concat(shuffle(exs.filter(x=>x.ar!==e.ar)).slice(0,3).map(x=>x.ar)));
        if(opts.length>=2) items.push({type:'mcq',prompt:e.en,sub:'اختر الترجمة الصحيحة',options:opts,answer:e.ar,dir:'en'});
      });
    }
    /* ordering from short grammar examples */
    shuffle(exs).filter(e=>{const n=e.en.trim().split(/\s+/).length;return n>=4&&n<=9;}).slice(0,1).forEach(e=>{
      items.push({type:'order',tokens:e.en.trim().split(/\s+/),ar:e.ar});
    });
  }
  /* ordering from lines or vocab examples */
  const lineC=(l.lines||[]).filter(x=>{const n=x.en.trim().split(/\s+/).length;return n>=4&&n<=9;});
  const exC=vocab.filter(w=>w.ex).map(w=>({en:w.ex,ar:w.exAr})).filter(x=>{const n=x.en.trim().split(/\s+/).length;return n>=4&&n<=9;});
  shuffle(lineC.length?lineC:exC).slice(0,2).forEach(s=>{
    const toks=s.en.replace(/[—–]/g,' ').replace(/\s+/g,' ').trim().split(' ');
    if(toks.length>=4&&toks.length<=9) items.push({type:'order',tokens:toks,ar:s.ar||''});
  });
  /* dedupe order items by sentence, cap */
  const seen={}; const out=[];
  shuffle(items).forEach(it=>{ const k=it.type+'|'+(it.prompt||it.sentence||(it.tokens&&it.tokens.join(' '))||(it.pairs&&it.pairs.map(p=>p.en).join(','))); if(seen[k])return; seen[k]=1; out.push(it); });
  return out.slice(0,8);
}

function quizPanel(l,u){
  if(!quiz.items.length || quiz.code!==l.code || quiz.finished===null){
    quiz={items:buildQuiz(l),idx:0,earned:0,max:0,code:l.code,cur:null,finished:false};
    if(quiz.items.length<3){
      return `<div class="quiz-empty">${svg('quiz',30)}<p>لا توجد عناصر كافية لإنشاء اختبار لهذا الدرس.<br>راجع الشرح والمفردات أولاً.</p>
        <button class="ea" onclick="setLessonTab('explain')">العودة للشرح</button></div>`;
    }
    setupQuizItem();
  }
  return `<div id="quizArea">${renderQuiz()}</div>`;
}
function setupQuizItem(){
  const it=quiz.items[quiz.idx]; if(!it){quiz.cur=null;return;}
  if(it.type==='match') quiz.cur={left:shuffle(it.pairs),right:shuffle(it.pairs),done:{},sel:null};
  else if(it.type==='order') quiz.cur={shuf:shuffle(it.tokens.map((t,i)=>({t,id:i}))),placed:[],checked:false,correct:false};
  else quiz.cur={answered:false,pickedOk:null};
}
function renderQuiz(){
  if(quiz.finished) return renderQuizResult();
  const it=quiz.items[quiz.idx]; if(!it) return renderQuizResult();
  const prog=Math.round(quiz.idx/quiz.items.length*100);
  const typeLabel={match:'وصل الكلمات',mcq:'اختر الإجابة',fill:'أكمل الفراغ',order:'رتّب الجملة'}[it.type];
  const head=`<div class="quiz-head">
      <div class="qh-bar"><div style="width:${prog}%"></div></div>
      <div class="qh-meta"><span>${quiz.idx+1} / ${quiz.items.length}</span><span class="qh-type">${typeLabel}</span></div>
    </div>`;
  let body='';
  if(it.type==='mcq') body=renderMCQ(it);
  else if(it.type==='fill') body=renderFill(it);
  else if(it.type==='match') body=renderMatch(it);
  else if(it.type==='order') body=renderOrder(it);
  return head+body;
}
function refreshQuiz(){ const a=$('#quizArea'); if(a)a.innerHTML=renderQuiz(); }

/* MCQ */
function renderMCQ(it){
  const cur=quiz.cur;
  return `<div class="quiz-q">
    <div class="q-prompt ${it.dir==='en'?'ltr':''}">${esc(it.prompt)}</div>
    <div class="q-sub">${esc(it.sub)}</div>
    <div class="opts">${it.options.map((o,i)=>{
      let cls='opt'; if(cur.answered){ if(o===it.answer)cls+=' correct'; else if(o===cur.picked)cls+=' wrong'; }
      return `<button class="${cls} ${it.dir==='ar'?'ltr':''}" ${cur.answered?'disabled':''} onclick="answerMCQ(${i})">${esc(o)}</button>`;
    }).join('')}</div>
    ${cur.answered?nextBtn():''}
  </div>`;
}
function answerMCQ(i){
  const it=quiz.items[quiz.idx]; const cur=quiz.cur; if(cur.answered)return;
  cur.answered=true; cur.picked=it.options[i];
  const ok=cur.picked===it.answer; quiz.max++; if(ok){quiz.earned++; addXP(5);}
  refreshQuiz();
}

/* Fill */
function renderFill(it){
  const cur=quiz.cur;
  const sent=esc(it.sentence).replace('____',`<span class="blank ${cur.answered?(cur.picked===it.answer?'ok':'no'):''}">${cur.answered?esc(cur.picked):'____'}</span>`);
  return `<div class="quiz-q">
    <div class="q-sub">${esc(it.sub)}</div>
    <div class="fillsent ltr">${sent}</div>
    <div class="opts">${it.options.map((o,i)=>{
      let cls='opt ltr'; if(cur.answered){ if(o===it.answer)cls+=' correct'; else if(o===cur.picked)cls+=' wrong'; }
      return `<button class="${cls}" ${cur.answered?'disabled':''} onclick="answerFill(${i})">${esc(o)}</button>`;
    }).join('')}</div>
    ${cur.answered?nextBtn():''}
  </div>`;
}
function answerFill(i){
  const it=quiz.items[quiz.idx]; const cur=quiz.cur; if(cur.answered)return;
  cur.answered=true; cur.picked=it.options[i];
  const ok=cur.picked===it.answer; quiz.max++; if(ok){quiz.earned++; addXP(5);}
  refreshQuiz();
}

/* Match */
function renderMatch(it){
  const cur=quiz.cur; const total=it.pairs.length; const doneN=Object.keys(cur.done).length;
  return `<div class="quiz-q">
    <div class="q-sub">اضغط كلمة إنجليزية ثم معناها العربي (${doneN}/${total})</div>
    <div class="qmatch">
      <div class="qmcol">${cur.left.map((p,i)=>{
        const d=cur.done[p.en]; const sel=cur.sel===p.en;
        return `<button class="qmitem ltr ${d?'done':''} ${sel?'sel':''}" ${d?'disabled':''} onclick="matchPick('L',${i})">${esc(p.en)}</button>`;
      }).join('')}</div>
      <div class="qmcol">${cur.right.map((p,i)=>{
        const d=cur.done[p.en];
        return `<button class="qmitem ${d?'done':''}" ${d?'disabled':''} onclick="matchPick('R',${i})">${esc(p.ar)}</button>`;
      }).join('')}</div>
    </div>
    ${doneN===total?nextBtn():''}
  </div>`;
}
function matchPick(side,i){
  const cur=quiz.cur;
  if(side==='L'){ const p=cur.left[i]; if(cur.done[p.en])return; cur.sel=(cur.sel===p.en?null:p.en); refreshQuiz(); return; }
  const p=cur.right[i]; if(cur.done[p.en])return;
  if(!cur.sel){ toast('اختر كلمة إنجليزية أولاً'); return; }
  if(p.en===cur.sel){ cur.done[p.en]=true; cur.sel=null; addXP(2);
    if(Object.keys(cur.done).length===quiz.items[quiz.idx].pairs.length){ quiz.max++; quiz.earned++; }
    refreshQuiz();
  } else { cur.sel=null; toast('غير صحيح، حاول ثانية'); refreshQuiz(); }
}

/* Order */
function renderOrder(it){
  const cur=quiz.cur;
  const bank=cur.shuf.filter(s=>cur.placed.indexOf(s.id)<0);
  const ok=cur.checked&&cur.correct;
  return `<div class="quiz-q">
    <div class="q-sub">رتّب الكلمات لتكوين جملة صحيحة</div>
    ${it.ar?`<div class="order-hint">${esc(it.ar)}</div>`:''}
    <div class="qbuild ${cur.checked?(cur.correct?'ok':'no'):''} ltr">${cur.placed.length?cur.placed.map((id,pos)=>{
      const t=cur.shuf.find(s=>s.id===id).t; return `<button class="chip ${cur.checked?'':'rm'}" ${cur.checked?'disabled':''} onclick="orderRemove(${pos})">${esc(t)}</button>`;
    }).join(''):'<span class="qbuild-ph">اضغط الكلمات بالأسفل بالترتيب…</span>'}</div>
    <div class="qbank ltr">${bank.map(s=>`<button class="chip" onclick="orderAdd(${s.id})">${esc(s.t)}</button>`).join('')}</div>
    ${cur.checked
      ? (ok?`<div class="order-res ok">${svg('check',16)} ممتاز!</div>`+nextBtn()
           : `<div class="order-res no">الترتيب الصحيح:<br><b class="ltr">${esc(it.tokens.join(' '))}</b></div>`+nextBtn())
      : `<button class="check-btn" ${cur.placed.length<it.tokens.length?'disabled':''} onclick="orderCheck()">${svg('check',16)} تحقّق</button>`}
  </div>`;
}
function orderAdd(id){ const cur=quiz.cur; if(cur.checked)return; if(cur.placed.indexOf(id)<0)cur.placed.push(id); refreshQuiz(); }
function orderRemove(pos){ const cur=quiz.cur; if(cur.checked)return; cur.placed.splice(pos,1); refreshQuiz(); }
function orderCheck(){
  const it=quiz.items[quiz.idx]; const cur=quiz.cur; if(cur.checked)return;
  const built=cur.placed.map(id=>cur.shuf.find(s=>s.id===id).t).map(normTok).join(' ');
  const want=it.tokens.map(normTok).join(' ');
  cur.checked=true; cur.correct=(built===want);
  quiz.max++; if(cur.correct){quiz.earned++; addXP(8);}
  refreshQuiz();
}

/* next / result */
function nextBtn(){ const last=quiz.idx>=quiz.items.length-1; return `<button class="next-btn" onclick="quizNext()">${last?'إنهاء الاختبار':'التالي'} ${svg('play',14)}</button>`; }
function quizNext(){
  quiz.idx++;
  if(quiz.idx>=quiz.items.length){ finishQuiz(); return; }
  setupQuizItem(); refreshQuiz();
}
function finishQuiz(){
  quiz.finished=true;
  const pct=quiz.max?Math.round(quiz.earned/quiz.max*100):0;
  const prev=state.quizBest[quiz.code]||0; if(pct>prev){ state.quizBest[quiz.code]=pct; save(); }
  if(pct>=60 && !state.doneLessons.includes(quiz.code)){ state.doneLessons.push(quiz.code); addXP(20); save(); }
  checkAchievements();
  refreshQuiz();
}
function renderQuizResult(){
  const pct=quiz.max?Math.round(quiz.earned/quiz.max*100):0;
  const msg = pct>=90?'ممتاز! إتقان رائع 🏆' : pct>=70?'جيد جداً، واصل! 👏' : pct>=50?'لا بأس — راجع وأعد المحاولة 💪' : 'تحتاج مراجعة الدرس 📘';
  return `<div class="quiz-result">
    <div class="qr-ring" style="--p:${pct}"><div class="qr-pct">${pct}%</div></div>
    <div class="qr-msg">${msg}</div>
    <div class="qr-score">${quiz.earned} من ${quiz.max} صحيحة</div>
    <div class="qr-actions">
      <button class="ea" onclick="retakeQuiz()">↻ إعادة</button>
      <button class="ea" onclick="setLessonTab('explain')">${svg('bulb',16)} الشرح</button>
      <button class="ea" onclick="go('unit','${findLesson(quiz.code).u.id}')">${svg('book',16)} الوحدة</button>
    </div>
  </div>`;
}
function retakeQuiz(){ const f=findLesson(quiz.code); quiz={items:buildQuiz(f.l),idx:0,earned:0,max:0,code:f.l.code,cur:null,finished:false}; setupQuizItem(); refreshQuiz(); }

/* ===================== Review ===================== */
function viewReview(){
  const due=dueCards(); const db=vocabDB(); const total=Object.keys(state.srs).length;
  const mastered=Object.values(state.srs).filter(c=>c.box>=4).length;
  return `<div class="page-head"><button class="back" onclick="go('home')">${svg('home',18)}</button><h2>المراجعة الذكية</h2></div>
    <div class="review-hero">
      <div class="rv-stat"><b>${due.length}</b><span>مستحقة الآن</span></div>
      <div class="rv-stat"><b>${total}</b><span>كلمة محفوظة</span></div>
      <div class="rv-stat"><b>${mastered}</b><span>متقَنة</span></div>
    </div>
    <button class="big-btn" onclick="startFlashcards('review')">${svg('cards',20)} ${due.length?`راجع ${due.length} كلمة الآن`:'جلسة مراجعة عشوائية'}</button>
    <div class="sec-title">كيف تعمل المراجعة؟</div>
    <div class="info-card">نستخدم نظام التكرار المتباعد (Leitner): الكلمة التي تعرفها تظهر بعد فترة أطول، والكلمة الصعبة تتكرر أكثر — لتثبّت المفردات في ذاكرتك بأقل وقت.</div>
    ${total?`<div class="sec-title">كلماتك</div><div class="srs-list">${Object.keys(state.srs).slice(0,40).map(id=>{const w=db.find(x=>x.en===id);if(!w)return '';const c=state.srs[id];return `<div class="srs-row"><span class="ltr">${esc(w.en)}</span><span class="srs-ar">${esc(w.ar)}</span><span class="srs-box b${c.box}">صندوق ${c.box}</span></div>`;}).join('')}</div>`:''}`;
}

/* ===================== Offline AI Tutor ===================== */
function arabicDigits(s){ return String(s||'').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)); }
function normAr(s){
  return arabicDigits(String(s||''))
    .replace(/[\u064B-\u0652\u0640]/g,'')
    .replace(/[\u0622\u0623\u0625]/g,'\u0627')
    .replace(/\u0649/g,'\u064A').replace(/\u0626/g,'\u064A')
    .replace(/\u0624/g,'\u0648').replace(/\u0629/g,'\u0647')
    .toLowerCase().replace(/[^\u0600-\u06FF a-z0-9]/g,' ').replace(/\s+/g,' ').trim();
}
const STOP=new Set('درس الدرس هذا هذه على عن في من الى الي عند كان وش ايش بطريقه مبسطه بشكل مفصل اعطني اعطيني ابغى ابي اريد لي لنا هو هي هذي ذلك التي الذي كل بين مع ثم قد لقد جدا'.split(' '));
function tokens(text){ return normAr(text).split(' ').filter(t=>{ if(!t||STOP.has(t))return false; if(/^[a-z0-9]+$/.test(t))return t.length>=2; return t.length>=3; }); }
function lookupWord(q){
  const nq=normAr(q); const toks=nq.split(' ').filter(Boolean); const db=vocabDB();
  for(const w of db){ if(toks.includes(w.en.toLowerCase()))return w; }
  for(const w of db){ const en=w.en.toLowerCase(); if(en.length>3&&nq.includes(en))return w; }
  for(const w of db){ const parts=normAr(w.ar).split(/[\/،]| /).filter(p=>p.length>2); if(parts.some(p=>toks.includes(p)))return w; }
  return null;
}
function resolveUnit(text){ const m=normAr(text).match(/(?:وحده|الوحده|unit)\s*([1-6])/); return m?COURSE.units[+m[1]-1]:null; }
function searchGrammar(text){
  const toks=tokens(text); const out=[];
  COURSE.units.forEach(u=>u.lessons.forEach(l=>(l.grammar||[]).forEach(g=>{
    const head=normAr(g.point+' '+g.ar), note=normAr(g.note); let s=0,h=false;
    toks.forEach(t=>{ if(head.includes(t)){s+=3;h=true;} else if(note.includes(t))s++; });
    if(s>0)out.push({g,l,u,s,head:h});
  })));
  return out.sort((a,b)=>b.s-a.s);
}
function searchLessons(text){
  const toks=tokens(text), nq=normAr(text); const out=[];
  allLessons().forEach(({u,l})=>{
    const title=normAr(l.title+' '+l.titleAr), body=normAr((l.explain||'')+' '+(l.introAr||'')+' '+(l.intro||'')); let s=0,h=false;
    toks.forEach(t=>{ if(title.includes(t)){s+=4;h=true;} else if(body.includes(t))s++; });
    const code=l.code.replace('.',''); if(nq.replace(/\s/g,'').includes(code)){s+=8;h=true;}
    if(s>0)out.push({u,l,s,head:h});
  });
  return out.sort((a,b)=>b.s-a.s);
}
function jaccard(a,b){ const A=new Set(a),B=new Set(b); let i=0; A.forEach(x=>{if(B.has(x))i++;}); return i/((A.size+B.size-i)||1); }

function helpText(){
  return 'أنا معلّمك الذكي 🤖📘 أشتغل بدون إنترنت وأعتمد على كتابك مباشرة.\n\nجرّب أوامر مثل:\n• شرح:  «اشرح درس المقارنة»  أو  «اشرح المبني للمجهول»\n• معنى كلمة:  «معنى climate»  أو  «وش معنى valley»\n• ترجمة:  «ترجم The storm hit the area»\n• أمثلة:  «أمثلة على however»\n• اختبار:  «اختبرني في الوحدة 2»\n\nتقدر تكتب بالعربي أو الإنجليزي. وإذا أضفت مفتاح API من «حسابي» تقدر تفعّل «AI كامل أونلاين» لإجابات أعمق على أي سؤال.';
}
function meaningReply(text){
  const w=lookupWord(text);
  if(w){
    let s='🔤 '+w.en+(w.ipa?'  '+w.ipa:'')+'\n= '+w.ar;
    if(w.ex)s+='\n\nمثال:\n'+w.ex+(w.exAr?'\n'+w.exAr:'');
    s+='\n\n📍 '+(w.code?('درس '+w.code):('قارئ: '+(w.lessonTitle||'')));
    return s;
  }
  const gr=searchGrammar(text);
  if(gr.length&&gr[0].head) return grammarExplainText(gr.slice(0,1));
  return 'ما لقيت هالكلمة في قاموس المنهج 🤔\nتأكد من كتابتها بالإنجليزي، مثل:  معنى climate\nأو اكتب «مساعدة» لعرض الأوامر.';
}
function examplesReply(text){
  const gr=searchGrammar(text);
  if(gr.length&&gr[0].s>=2){ const {g,l}=gr[0]; let s='✦ أمثلة على «'+g.ar+'» ('+g.point+'):'; (g.ex||[]).forEach(e=>s+='\n\n• '+e.en+'\n  '+e.ar); s+='\n\n📍 درس '+l.code; return s; }
  const w=lookupWord(text);
  if(w){
    let s='✦ أمثلة على كلمة «'+w.en+'» ('+w.ar+'):';
    if(w.ex)s+='\n\n• '+w.ex+'\n  '+(w.exAr||'');
    const extra=[]; COURSE.units.forEach(u=>u.lessons.forEach(l=>(l.lines||[]).forEach(ln=>{ if(new RegExp('\\b'+escapeReg(w.en)+'\\b','i').test(ln.en)&&extra.length<2)extra.push(ln); })));
    extra.forEach(ln=>s+='\n\n• '+ln.en+'\n  '+ln.ar);
    return s;
  }
  const ls=searchLessons(text);
  if(ls.length&&ls[0].head){ const l=ls[0].l; const lines=(l.lines||[]).slice(0,4); if(lines.length){ let s='✦ جمل من درس '+l.code+' ('+l.titleAr+'):'; lines.forEach(ln=>s+='\n\n• '+ln.en+'\n  '+ln.ar); return s; }
    const v=(l.vocab||[]).filter(w=>w.ex).slice(0,4); if(v.length){ let s='✦ أمثلة من درس '+l.code+':'; v.forEach(w=>s+='\n\n• '+w.ex+'\n  '+(w.exAr||'')); return s; } }
  return 'حدّد الموضوع اللي تبي أمثلة عليه، مثل:\n«أمثلة على المبني للمجهول»  أو  «أمثلة على climate».';
}
function translateReply(raw){
  let sent=raw.replace(/^[\s\S]*?(ترجم(?:\s*لي)?|translate)[:：\s]*/i,'').trim();
  if(!sent) return 'اكتب الجملة بعد كلمة «ترجم»، مثل:\nترجم The weather is very hot today';
  const isAr=/[\u0600-\u06FF]/.test(sent);
  /* try matching a known line */
  const st=normTok2(sent);
  let best=null,bestScore=0,bestDir=null;
  COURSE.units.forEach(u=>u.lessons.forEach(l=>(l.lines||[]).forEach(ln=>{
    const se=jaccard(st,normTok2(ln.en)); if(se>bestScore){bestScore=se;best=ln;bestDir='en';}
    const sa=jaccard(st,normTok2(ln.ar)); if(sa>bestScore){bestScore=sa;best=ln;bestDir='ar';}
  })));
  if(best&&bestScore>=0.6) return 'الترجمة (من جُمل الكتاب):\n\n'+best.en+'\n'+best.ar;
  if(isAr) return 'الترجمة العكسية للجُمل الحرة تحتاج «AI كامل أونلاين».\nبس أقدر أترجم كلمات مفردة: اكتب «معنى الكلمة».';
  /* word-by-word gloss */
  const db=vocabDB();
  const toks=sent.split(/\s+/);
  let hit=0;
  const gloss=toks.map(tok=>{ const cl=tok.toLowerCase().replace(/[^a-z']/g,''); if(!cl)return tok; const m=db.find(w=>w.en.toLowerCase()===cl); if(m){hit++; return tok+' ('+m.ar+')';} return tok; }).join(' ');
  let s='ترجمة تقريبية كلمة-بكلمة من قاموس المنهج:\n\n'+gloss;
  if(hit<toks.length) s+='\n\nℹ️ الترجمة الكاملة الدقيقة للجُمل الحرة متاحة عند تفعيل «AI كامل أونلاين» (يحتاج مفتاح API من حسابي).';
  return s;
}
function normTok2(s){ return normAr(s).split(' ').filter(Boolean); }
function quizReply(text){
  const u=resolveUnit(text); const ls=searchLessons(text);
  let pool=[],label='عام';
  if(u){ u.lessons.forEach(l=>(l.vocab||[]).forEach(w=>pool.push(w))); label='الوحدة '+u.no; }
  else if(ls.length&&ls[0].head){ (ls[0].l.vocab||[]).forEach(w=>pool.push(w)); label='درس '+ls[0].l.code; }
  if(pool.length<4) pool=vocabDB();
  const picks=shuffle(pool).slice(0,5);
  let s='📝 اختبار سريع — '+label+'\nاختر المعنى الصحيح (الإجابات بالأسفل):\n';
  const keys=[];
  picks.forEach((w,i)=>{
    const opts=shuffle([w.ar].concat(shuffle(pool.filter(x=>x.ar!==w.ar)).slice(0,3).map(x=>x.ar)));
    s+='\n'+(i+1)+') '+w.en+'\n   '+opts.map((o,j)=>'ABCD'[j]+'. '+o).join('    ');
    keys.push((i+1)+'-'+'ABCD'[opts.indexOf(w.ar)]);
  });
  s+='\n\n— الإجابات —\n'+keys.join('   ');
  s+='\n\n✅ وللاختبار التفاعلي الكامل (وصل، ترتيب، أكمل الفراغ): افتح الدرس ← تبويب «اختبار».';
  return s;
}
function lessonExplainText(l){
  let s='📘 درس '+l.code+' — '+l.titleAr+'\n('+l.title+')\n\n'+(l.explain||'');
  if(l.grammar&&l.grammar.length){ s+='\n\n📌 أهم القواعد:'; l.grammar.forEach(g=>{ s+='\n• '+g.point+' ('+g.ar+'): '+g.note; if(g.ex&&g.ex[0])s+='\n   مثال: '+g.ex[0].en+' = '+g.ex[0].ar; }); }
  if(l.vocab&&l.vocab.length){ s+='\n\n🔑 كلمات مفتاحية: '+l.vocab.slice(0,6).map(w=>w.en+' ('+w.ar+')').join('، '); }
  s+='\n\n📲 افتح الدرس من «الوحدات» للنطق، الترجمة سطر-بسطر، والاختبار التفاعلي.';
  return s;
}
function grammarExplainText(items){
  return items.map(({g,l})=>{
    let s='📌 '+g.point+' — '+g.ar+'\n\n'+g.note+'\n\nأمثلة:';
    (g.ex||[]).forEach(e=>s+='\n• '+e.en+'\n  '+e.ar);
    s+='\n\n📍 من درس '+l.code+' ('+l.titleAr+')';
    return s;
  }).join('\n\n────────\n\n');
}
function explainReply(text){
  const gr=searchGrammar(text), ls=searchLessons(text);
  if(ls.length&&ls[0].head&&(!gr.length||ls[0].s>=gr[0].s)) return lessonExplainText(ls[0].l);
  if(gr.length&&gr[0].s>=2) return grammarExplainText(gr.slice(0, /الفرق|farق|both|و/.test(normAr(text))?2:1));
  if(ls.length&&ls[0].head) return lessonExplainText(ls[0].l);
  return 'ما عرفت أي درس تقصد 🤔\nجرّب: «اشرح درس المقارنة» أو «اشرح المبني للمجهول».\nأو اكتب «مساعدة».';
}
function offlineTutorReply(text){
  const t=normAr(text);
  if(!t) return helpText();
  if(/مساعده|ساعدني|وش تسوي|ايش تسوي|قائمه|اوامر|تعليمات|help|^\?+$/.test(t)) return helpText();
  if(/(معني|معنى|وش يعني|ايش يعني|تعريف|meaning)/.test(t) || /(ترجم|translate)\s*(كلمه|word)/.test(t)) return meaningReply(text);
  if(/(اختبرني|اختبار|امتحني|امتحان|اسالني|quiz|test)/.test(t)) return quizReply(text);
  if(/(امثله|امثلة|مثال|examples?|اعطني جمل|جمل)/.test(t)) return examplesReply(text);
  if(/(ترجم|translate)/.test(t)) return translateReply(text);
  if(/(اشرح|شرح|وضح|explain|الفرق بين|ما الفرق|قاعده)/.test(t) || /درس/.test(t)) return explainReply(text);
  /* bare topic fallback */
  const w=lookupWord(text); if(w) return meaningReply(text);
  const gr=searchGrammar(text); if(gr.length&&gr[0].head) return grammarExplainText(gr.slice(0,1));
  const ls=searchLessons(text); if(ls.length&&ls[0].head) return lessonExplainText(ls[0].l);
  return helpText();
}

/* online (optional upgrade) */
async function callAI(userText){
  const sys='أنت معلّم لغة إنجليزية ودود للصف السادس في اليمن. اشرح بالعربي ببساطة، واستخدم أمثلة من منهج Pupil\'s Book 6. كن موجزاً ومشجّعاً.';
  const history=state.chat.slice(-8).map(m=>({role:m.role,content:m.content}));
  const res=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'Content-Type':'application/json','x-api-key':state.apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify({model:state.model||'claude-3-5-haiku-20241022',max_tokens:700,system:sys,messages:history.concat([{role:'user',content:userText}])})
  });
  if(!res.ok){ throw new Error('http '+res.status); }
  const data=await res.json();
  return (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim()||'(لا يوجد رد)';
}

/* ===================== Views: Tutor ===================== */
const SUGGESTIONS=[
  'اشرح درس المقارنة','معنى climate','أمثلة على however','اختبرني في الوحدة 2','ترجم The storm hit the city','اشرح المبني للمجهول'
];
function viewTutor(){
  const online=state.aiOnline&&state.apiKey;
  const msgs=state.chat.length?state.chat:[{role:'assistant',content:'مرحباً! أنا معلّمك الذكي 🤖 أشتغل بدون إنترنت وأجاوبك من منهجك مباشرة.\n\nاكتب «مساعدة» لعرض كل ما أقدر أسوّيه، أو جرّب أحد الاقتراحات بالأسفل.'}];
  return `<div class="page-head"><button class="back" onclick="go('home')">${svg('home',18)}</button><h2>المعلّم الذكي</h2>
      <button class="ghost-btn" onclick="clearChat()">مسح</button></div>
    <div class="aibar">
      <div class="aibadge ${online?'on':''}">${online?svg('link',14)+' AI كامل · أونلاين':svg('brain',14)+' أوفلاين · من المنهج'}</div>
      <label class="switch sm"><input type="checkbox" ${online?'checked':''} onchange="toggleAiMode(this)"><span class="sl"></span></label>
    </div>
    <div id="chatScroll" class="chat">
      ${msgs.map(m=>chatBubble(m)).join('')}
      <div id="typing" class="typing" style="display:none"><span></span><span></span><span></span></div>
    </div>
    <div class="suggest">${SUGGESTIONS.map((s,i)=>`<button onclick="sendSuggestion(${i})">${esc(s)}</button>`).join('')}</div>
    <div class="composer">
      <textarea id="chatInput" rows="1" placeholder="اكتب سؤالك… (مثال: اشرح درس 5.6)" oninput="autogrow(this)" onkeydown="taKey(event)"></textarea>
      <button class="send" onclick="sendChat()">${svg('send',20)}</button>
    </div>`;
}
function chatBubble(m){
  const me=m.role==='user';
  return `<div class="msg ${me?'me':'ai'}">${me?'':`<div class="ai-av">${svg('brain',16)}</div>`}<div class="bubble">${formatMsg(m.content)}</div></div>`;
}
function formatMsg(t){
  return esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
}
function autogrow(el){ el.style.height='auto'; el.style.height=Math.min(el.scrollHeight,120)+'px'; }
function taKey(e){ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sendChat(); } }
function sendSuggestion(i){ const el=$('#chatInput'); if(el){ el.value=SUGGESTIONS[i]; } sendChat(); }
function scrollChat(){ const c=$('#chatScroll'); if(c)c.scrollTop=c.scrollHeight; }
async function sendChat(){
  const el=$('#chatInput'); const text=(el?el.value:'').trim(); if(!text)return;
  el.value=''; autogrow(el);
  state.chat.push({role:'user',content:text}); save();
  $('#chatScroll').insertAdjacentHTML('beforeend',chatBubble({role:'user',content:text}));
  const typing=$('#typing'); if(typing){ typing.style.display='flex'; $('#chatScroll').appendChild(typing); }
  scrollChat();
  let reply;
  try{
    if(state.aiOnline&&state.apiKey){ reply=await callAI(text); }
    else { await delay(300); reply=offlineTutorReply(text); }
  }catch(err){
    const off=offlineTutorReply(text);
    reply='⚠️ تعذّر الاتصال بالإنترنت، فأجبتك من المنهج مباشرة:\n\n'+off;
  }
  state.chat.push({role:'assistant',content:reply}); save();
  if(typing)typing.style.display='none';
  $('#chatScroll').insertAdjacentHTML('beforeend',chatBubble({role:'assistant',content:reply}));
  if(typing)$('#chatScroll').appendChild(typing);
  scrollChat();
}
function clearChat(){ state.chat=[]; save(); render(); }
function toggleAiMode(cb){
  if(cb.checked && !state.apiKey){
    cb.checked=false;
    toast('أضف مفتاح API من «حسابي» لتفعيل الوضع الأونلاين');
    return;
  }
  state.aiOnline=cb.checked; save(); 
  const f=$('#chatScroll'); render();
}
/* lesson → offline tutor quick actions */
function offlineAsk(kind,code){
  const f=findLesson(code); if(!f)return; const l=f.l;
  let q;
  if(kind==='examples') q='أمثلة على درس '+code+' '+l.titleAr;
  else if(kind==='quiz') q='اختبرني درس '+code;
  else q='اشرح درس '+code+' '+l.titleAr;
  go('tutor');
  setTimeout(()=>{ const el=$('#chatInput'); if(el){el.value=q;} sendChat(); },60);
}
function askTutorAbout(code){ offlineAsk('explain',code); }
function tutorExamples(code){ offlineAsk('examples',code); }

/* ===================== Views: Profile ===================== */
function viewProfile(){
  const lv=xpForLevel(state.xp); const got=earnedAchs();
  return `<div class="page-head"><button class="back" onclick="go('home')">${svg('home',18)}</button><h2>حسابي</h2></div>
    <div class="profile-hero">
      <div class="pf-av">${(state.name||'؟').slice(0,1)}</div>
      <div class="pf-name">${state.name?esc(state.name):'طالب'} <button class="mini" onclick="editName()">${svg('edit',13)}</button></div>
      <div class="pf-lv">المستوى ${lv.lv} · ${state.xp} XP</div>
      <div class="pf-bar"><div style="width:${Math.round(lv.into/lv.need*100)}%"></div></div>
    </div>
    <div class="stat-row">
      <div class="stat"><div class="stat-n">${state.doneLessons.length}</div><div class="stat-l">دروس</div></div>
      <div class="stat"><div class="stat-n">${state.streak}</div><div class="stat-l">أيام متتالية</div></div>
      <div class="stat"><div class="stat-n">${Object.keys(state.srs).length}</div><div class="stat-l">كلمات</div></div>
      <div class="stat"><div class="stat-n">${got.length}/${ACHS.length}</div><div class="stat-l">أوسمة</div></div>
    </div>
    <div class="sec-title">الأوسمة</div>
    <div class="ach-grid">${ACHS.map(a=>{const e=got.includes(a);return `<div class="ach ${e?'on':''}"><div class="ach-ic">${svg(a.icon,20)}</div><div class="ach-n">${esc(a.name)}</div><div class="ach-d">${esc(a.desc)}</div></div>`;}).join('')}</div>

    <div class="sec-title">المعلّم الذكي</div>
    <div class="settings">
      <div class="set-row"><div><div class="set-t">الوضع الافتراضي</div><div class="set-s">يعمل بدون إنترنت — يجاوب من المنهج مباشرة ✅</div></div></div>
      <div class="set-row"><div><div class="set-t">ترقية اختيارية: AI كامل (أونلاين)</div><div class="set-s">أضف مفتاح Anthropic API لإجابات أعمق على أي سؤال. اختياري تماماً.</div></div></div>
      <div class="set-field"><input id="apiKey" type="password" placeholder="sk-ant-..." value="${esc(state.apiKey)}"><button onclick="saveApiKey()">حفظ</button></div>
      ${state.apiKey?`<div class="set-ok">${svg('check',14)} المفتاح محفوظ — تقدر تفعّل الوضع الأونلاين من شاشة المعلّم.</div>`:''}
    </div>

    <div class="sec-title">المظهر</div>
    <div class="settings">
      <div class="set-row"><div class="set-t">الوضع الليلي</div>
        <label class="switch"><input type="checkbox" ${state.theme==='dark'?'checked':''} onchange="toggleTheme(this)"><span class="sl"></span></label></div>
    </div>

    <button class="danger-btn" onclick="resetAll()">${svg('edit',16)} إعادة تعيين كل البيانات</button>
    <div class="footer-note">ClassAI · English Course (Pupil's Book 6) · يعمل بدون إنترنت</div>`;
}
function editName(){ const n=prompt('اسمك:',state.name||''); if(n!=null){ state.name=n.trim().slice(0,24); save(); render(); } }
function saveApiKey(){ const v=$('#apiKey').value.trim(); state.apiKey=v; if(!v)state.aiOnline=false; save(); toast(v?'تم حفظ المفتاح ✅':'تم مسح المفتاح'); render(); }
function toggleTheme(cb){ state.theme=cb.checked?'dark':'light'; document.documentElement.setAttribute('data-theme',state.theme); save(); }
function resetAll(){ if(confirm('سيتم مسح كل تقدمك ومراجعاتك. متأكد؟')){ localStorage.removeItem(KEY); state=Object.assign({name:'',xp:0,doneLessons:[],srs:{},quizBest:{},streak:0,lastDay:'',theme:'light',apiKey:'',model:'claude-3-5-haiku-20241022',aiOnline:false,chat:[]}); save(); toast('تمت إعادة التعيين'); go('home'); } }

/* ===================== Achievements check ===================== */
let _knownAch=null;
function checkAchievements(){
  const now=earnedAchs().map(a=>a.id);
  if(_knownAch){ const fresh=now.filter(id=>!_knownAch.includes(id)); if(fresh.length){ const a=ACHS.find(x=>x.id===fresh[0]); toast('🏅 وسام جديد: '+a.name); } }
  _knownAch=now;
}

/* ===================== Nav + render ===================== */
function nav(){
  const items=[['home','الرئيسية','home'],['units','الوحدات','book'],['review','مراجعة','cards'],['tutor','المعلّم','brain'],['profile','حسابي','user']];
  const active=({lesson:'units',unit:'units',reader:'units',flash:'review'})[route.name]||route.name;
  return `<nav class="nav">${items.map(([k,l,ic])=>`<button class="nav-i ${active===k?'on':''}" onclick="go('${k}')">${svg(ic,22)}<span>${l}</span></button>`).join('')}</nav>`;
}
function render(){
  let html;
  switch(route.name){
    case 'units': html=viewUnits(); break;
    case 'unit': html=viewUnit(route.code); break;
    case 'reader': html=viewReader(route.code); break;
    case 'lesson': html=viewLesson(route.code); break;
    case 'flash': html=viewFlash(); break;
    case 'review': html=viewReview(); break;
    case 'tutor': html=viewTutor(); break;
    case 'profile': html=viewProfile(); break;
    default: html=viewHome();
  }
  const app=$('#app');
  app.innerHTML=`<main id="screen">${html}</main>${nav()}`;
  if(route.name==='tutor'){ setTimeout(scrollChat,30); }
}

/* ===================== Boot ===================== */
function boot(){
  document.documentElement.setAttribute('data-theme',state.theme||'light');
  _knownAch=earnedAchs().map(a=>a.id);
  if(!state.name){
    const n=prompt('أهلاً بك في ClassAI 👋\nاكتب اسمك للبدء:','');
    if(n!=null){ state.name=n.trim().slice(0,24); save(); }
  }
  render();
}
if(document.readyState!=='loading')boot(); else document.addEventListener('DOMContentLoaded',boot);
