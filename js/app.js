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

// STEP 1: derive astrology data
let brideRashi = getRashiFromDOB(brideDob.value);
let groomRashi = getRashiFromDOB(groomDob.value);

let brideNakshatra = getNakshatraFromDOB(brideDob.value);
let groomNakshatra = getNakshatraFromDOB(groomDob.value);

// STEP 2: convert to indexes
let bIndex = nakshatraIndex[brideNakshatra];
let gIndex = nakshatraIndex[groomNakshatra];

// STEP 3: koota calculation
let koota = calculateKootas(bIndex, gIndex);
let score = totalScore(koota);
let status = getStatus(score);

// OUTPUT
scoreEl.innerHTML = score + " / 36";
statusEl.innerHTML = status;

reportEl.innerHTML = `
<h3>Birth Based Kundli Analysis</h3>

<p><b>Bride Rashi:</b> ${brideRashi}</p>
<p><b>Groom Rashi:</b> ${groomRashi}</p>

<p><b>Bride Nakshatra:</b> ${brideNakshatra}</p>
<p><b>Groom Nakshatra:</b> ${groomNakshatra}</p>

<h4>8 Koota Breakdown</h4>

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

<p><b>Total Score:</b> ${score}/36</p>
<p><b>Result:</b> ${status}</p>

<p>
Generated using DOB-based Kundli engine (MVP version).
Next upgrade will include real planetary calculations using ephemeris data.
</p>
`;

document.getElementById("result")
.scrollIntoView({behavior:"smooth"});
});
