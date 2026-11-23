const CONFIG = {
  SCRIPT_URL:
    'https://script.google.com/macros/s/AKfycbxJJWnH3gd7dKrqkyOn5VRB21doH-PaxKPEYiErNphgVzHsjsCo0x9INOmbZJxeu5HFtg/exec',
  STRICT_EXIT: true,
  STORAGE_KEY: 'yly_crisis_attempt_v1'
};

const INTRO = {
  title: 'الحدث في خطر',
  text: [
    'أنت أحد أعضاء فريق العمليات المسؤول عن تنظيم فعالية شبابية كبيرة، يشارك فيها شباب من محافظات مختلفة، بالإضافة إلى متحدثين وضيوف وفقرات متنوعة.',
    'الفعالية من المفترض أن تبدأ خلال 30 دقيقة، والفريق انتهى تقريبًا من تجهيزاته، وبدأ المشاركون بالفعل في الوصول.',
    'لكن فجأة، تظهر مشكلة غير متوقعة: القاعة الرئيسية أصبحت غير متاحة بسبب مشكلة طارئة، ولا يوجد وقت محدد لإصلاحها أو لإعادة فتحها.',
    'مطلوب منك التعامل مع الأزمة واتخاذ قرارات تساعد في إنقاذ الفعالية وتقليل تأثير المشكلة على المشاركين وسير اليوم.',
    'ستتطور الأحداث تدريجيًا، وستحتاج إلى التعامل مع كل تحديث بناءً على المعلومات المتاحة وقتها.'
  ]
};

const STAGES = [
  {
    name: 'المرحلة الأولى — تقييم الموقف',
    short: 'تقييم الموقف',
    time: 'قبل بداية الفعالية بـ30 دقيقة',
    update: ['تم إبلاغ الفريق بأن القاعة الرئيسية لن تكون جاهزة قبل موعد بدء الفعالية، ولا يوجد وقت محدد لإصلاح المشكلة.', 'المشاركون بدأوا في الوصول، وبعض المتحدثين والضيوف موجودون بالفعل.', 'فريق العمليات يحاول فهم الوضع وتحديد أول خطوة للتعامل مع الأزمة.'],
    questions: [
      'ما أكبر خطر ممكن ينتج عن الوضع الحالي من وجهة نظرك؟',
      'ما أول تصرف هتقوم به في اللحظة دي؟ وليه اخترت تبدأ به؟',
      'إيه المعلومات اللي محتاج تعرفها قبل اتخاذ قرار نهائي بشأن الفعالية؟'
    ]
  },
  {
    name: 'المرحلة الثانية — اتخذ قرارك',
    short: 'اتخذ قرارك',
    time: 'قبل بداية الفعالية بـ20 دقيقة',
    update: ['بعد البحث عن حلول، ظهر بديل: هناك قاعة أخرى متاحة، لكنها أصغر من القاعة الرئيسية، ولن تسمح بتنفيذ الفعالية بنفس الشكل المخطط له.', 'بعض أعضاء الفريق يقترحون الانتظار حتى يتم إصلاح القاعة الرئيسية، بينما يرى آخرون أن الانتظار قد يزيد من تأثير الأزمة ويعطل الفعالية بالكامل.', 'الوقت المتبقي أصبح أقل، ولا يوجد تأكيد بموعد عودة القاعة الرئيسية.'],
    questions: [
      'لو القرار في إيدك، هتختار الانتقال للقاعة البديلة، الانتظار، ولا حل تاني؟ وضّح قرارك وأسبابك.',
      'إيه الحاجات اللي ممكن تتنازل عنها أو تغيّرها في الفعالية، وإيه الحاجات اللي شايف إنها لازم تفضل موجودة مهما حصل؟',
      'لو معاك 3 أفراد من فريق العمليات، هتوزع عليهم المهام إزاي في اللحظة دي؟ وضّح مسؤولية كل فرد.'
    ]
  },
  {
    name: 'المرحلة الثالثة — احتواء الأزمة والتعافي',
    short: 'احتواء الأزمة والتعافي',
    time: 'قبل بداية الفعالية بـ10 دقائق',
    update: ['تم التأكيد أن القاعة الرئيسية لن تكون متاحة لمدة ساعتين على الأقل.', 'القاعة البديلة يمكن استخدامها، لكنها تحتاج إلى تجهيز سريع، وبعض فقرات البرنامج لن يمكن تنفيذها بنفس الشكل المخطط له.', 'المتحدثون بدأوا في السؤال عن مكان الفعالية، والمشاركون ينتظرون معرفة ما سيحدث.', 'الوقت المتاح لاتخاذ القرار والتنفيذ أصبح محدودًا جدًا.'],
    questions: [
      'إيه الخطوات اللي هتقوم بها عشان تقلل تأثير الأزمة على باقي اليوم وتضمن إن الفعالية تستمر بأفضل شكل ممكن؟',
      'اكتب رسالة قصيرة هتوجهها للمشاركين توضح فيها الوضع الحالي، وتطمنهم، وتوجّههم للتصرف المطلوب.',
      'لو هتضيف إجراء واحد للمستقبل عشان تقلل احتمالية تكرار الأزمة دي أو تساعد الفريق يتعامل معاها بشكل أفضل، هيكون إيه؟ وليه؟'
    ]
  }
];

