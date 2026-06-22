const bride = document.getElementById("brideNakshatra");
const groom = document.getElementById("groomNakshatra");

const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const reportEl = document.getElementById("report");

function getScore(b, g) {

let bIndex = nakshatraIndex[b];
let gIndex = nakshatraIndex[g];

if(!bIndex || !gIndex) return 0;

let diff = Math.abs(bIndex - gIndex);

if(diff === 0) return 32;
if(diff <= 3) return 30;
if(diff <= 6) return 28;
if(diff <= 10) return 26;
if(diff <= 15) return 24;
if(diff <= 20) return 22;
if(diff <= 27) return 18;

return 16;
}

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

let score = getScore(bride.value, groom.value);
let status = getStatus(score);

scoreEl.innerHTML = score + " / 36";
statusEl.innerHTML = status;

reportEl.innerHTML = `
<h3>Detailed Kundli Analysis</h3>

<p><b>Bride:</b> ${bride.value}</p>
<p><b>Groom:</b> ${groom.value}</p>

<p><b>Compatibility Score:</b> ${score}/36</p>

<p><b>Result:</b> ${status}</p>

<p>
This analysis is based on Nakshatra distance logic.
Next update will include:
Gun Milan (8 Koot system), Manglik Dosha, and Rashi matching.
</p>
`;

document.getElementById("result")
.scrollIntoView({behavior:"smooth"});
});
