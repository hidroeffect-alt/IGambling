
const C=window.APP_CONTENT;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const storeKey='pm-interview-os-v1';
let state=JSON.parse(localStorage.getItem(storeKey)||'{"q":{},"modules":{},"theme":"light"}');
let deferredPrompt=null, currentModule=null, shuffled=false;

function save(){localStorage.setItem(storeKey,JSON.stringify(state));updateProgress()}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function navItems(){
 const nav=$('#nav'); nav.innerHTML='';
 const add=(label,id,icon='')=>{const b=document.createElement('button');b.dataset.go=id;b.innerHTML=`${icon?`<span style="display:inline-block;width:21px">${icon}</span>`:''}${label}`;b.onclick=()=>go(id);nav.appendChild(b)};
 let sep=document.createElement('div');sep.className='navsep';sep.textContent='Учиться';nav.appendChild(sep);
 add('Обзор','dashboard','⌂');
 C.modules.forEach(m=>add(m.title,m.id,m.icon));
 sep=document.createElement('div');sep.className='navsep';sep.textContent='Практика';nav.appendChild(sep);
 add('Тренажёр','trainer','?');add('Словарь','glossary','≡');add('Настройки','settings','⚙');
}
function go(id){
 if(C.modules.some(m=>m.id===id)){openModule(id);return}
 $$('.view').forEach(v=>v.classList.remove('active')); $('#'+id).classList.add('active');
 $$('nav button').forEach(b=>b.classList.toggle('active',b.dataset.go===id));
 $('#mobileSection').textContent=id==='dashboard'?'Обзор':id==='trainer'?'Тренажёр':id==='glossary'?'Словарь':'Настройки';
 closeMenu(); window.scrollTo({top:0,behavior:'smooth'});
}
function renderModules(filter='ALL',term=''){
 const grid=$('#moduleGrid');grid.innerHTML='';
 const q=term.toLowerCase().trim();
 C.modules.filter(m=>(filter==='ALL'||m.level===filter)&&(!q||(m.title+' '+m.summary+' '+m.sections.map(s=>s.title+' '+s.body).join(' ')).toLowerCase().includes(q))).forEach(m=>{
  const d=document.createElement('article');d.className='module-card';d.onclick=()=>openModule(m.id);
  d.innerHTML=`<div class="module-icon">${m.icon}</div><h3>${m.title}</h3><p>${m.summary}</p><div class="module-footer"><span>${m.sections.length} блоков</span><span><i class="dotdone ${state.modules[m.id]?'done':''}"></i> ${state.modules[m.id]?'изучено':'в процессе'}</span></div>`;
  grid.appendChild(d)
 });
}
function openModule(id){
 const m=C.modules.find(x=>x.id===id);currentModule=m;
 $$('.view').forEach(v=>v.classList.remove('active'));$('#moduleView').classList.add('active');
 $$('nav button').forEach(b=>b.classList.toggle('active',b.dataset.go===id));
 $('#mobileSection').textContent=m.title;
 $('#markModule').textContent=state.modules[id]?'✓ Изучено':'✓ Отметить изученным';
 $('#moduleContent').innerHTML=`<div class="module-hero"><div class="eyebrow">${m.level==='must'?'MUST KNOW':'DEEP DIVE'}</div><h2>${m.icon} ${m.title}</h2><p>${m.summary}</p></div><div class="content-grid">${m.sections.map(s=>`<article class="content-card"><h3>${s.title}</h3><p>${s.body}</p></article>`).join('')}</div>`;
 closeMenu(); window.scrollTo({top:0,behavior:'smooth'});
}
function updateProgress(){
 const known=Object.values(state.q).filter(x=>x==='known').length;
 const review=Object.values(state.q).filter(x=>x==='review').length;
 const moduleDone=Object.values(state.modules).filter(Boolean).length;
 const total=C.questions.length+C.modules.length, done=known+moduleDone;
 const pct=Math.round(done/total*100);
 $('#progressPct').textContent=pct+'%';$('#mobilePct').textContent=pct+'%';$('#progressBar').style.width=pct+'%';
 $('#knownCount').textContent=known+' вопросов освоено';$('#reviewCount').textContent=review+' повторить';$('#trainerKnown').textContent=known;
}
function renderQuestions(){
 let arr=C.questions.map((x,i)=>({...x,_i:i}));
 const term=$('#questionSearch').value.toLowerCase().trim(),cat=$('#questionCat').value,only=$('#onlyReview').classList.contains('active');
 if(shuffled) arr=[...arr].sort(()=>Math.random()-.5);
 arr=arr.filter(x=>(cat==='ALL'||x.cat===cat)&&(!term||(x.q+' '+x.a).toLowerCase().includes(term))&&(!only||state.q[x._i]==='review'));
 $('#questionList').innerHTML=arr.map((x,n)=>`<article class="question"><div class="qhead"><div class="qnum">${n+1}</div><div class="qmain"><b>${x.q}</b><div class="qcat">${x.cat}</div></div><div class="qstatus"><button class="statusbtn known ${state.q[x._i]==='known'?'on':''}" data-qi="${x._i}" data-status="known">Знаю</button><button class="statusbtn review ${state.q[x._i]==='review'?'on':''}" data-qi="${x._i}" data-status="review">Повторить</button></div></div><details><summary>Показать ответ</summary><div class="answer"><strong>Логика:</strong> ${x.a}</div></details></article>`).join('');
 $$('.statusbtn').forEach(b=>b.onclick=()=>{const i=b.dataset.qi,v=b.dataset.status;state.q[i]=state.q[i]===v?'':v;save();renderQuestions()});
}
function renderGloss(){
 const q=$('#glossSearch').value.toLowerCase().trim();
 $('#glossList').innerHTML=C.glossary.filter(x=>!q||(x.term+' '+x.def).toLowerCase().includes(q)).map(x=>`<article class="gloss-card"><b>${x.term}</b><span>${x.def}</span></article>`).join('');
}
function closeMenu(){$('#sidebar').classList.remove('open');$('#scrim').classList.remove('show')}
function openMenu(){$('#sidebar').classList.add('open');$('#scrim').classList.add('show')}
function exportState(){
 const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download='pm-interview-progress.json';a.click();URL.revokeObjectURL(a.href)
}
function applyTheme(){document.documentElement.dataset.theme=state.theme||'light'}
function init(){
 navItems(); renderModules(); renderQuestions(); renderGloss(); updateProgress();applyTheme();
 $('#modCount').textContent=C.modules.length;$('#qCount').textContent=C.questions.length;$('#gCount').textContent=C.glossary.length;
 const cats=[...new Set(C.questions.map(x=>x.cat))];cats.forEach(c=>$('#questionCat').insertAdjacentHTML('beforeend',`<option>${c}</option>`));
 $$('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
 $('#globalSearch').oninput=e=>renderModules('ALL',e.target.value);
 $$('[data-filter]').forEach(b=>b.onclick=()=>{$$('.chip[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderModules(b.dataset.filter,$('#globalSearch').value)});
 $('#resetFilter').onclick=()=>{$$('.chip[data-filter]').forEach(x=>x.classList.remove('active'));renderModules('ALL',$('#globalSearch').value)};
 $('#questionSearch').oninput=renderQuestions;$('#questionCat').onchange=renderQuestions;
 $('#onlyReview').onclick=e=>{e.currentTarget.classList.toggle('active');renderQuestions()};
 $('#shuffleBtn').onclick=e=>{shuffled=!shuffled;e.currentTarget.classList.toggle('active',shuffled);renderQuestions()};
 $('#glossSearch').oninput=renderGloss;
 $('#markModule').onclick=()=>{if(!currentModule)return;state.modules[currentModule.id]=!state.modules[currentModule.id];save();$('#markModule').textContent=state.modules[currentModule.id]?'✓ Изучено':'✓ Отметить изученным';toast(state.modules[currentModule.id]?'Модуль отмечен':'Отметка снята')};
 $('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';save();applyTheme()};
 $('#menuBtn').onclick=openMenu;$('#scrim').onclick=closeMenu;
 $('#exportBtn').onclick=exportState;
 $('#importFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);save();applyTheme();renderModules();renderQuestions();toast('Прогресс импортирован')}catch{toast('Не удалось прочитать файл')}};r.readAsText(f)};
 $('#resetBtn').onclick=()=>{if(confirm('Сбросить весь локальный прогресс?')){state={q:{},modules:{},theme:state.theme};save();renderModules();renderQuestions();toast('Прогресс сброшен')}};
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});
 $('#installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true};
 if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').then(()=>$('#pwaStatus').textContent='Service Worker активен: приложение доступно офлайн после первого посещения.').catch(()=>{});
}
init();