const STATUS = { done: 'مكتمل', left: 'منتهٍ بسبب مغادرة الموقع', failed: 'تعذّر الإرسال' };
const TYPE = { final: 'إرسال نهائي', auto: 'إرسال تلقائي عند المغادرة' };
const REVIEW = 3;

const $ = (id) => document.getElementById(id);
const app = $('app');
let state = load();
let view = 'entry';
let errorMsg = '';
let submitting = false;
let saveTimer = null;

function load() {
  try { return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY)); } catch (e) { return null; }
}
function save() {
  try { localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}
function esc(s) {
  const d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}
function uid() {
  return 'YLY-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}
function filled(i) { return (state.answers[i] || '').trim().length > 0; }
function stageDone(s) { return [0, 1, 2].every((k) => filled(s * 3 + k)); }
function allDone() { return STAGES.every((_, s) => stageDone(s)); }
function maxReach() {
  let r = 0;
  while (r < 3 && stageDone(r)) r++;
  return r;
}
function isConfigured() { return /^https:\/\//.test(CONFIG.SCRIPT_URL); }

function buildPayload(status, type) {
  return {
    id: state.id,
    timestamp: new Date().toISOString(),
    name: state.name,
    governorate: state.governorate || '',
    team: state.team || '',
    answers: state.answers.map((a) => a || ''),
    status,
    type
  };
}

async function sendConfirmed(payload) {
  if (!isConfigured()) return false;
  try {
    const res = await fetch(CONFIG.SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
    const data = await res.json();
    return data && data.ok === true;
  } catch (e) { return false; }
}

function sendOnExit(payload) {
  if (!isConfigured()) return;
  const body = JSON.stringify(payload);
  let queued = false;
  try { queued = navigator.sendBeacon(CONFIG.SCRIPT_URL, new Blob([body], { type: 'text/plain;charset=utf-8' })); } catch (e) {}
  if (!queued) {
    try { fetch(CONFIG.SCRIPT_URL, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body }); } catch (e) {}
  }
}

function terminate() {
  if (!CONFIG.STRICT_EXIT || !state || state.status !== 'active' || submitting) return;
  state.status = 'terminated';
  state.sent = 'unconfirmed';
  save();
  sendOnExit(buildPayload(STATUS.left, TYPE.auto));
}

document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') terminate(); });
window.addEventListener('pagehide', terminate);
window.addEventListener('beforeunload', terminate);

function setSaving() {
  const el = $('saveStatus');
  el.textContent = 'جاري حفظ إجابتك...';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { el.textContent = 'تم حفظ إجاباتك'; }, 500);
}

function go(v, stage) {
  if (typeof stage === 'number') { state.stage = stage; save(); }
  view = v;
  errorMsg = '';
  render();
  window.scrollTo(0, 0);
}

function progressHtml() {
  const reach = maxReach();
  const cur = view === 'review' ? REVIEW : state.stage;
  const pct = Math.round((STAGES.reduce((n, _, s) => n + [0, 1, 2].filter((k) => filled(s * 3 + k)).length, 0) / 9) * 100);
  const btns = STAGES.map((s, i) => `<button class="step ${i === cur ? 'cur' : ''} ${stageDone(i) ? 'done' : ''}" data-stage="${i}" ${i > reach ? 'disabled' : ''}>${esc(s.name.split(' — ')[0])}<br>${esc(s.short)}</button>`).join('');
  const rev = `<button class="step ${cur === REVIEW ? 'cur' : ''}" data-stage="review" ${allDone() ? '' : 'disabled'}>المراجعة النهائية</button>`;
  return `<div class="steps">${btns}${rev}</div><div class="bar"><i style="width:${pct}%"></i></div><p class="mute">تمت الإجابة على ${Math.round(pct * 9 / 100)} من 9 أسئلة (${pct}%)</p>`;
}

function bindNav() {
  document.querySelectorAll('[data-stage]').forEach((b) => b.addEventListener('click', () => {
    const t = b.dataset.stage;
    if (t === 'review') { if (allDone()) go('review'); } else go('stage', Number(t));
  }));
}

function renderEntry() {
  app.innerHTML = `<div class="card"><h1>${INTRO.title}</h1>${INTRO.text.slice(0, 2).map((p) => `<p>${p}</p>`).join('')}<p class="mute">تحدٍّ كتابي لقياس طريقة تفكيرك في إدارة الأزمات. اكتب إجاباتك بكلماتك الخاصة.</p>
  <label for="nameIn">الاسم بالكامل</label><input type="text" id="nameIn" autocomplete="name" placeholder="اكتب اسمك الثلاثي">
  <div id="entryErr" class="err" role="alert"></div>
  <div class="row"><button class="btn" id="startBtn">ابدأ التحدي</button></div></div>`;
  $('startBtn').onclick = () => {
    const name = $('nameIn').value.trim().replace(/\s+/g, ' ');
    if (name.length < 3 || !name.includes(' ')) { $('entryErr').textContent = 'من فضلك اكتب اسمك بالكامل (الاسم الأول واسم العائلة على الأقل) قبل البدء.'; return; }
    state = { id: uid(), name, stage: 0, answers: Array(9).fill(''), governorate: '', team: '', status: 'active', sent: '' };
    save();
    go('stage', 0);
  };
}

function renderStage() {
  const s = STAGES[state.stage];
  const last = state.stage === 2;
  const qs = s.questions.map((q, k) => {
    const n = state.stage * 3 + k;
    return `<div class="q"><label for="a${n}">سؤال ${n + 1}: ${esc(q)}</label><textarea id="a${n}" data-i="${n}" placeholder="اكتب إجابتك هنا...">${esc(state.answers[n])}</textarea></div>`;
  }).join('');
  app.innerHTML = progressHtml() + `<div class="card alert"><h3>تحديث الأزمة — ${esc(s.time)}</h3>${s.update.map((p) => `<p>${p}</p>`).join('')}</div>
  <div class="card"><h2>${esc(s.name)}</h2>${qs}<div id="stageErr" class="err" role="alert">${esc(errorMsg)}</div>
  <div class="row"><button class="btn ghost" id="prevBtn" ${state.stage === 0 ? 'disabled' : ''}>المرحلة السابقة</button><button class="btn" id="nextBtn">${last ? 'المراجعة النهائية' : 'المرحلة التالية'}</button></div></div>`;
  bindNav();
  app.querySelectorAll('textarea').forEach((t) => t.addEventListener('input', () => {
    state.answers[Number(t.dataset.i)] = t.value;
    save();
    setSaving();
  }));
  $('prevBtn').onclick = () => go('stage', state.stage - 1);
  $('nextBtn').onclick = () => {
    if (!stageDone(state.stage)) { $('stageErr').textContent = 'أجب على الأسئلة الثلاثة في هذه المرحلة قبل الانتقال.'; return; }
    if (last) go('review'); else go('stage', state.stage + 1);
  };
}

function renderReview() {
  const blocks = STAGES.map((s, si) => `<div class="card"><h2>${esc(s.name)}</h2>${s.questions.map((q, k) => {
    const n = si * 3 + k;
    return `<div class="q"><b>سؤال ${n + 1}: ${esc(q)}</b><div class="ans ${filled(n) ? '' : 'empty'}">${filled(n) ? esc(state.answers[n]) : 'لم تتم الإجابة'}</div></div>`;
  }).join('')}<button class="btn ghost" data-edit="${si}">تعديل إجابات هذه المرحلة</button></div>`).join('');
  app.innerHTML = progressHtml() + `<div class="card"><h1>المراجعة النهائية</h1><p>المشارك: <b>${esc(state.name)}</b></p><p class="mute">راجع إجاباتك. لن يتم الإرسال إلا بعد الضغط على زر التأكيد.</p></div>${blocks}
  <div class="card"><h2>معلومات اختيارية</h2><label for="gov">المحافظة</label><input type="text" id="gov" value="${esc(state.governorate)}"><label for="team">الفريق / المجموعة</label><input type="text" id="team" value="${esc(state.team)}">
  <div id="subErr" class="err" role="alert">${esc(errorMsg)}</div><div class="row"><button class="btn ghost" id="backBtn">رجوع للمرحلة الثالثة</button><button class="btn danger" id="submitBtn">تأكيد وإرسال الإجابات</button></div></div>`;
  bindNav();
  app.querySelectorAll('[data-edit]').forEach((b) => b.onclick = () => go('stage', Number(b.dataset.edit)));
  $('gov').oninput = (e) => { state.governorate = e.target.value; save(); setSaving(); };
  $('team').oninput = (e) => { state.team = e.target.value; save(); setSaving(); };
  $('backBtn').onclick = () => go('stage', 2);
  $('submitBtn').onclick = submitFinal;
}

async function submitFinal() {
  const err = $('subErr');
  if (!allDone()) { err.textContent = 'يجب الإجابة على الأسئلة التسعة كلها قبل الإرسال.'; return; }
  if (!isConfigured()) { err.textContent = 'وضع تجريبي: لم يتم ربط Google Sheets، لذلك لم تُرسل الإجابات. إجاباتك محفوظة على جهازك فقط.'; return; }
  if (submitting) return;
  submitting = true;
  const btn = $('submitBtn');
  btn.disabled = true;
  err.textContent = 'جاري إرسال إجاباتك...';
  const ok = await sendConfirmed(buildPayload(STATUS.done, TYPE.final));
  submitting = false;
  if (ok) {
    state.status = 'submitted';
    state.sent = 'confirmed';
    save();
    go('done');
  } else {
    btn.disabled = false;
    err.textContent = 'تعذّر إرسال الإجابات ولم يتم تأكيد وصولها. إجاباتك ما زالت محفوظة، تأكد من اتصالك بالإنترنت ثم اضغط على الزر مرة أخرى.';
  }
}

function renderDone() {
  app.innerHTML = `<div class="card center"><h1 class="ok">تم استلام إجاباتك بنجاح</h1><p>شكرًا لمشاركتك في التحدي.</p><p>تم تسجيل إجاباتك، ويمكنك الآن إنهاء التجربة.</p></div>`;
}

function renderTerminated() {
  app.innerHTML = `<div class="card alert center"><h1>انتهت المحاولة</h1><p>تم إنهاء هذه المحاولة لأنه تم رصد مغادرة صفحة التحدي. لا يمكن استئناف المحاولة أو تعديل الإجابات.</p><p class="mute">تم حفظ إجاباتك حتى لحظة المغادرة، وإن تعذّر وصولها فسيتواصل معك المنظمون.</p></div>`;
  if (state.sent === 'unconfirmed' && isConfigured()) {
    sendConfirmed(buildPayload(STATUS.left, TYPE.auto)).then((ok) => { if (ok) { state.sent = 'confirmed'; save(); } });
  }
}

function render() {
  $('demoBanner').hidden = isConfigured();
  if (state && state.status === 'terminated') return renderTerminated();
  if (state && state.status === 'submitted') return renderDone();
  if (!state) return renderEntry();
  if (view === 'review' && allDone()) return renderReview();
  if (view === 'done') return renderDone();
  view = 'stage';
  state.stage = Math.min(state.stage || 0, maxReach() > 2 ? 2 : Math.max(maxReach(), state.stage || 0));
  renderStage();
}

function openScenario() {
  if (!state || state.status !== 'active') return;
  const reach = Math.min(maxReach(), 2);
  const upTo = Math.max(reach, state.stage || 0);
  const parts = STAGES.slice(0, upTo + 1).map((s) => `<div class="card alert"><h3>${esc(s.name)} — ${esc(s.time)}</h3>${s.update.map((p) => `<p>${p}</p>`).join('')}</div>`).join('');
  $('scenarioBody').innerHTML = `<div class="card"><h2>${INTRO.title}</h2>${INTRO.text.map((p) => `<p>${p}</p>`).join('')}</div>${parts}`;
  $('scenarioDialog').showModal();
}

function addScenarioButton() {
  const b = document.createElement('button');
  b.className = 'btn ghost';
  b.textContent = 'مراجعة السيناريو';
  b.id = 'scenarioBtn';
  b.onclick = openScenario;
  document.querySelector('.top-mid').appendChild(b);
  $('closeScenario').onclick = () => $('scenarioDialog').close();
}

addScenarioButton();
render();
