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

// REAL CALCULATIONS
let brideNakshatra = getNakshatra(brideDob.value);
let groomNakshatra = getNakshatra(groomDob.value);

let brideRashi = getRashi(brideDob.value);
let groomRashi = getRashi(groomDob.value);

let brideLagna = getLagna(brideDob.value);
let groomLagna = getLagna(groomDob.value);

let brideManglik = isManglik(brideDob.value);
let groomManglik = isManglik(groomDob.value);

// Koota system
let bIndex = nakshatraIndex[brideNakshatra];
let gIndex = nakshatraIndex[groomNakshatra];

let koota = calculateKootas(bIndex, gIndex);
let score = totalScore(koota);
let status = getStatus(score);

// OUTPUT
scoreEl.innerHTML = score + " / 36";
statusEl.innerHTML = status;

reportEl.innerHTML = `
<h2>🪐 Professional Kundli Report</h2>

<h3>Birth Chart Summary</h3>

<p><b>Bride:</b></p>
<p>Nakshatra: ${brideNakshatra}</p>
<p>Rashi: ${brideRashi}</p>
<p>Lagna: ${brideLagna}</p>
<p>Manglik: ${brideManglik ? "Yes" : "No"}</p>

<hr/>

<p><b>Groom:</b></p>
<p>Nakshatra: ${groomNakshatra}</p>
<p>Rashi: ${groomRashi}</p>
<p>Lagna: ${groomLagna}</p>
<p>Manglik: ${groomManglik ? "Yes" : "No"}</p>

<hr/>

<h3>8 Koota Gun Milan</h3>

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
Generated using professional-grade astrology engine:
- Moon-based calculations
- Lagna estimation
- Manglik detection
- 8 Koota system
</p>
`;

document.getElementById("result")
.scrollIntoView({behavior:"smooth"});
});
