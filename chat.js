(function(){
const css=document.createElement("style");
css.textContent=`.sc-btn{position:fixed;right:20px;bottom:80px;z-index:75;width:62px;height:62px;border-radius:50%;border:0;cursor:pointer;font-size:1.8rem;background:radial-gradient(circle at 35% 30%,#fff,#9b6dff 45%,#2a0845);box-shadow:0 0 25px #9b6dff;animation:scp 2s infinite}
@keyframes scp{50%{box-shadow:0 0 45px #ff5fa2}}
.sc-win{position:fixed;right:20px;bottom:155px;z-index:76;width:340px;max-width:calc(100vw - 40px);height:440px;max-height:calc(100vh - 180px);background:#1f0f35;border:1px solid #ffd700;border-radius:18px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 0 40px #9b6dff88;font-family:Georgia,serif;color:#f2e9ff}
.sc-win.open{display:flex}
.sc-head{background:linear-gradient(90deg,#ffd700,#ff5fa2);color:#2a0845;padding:.7rem 1rem;display:flex;align-items:center;gap:.6rem;font-weight:bold}
.sc-head small{display:block;font-weight:normal;font-size:.75rem}.sc-head .x{margin-left:auto;cursor:pointer;font-size:1.1rem}
.sc-body{flex:1;overflow-y:auto;padding:.8rem;display:flex;flex-direction:column;gap:.5rem}
.sc-m{max-width:85%;padding:.55rem .8rem;border-radius:14px;font-size:.88rem;line-height:1.4}
.sc-bot{background:#12061f;border:1px solid #ffffff22;align-self:flex-start}.sc-me{background:#9b6dff;color:#fff;align-self:flex-end}
.sc-typing{opacity:.6;font-style:italic;font-size:.8rem}
.sc-in{display:flex;border-top:1px solid #ffffff22}.sc-in input{flex:1;padding:.75rem;border:0;background:#12061f;color:#f2e9ff;font-family:inherit;font-size:.9rem;outline:none}
.sc-in button{border:0;background:#ffd700;color:#2a0845;padding:0 1rem;cursor:pointer;font-weight:bold}
@media(max-width:640px){.sc-btn{bottom:60px;right:10px}.sc-win{right:10px;bottom:130px}}`;
document.head.appendChild(css);
const b=document.createElement("button");b.className="sc-btn";b.title="Schamanen-Support";b.textContent="🧙";
const w=document.createElement("div");w.className="sc-win";
w.innerHTML=`<div class="sc-head">🧙 <div>Schamane Rüdiger<small>🟢 online (astral) · antwortet in 1–3 Inkarnationen</small></div><span class="x">✕</span></div><div class="sc-body"></div><form class="sc-in"><input placeholder="Schreib deine Frage…" maxlength="200"><button>✨</button></form>`;
document.body.append(b,w);
const body=w.querySelector(".sc-body"),form=w.querySelector("form"),inp=w.querySelector("input");
function add(t,me){const d=document.createElement("div");d.className="sc-m "+(me?"sc-me":"sc-bot");d.textContent=t;body.appendChild(d);body.scrollTop=body.scrollHeight;return d}
const rules=[
[/(hallo|hi|hey|moin|servus|guten)/i,["Namasté, suchende Seele. 🙏 Ich habe dich schon erwartet. Eigentlich seit 1987."]],
[/(bestell|liefer|paket|sendung|versand)/i,["Dein Paket befindet sich gerade zwischen zwei Dimensionen. Ich sehe einen Lieferwagen… und einen Delfin. Mehr kann ich nicht sagen.","Laut Sendungsverfolgung wurde dein Paket bei deinem Schutzengel hinterlegt. Hast du schon bei ihm geklingelt?"]],
[/(geld|zurück|erstatt|storn|widerruf|reklam)/i,["Eine Rückerstattung ist möglich, aber nur in Karma-Punkten. Dein aktueller Kontostand: −12. 😬","Ich habe deinen Wunsch an das Universum weitergeleitet. Das Universum hat gelacht."]],
[/(kasse|bezahl|zahlung|fehler|geht nicht|funktion|kaputt)/i,["Hast du schon versucht, deinen Router dreimal im Uhrzeigersinn zu drehen?","Der Fehler liegt nicht bei uns. Ich habe gerade deine Aura gescannt: Sie ist leicht beige. Das erklärt alles."]],
[/(aluhut|5g|strahl)/i,["Psst. Schreib nicht so laut über 5G, SIE lesen mit. Setz am besten sofort einen Aluhut auf. Wir haben zufällig welche im Angebot."]],
[/(echs|reptil)/i,["🦎 …","Ich kann zu diesem Thema nichts sagen. Mein Vorgesetzter hat sehr kalte Hände."]],
[/(mensch|echt|bot|ki|real)/i,["Ich bin ein echter Schamane, kein Bot. Beweis: Ich habe gerade an Kristalle gedacht. Ein Bot könnte das nicht. Bip."]],
[/(horst)/i,["Meister Horst ist gerade nicht erreichbar. Er meditiert, oder er ist beim Minigolf. Bei Gewitter eher Minigolf."]],
[/(satire|witz|fake|scam|betrug)/i,["Ganz ehrlich, unter uns: Ja, das hier ist Satire. Nichts davon ist echt. Aber erzähl's nicht Meister Horst. 🤫"]],
[/(danke|super|toll|cool)/i,["Gern geschehen! Deine Schwingung ist soeben um 3 Hertz gestiegen. Das macht dann 9,99 €."]],
[/(tschüss|bye|ciao)/i,["Möge dein Chakra stets geladen sein. 🌈 Und vergiss nicht, uns 5 Sterne zu geben (gerne auch 7)."]]];
const generic=["Interessante Frage. Ich befrage kurz die Kristalle… 💎 Sie sagen: „Vielleicht.“","Hmm, die Verbindung zum Kosmos ist gerade schlecht. Merkur ist rückläufig.","Das Universum hat deine Nachricht gelesen und dich auf ‚Gesehen‘ gelassen.","Dazu empfehle ich unser Mondwasser. Ich empfehle eigentlich zu allem Mondwasser.","Ich verstehe deine Frage auf einer tieferen Ebene. Auf der normalen Ebene leider nicht.","Bitte formuliere deine Frage noch einmal, aber diesmal mit mehr positiven Schwingungen.","Laut deinem Sternzeichen hättest du diese Frage gar nicht stellen sollen. 🔮"];
const pick=a=>a[Math.floor(Math.random()*a.length)];
function reply(t){for(const[r,a]of rules)if(r.test(t))return pick(a);return pick(generic)}
let greeted=false,busy=false;
b.onclick=()=>{w.classList.toggle("open");if(!greeted){greeted=true;setTimeout(()=>add("🔮 Willkommen beim Schamanen-Support! Ich bin Rüdiger. Ich spüre, dass du eine Frage hast. Ich spüre aber nicht, welche. Schreib sie mir."),400)}inp.focus()};
w.querySelector(".x").onclick=()=>w.classList.remove("open");
form.onsubmit=e=>{e.preventDefault();const t=inp.value.trim();if(!t||busy)return;add(t,true);inp.value="";busy=true;
const ty=add("Rüdiger channelt gerade eine Antwort…");ty.classList.add("sc-typing");
setTimeout(()=>{ty.remove();add(reply(t));busy=false},1200+Math.random()*1300)};
})();