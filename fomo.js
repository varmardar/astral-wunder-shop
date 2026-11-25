(function(){
const names=["Gabi aus Bielefeld","Kevin aus dem Großraumbüro","Meister Horst","Ein Plejadier (3. Ebene)","Sabine, 47, Lichtarbeiterin","Uwe aus Wanne-Eickel","Jemand aus der Zukunft","Ein anonymer Reptiloid","Chantal aus Castrop-Rauxel","Dein Nachbar (ja, genau der)"];
const times=["gerade eben","vor 2 Min.","vor 3 Inkarnationen","morgen","in einem Paralleluniversum","vor 0,3 Sek."];
const msgs=["🔥 {n} Personen sehen sich dieses Produkt gerade astral an!","⚠️ Nur noch {s} Stück auf dieser Zeitlinie!","👁️ {n} Menschen sind gerade erwacht und shoppen!","⏰ Angebot endet, sobald Merkur es merkt!"];
const pick=a=>a[Math.floor(Math.random()*a.length)];
const css=document.createElement("style");
css.textContent=`.fomo{position:fixed;left:20px;bottom:20px;z-index:70;background:#1f0f35;border:1px solid #ffd700;border-radius:14px;padding:.8rem 1rem;display:flex;gap:.8rem;align-items:center;max-width:340px;box-shadow:0 0 30px #9b6dff66;transform:translateX(-130%);transition:.5s;font-size:.85rem;color:#f2e9ff}
.fomo.show{transform:translateX(0)}.fomo img{width:52px;height:52px;border-radius:10px}.fomo small{opacity:.6;display:block}.fomo b{color:#ffd700}
.fomo .x{position:absolute;top:4px;right:8px;cursor:pointer;opacity:.6}
.stock{font-size:.75rem;color:#ff6b6b;font-weight:bold;animation:blink 1.4s infinite}@keyframes blink{50%{opacity:.4}}
.countdown{position:fixed;right:20px;bottom:20px;z-index:70;background:linear-gradient(90deg,#ffd700,#ff5fa2);color:#2a0845;padding:.6rem 1rem;border-radius:30px;font-weight:bold;font-size:.85rem;box-shadow:0 0 25px #ff5fa288}
@media(max-width:640px){.fomo{left:10px;right:10px;bottom:70px;max-width:none}.countdown{right:10px;bottom:10px}}`;
document.head.appendChild(css);
const box=document.createElement("div");box.className="fomo";document.body.appendChild(box);
function showFomo(){if(typeof PRODUCTS==="undefined")return;const p=pick(PRODUCTS);
box.innerHTML=`<span class="x">✕</span><img src="${p.img}" alt=""><div><b>${pick(names)}</b> hat gekauft:<br>${p.name}<small>${pick(times)} · ✔ energetisch verifiziert</small></div>`;
box.querySelector(".x").onclick=()=>box.classList.remove("show");box.classList.add("show");setTimeout(()=>box.classList.remove("show"),5000)}
setTimeout(showFomo,3000);setInterval(showFomo,12000);
function addStock(){document.querySelectorAll(".card .info").forEach(i=>{if(i.querySelector(".stock"))return;const d=document.createElement("div");d.className="stock";d.textContent=pick(msgs).replace("{n}",Math.floor(Math.random()*900+11)).replace("{s}",Math.floor(Math.random()*3+1));const h=i.querySelector("h3");h&&h.after(d)})}
const g=document.getElementById("grid");if(g){addStock();new MutationObserver(addStock).observe(g,{childList:true})}
const cd=document.createElement("div");cd.className="countdown";document.body.appendChild(cd);let t=333;
setInterval(()=>{t--;if(t<0)t=333;const m=String(Math.floor(t/60)).padStart(2,"0"),s=String(t%60).padStart(2,"0");cd.textContent=`⏳ Kosmischer Rabatt endet in ${m}:${s} (und dann wieder von vorn)`},1000);
document.addEventListener("mouseout",e=>{if(!e.relatedTarget&&e.clientY<5&&!window._exitShown){window._exitShown=true;alert("🔮 WARTE! Deine Aura hat gerade gesagt, dass du noch nicht gehen willst. Hier ist ein Gutscheincode: WAHRHEIT33 (funktioniert nicht).")}});
})();