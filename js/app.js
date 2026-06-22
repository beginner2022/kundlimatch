const brideDob = document.getElementById("brideDob");
const groomDob = document.getElementById("groomDob");

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

if(!brideDob.value || !groomDob.value){
alert("Enter both DOB");
return;
}

// REAL ASTRO CALCULATION
let brideNakshatra = getRealNakshatra(brideDob.value);
let groomNakshatra = getRealNakshatra(groomDob.value);

let brideRashi = getRealRashi(brideDob.value);
let groomRashi = getRealRashi(groomDob.value);

// INDEX
let bIndex = nakshatraIndex[brideNakshatra];
let gIndex = nakshatraIndex[groomNakshatra];

// Koota calculation
let koota = calculateKootas(bIndex, gIndex);
let score = totalScore(koota);
let status = getStatus(score);

// OUTPUT
scoreEl.innerHTML = score + " / 36";
statusEl.innerHTML = status;

reportEl.innerHTML = `
<h2>🌙 Real Kundli Analysis</h2>

<p><b>Bride Nakshatra:</b> ${brideNakshatra}</p>
<p><b>Groom Nakshatra:</b> ${groomNakshatra}</p>

<p><b>Bride Rashi:</b> ${brideRashi}</p>
<p><b>Groom Rashi:</b> ${groomRashi}</p>

<hr/>

<h3>8 Koota Breakdown</h3>

<ul>
<li>Varna: ${koota.varna}/1</li>
<li>Vashya: ${koota.vashya}/2</li>
<li>Tara: ${koota.tara}/3</li>
<li>Yoni: ${koota.yoni}/4</li>
<li>Graha Maitri: ${koota.grahaMaitri}/5</li>
<li>Gana: ${koota.gana}/6</li>
<li>Bhakoot: ${koota.bhakoot}/7</li>
<li>Nadi: ${koota.nadi}/8</li>
</ul>

<h3>Total Score: ${score}/36</h3>
<h3>Result: ${status}</h3>

<p>
This version uses Moon-position-based Nakshatra calculation.
Next upgrade: Manglik Dosha + Planetary positions + Kundli chart wheel.
</p>
`;

document.getElementById("result")
.scrollIntoView({behavior:"smooth"});
});
