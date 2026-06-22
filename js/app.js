const bride = document.getElementById("brideNakshatra");
const groom = document.getElementById("groomNakshatra");

const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const reportEl = document.getElementById("report");

function getStatus(score){
if(score >= 30) return "Excellent Match";
if(score >= 26) return "Very Good Match";
if(score >= 22) return "Good Match";
if(score >= 18) return "Average Match";
return "Not Recommended";
}

document.getElementById("generateBtn")
.addEventListener("click", function(){

if(!bride.value || !groom.value){
alert("Select both Nakshatras");
return;
}

let bIndex = nakshatraIndex[bride.value];
let gIndex = nakshatraIndex[groom.value];

let koota = calculateKootas(bIndex, gIndex);
let score = totalScore(koota);
let status = getStatus(score);

scoreEl.innerHTML = score + " / 36";
statusEl.innerHTML = status;

reportEl.innerHTML = `
<h3>8 Koota Analysis</h3>

<ul>
<li>Varna: ${koota.varna} / 1</li>
<li>Vashya: ${koota.vashya} / 2</li>
<li>Tara: ${koota.tara} / 3</li>
<li>Yoni: ${koota.yoni} / 4</li>
<li>Graha Maitri: ${koota.grahaMaitri} / 5</li>
<li>Gana: ${koota.gana} / 6</li>
<li>Bhakoot: ${koota.bhakoot} / 7</li>
<li>Nadi: ${koota.nadi} / 8</li>
</ul>

<p><b>Total Score:</b> ${score} / 36</p>
<p><b>Result:</b> ${status}</p>

<p>
This is a simplified Vedic Gun Milan system.
Next upgrade: real Rashi + Manglik + DOB-based Kundli generation.
</p>
`;

document.getElementById("result")
.scrollIntoView({behavior:"smooth"});
});
