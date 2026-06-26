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

document.getElementById("generateBtn").addEventListener("click", function(){

  if(!brideDob.value || !groomDob.value){
    alert("Please enter both Bride and Groom details");
    return;
  }

  // Calculations (your existing engine)
  let brideNakshatra = getNakshatra(brideDob.value);
  let groomNakshatra = getNakshatra(groomDob.value);

  let brideRashi = getRashi(brideDob.value);
  let groomRashi = getRashi(groomDob.value);

  let brideLagna = getLagna(brideDob.value);
  let groomLagna = getLagna(groomDob.value);

  let brideManglik = isManglik(brideDob.value);
  let groomManglik = isManglik(groomDob.value);

  let bIndex = nakshatraIndex[brideNakshatra];
  let gIndex = nakshatraIndex[groomNakshatra];

  let koota = calculateKootas(bIndex, gIndex);
  let score = totalScore(koota);
  let status = getStatus(score);

  // UI update
  scoreEl.innerHTML = score + " / 36";
  statusEl.innerHTML = status;

  // Better structured report (IMPORTANT FIX)
  reportEl.innerHTML = `
    <h2>🪐 Kundli Compatibility Report</h2>

    <div style="margin-top:20px">
      <h3>Bride Details</h3>
      <p><b>Nakshatra:</b> ${brideNakshatra}</p>
      <p><b>Rashi:</b> ${brideRashi}</p>
      <p><b>Lagna:</b> ${brideLagna}</p>
      <p><b>Manglik:</b> ${brideManglik ? "Yes ⚠️" : "No ✅"}</p>
    </div>

    <hr/>

    <div>
      <h3>Groom Details</h3>
      <p><b>Nakshatra:</b> ${groomNakshatra}</p>
      <p><b>Rashi:</b> ${groomRashi}</p>
      <p><b>Lagna:</b> ${groomLagna}</p>
      <p><b>Manglik:</b> ${groomManglik ? "Yes ⚠️" : "No ✅"}</p>
    </div>

    <hr/>

    <h3>🔯 8 Koota Analysis</h3>
    <div>
      <p>Varna: ${koota.varna}/1</p>
      <p>Vashya: ${koota.vashya}/2</p>
      <p>Tara: ${koota.tara}/3</p>
      <p>Yoni: ${koota.yoni}/4</p>
      <p>Graha Maitri: ${koota.grahaMaitri}/5</p>
      <p>Gana: ${koota.gana}/6</p>
      <p>Bhakoot: ${koota.bhakoot}/7</p>
      <p>Nadi: ${koota.nadi}/8</p>
    </div>

    <hr/>

    <h2>📊 Final Score: ${score} / 36</h2>
    <h3>💫 Result: ${status}</h3>

    <div style="margin-top:20px;padding:15px;background:#fff7ec;border-radius:12px">
      <h3>💡 Interpretation</h3>
      <p>
        This compatibility score is based on traditional 8 Koota Gun Milan system.
        It evaluates emotional, mental, and marital compatibility.
      </p>
    </div>
  `;

  document.getElementById("result")
  .scrollIntoView({behavior:"smooth"});

});

function shareResult(){

  let score = document.getElementById("score").innerText;
  let status = document.getElementById("status").innerText;

  let text = `🪐 My Kundli Match Result:\n\nScore: ${score}\nStatus: ${status}\n\nCheck yours free:\nhttps://kundlicheck.in`;

  let url = "https://wa.me/?text=" + encodeURIComponent(text);

  window.location.href = url;
}
