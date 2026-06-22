const bride =
document.getElementById("brideNakshatra");

const groom =
document.getElementById("groomNakshatra");

const scoreEl =
document.getElementById("score");

const statusEl =
document.getElementById("status");

const reportEl =
document.getElementById("report");

document
.getElementById("generateBtn")
.addEventListener("click", function(){

if(
!bride.value ||
!groom.value
){
alert("Please select both Nakshatras");
return;
}

let score =
Math.floor(Math.random() * 19) + 18;

let status = "";

if(score >= 30){
status = "Excellent Match";
}
else if(score >= 24){
status = "Very Good Match";
}
else if(score >= 18){
status = "Acceptable Match";
}
else{
status = "Consult Astrologer";
}

scoreEl.innerHTML =
score + " / 36";

statusEl.innerHTML =
status;

reportEl.innerHTML = `
<h3>Detailed Analysis</h3>

<p><strong>Bride Nakshatra:</strong> ${bride.value}</p>

<p><strong>Groom Nakshatra:</strong> ${groom.value}</p>

<p>
Overall compatibility appears
${status.toLowerCase()}.
</p>
`;

document
.getElementById("result")
.scrollIntoView({
behavior:"smooth"
});

});
