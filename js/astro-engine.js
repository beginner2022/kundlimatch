const rashiMap = [
  "Mesha",
  "Vrishabha",
  "Mithuna",
  "Karka",
  "Simha",
  "Kanya",
  "Tula",
  "Vrischika",
  "Dhanu",
  "Makara",
  "Kumbha",
  "Meena"
];

// simplified moon position approximation (MVP level)
function getRashiFromDOB(dateStr) {

let date = new Date(dateStr);
let day = date.getDate();
let month = date.getMonth() + 1;

let index = (day + month) % 12;

return rashiMap[index];
}

// simple Nakshatra approximation
function getNakshatraFromDOB(dateStr) {

let date = new Date(dateStr);
let day = date.getDate();

const nakshatras = Object.keys(nakshatraIndex);

let index = day % 27;

return nakshatras[index];
}
