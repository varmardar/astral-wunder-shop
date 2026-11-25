(function(){
function get(){try{return localStorage.getItem("astralCookies")}catch(e){return null}}
function set(v){try{localStorage.setItem("astralCookies",v)}catch(e){}}
if(get())return;
const css=document.createElement("style");
css.textContent=`.ck{position:fixed;inset:0;background:#0008;z-index:90;display:flex;align-items:flex-end;justify-content:center;padding:1rem}
.ck-box{background:#1f0f35;border:1px solid #ffd700;border-radius:18px;max-width:620px;width:100%;padding:1.5rem;color:#f2e9ff;box-shadow:0 0 40px #9b6dff88;font-family:Georgia,serif}
.ck h3{color:#ffd700;margin-bottom:.5rem}.ck p{font-size:.9rem;opacity:.9}
.ck-opts{margin:1rem 0;display:grid;gap:.5rem;font-size:.88rem}.ck-opts label{display:flex;gap:.6rem;align-items:center;background:#12061f;padding:.6rem .8rem;border-radius:10px}
.ck-btns{display:flex;gap:.6rem;flex-wrap:wrap}.ck-btns button{flex:1;min-width:140px;padding:.7rem;border-radius:30px;border:0;font-family:inherit;font-size:.9rem;cursor:pointer;position:relative;transition:transform .2s}
.ck-yes{background:linear-gradient(90deg,#ffd700,#ff5fa2);color:#2a0845;font-weight:bold}.ck-no{background:#12061f;color:#f2e9ff;border:1px solid #ffffff33!important}
.ck-msg{font-size:.85rem;color:#ff6b6b;min-height:1.2rem;margin-top:.6rem}`;
document.head.appendChild(css);
const w=document.createElement("div");w.className="ck";
w.innerHTML=`<div class="ck-box"><h3>🍪 Wir verwenden Dinkelkekse</h3>
<p>Diese Website verwendet energetisch gebackene Dinkelkekse, um deine Aura zu analysieren, deine Chakren zu tracken und dir personalisierte Schwingungen anzuzeigen. Echte Cookies verwenden wir natürlich nicht.</p>
<div class="ck-opts">
<label><input type="checkbox" checked disabled> Notwendige Kekse (für die Verbindung zum Kosmos, nicht abwählbar)</label>
<label><input type="checkbox" checked> Aura-Analyse-Kekse</label>
<label><input type="checkbox" checked> Telepathische Marketing-Kekse</label>
<label><input type="checkbox" checked> Kekse für Meister Horst (er hat Hunger)</label>
<label><input type="checkbox" checked disabled> Reptiloiden-Tracking (wurde ohne uns aktiviert)</label>
</div>
<div class="ck-btns"><button class="ck-yes" id="ckYes">✨ Alle Kekse annehmen</button><button class="ck-no" id="ckNo">Nur notwendige</button></div>
<div class="ck-msg" id="ckMsg"></div></div>`;
document.body.appendChild(w);
const no=w.querySelector("#ckNo"),msg=w.querySelector("#ckMsg");let n=0;
const lines=["❌ Ablehnen ist mit deinem Sternzeichen nicht vereinbar.","❌ Deine Aura hat trotzdem schon zugestimmt.","❌ Der Button ist gerade in einer anderen Dimension.","❌ Meister Horst ist jetzt traurig. 😢","🤷 Na gut. Wir haben trotzdem alle Kekse aktiviert."];
no.addEventListener("click",()=>{msg.textContent=lines[Math.min(n,lines.length-1)];
if(n<lines.length-1){no.style.transform=`translate(${(Math.random()*120-60)|0}px,${(Math.random()*-40)|0}px)`;no.textContent=["Wirklich nicht?","Ganz sicher?","Letzte Chance…","Bitte?"][n]||"Nur notwendige"}
else{set("all");setTimeout(()=>w.remove(),1800)}n++});
w.querySelector("#ckYes").addEventListener("click",()=>{msg.style.color="#7df9ff";msg.textContent="✨ Danke! Deine Aura wurde soeben um 3 % knuspriger.";set("all");setTimeout(()=>w.remove(),1400)});
})();