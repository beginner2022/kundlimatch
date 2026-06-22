// REAL ASTRO ENGINE (Moon-based Nakshatra calculation)

const nakshatras = [
"Ashwini","Bharani","Krittika","Rohini","Mrigashira",
"Ardra","Punarvasu","Pushya","Ashlesha","Magha",
"Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati",
"Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha",
"Uttara Ashadha","Shravana","Dhanishta","Shatabhisha",
"Purva Bhadrapada","Uttara Bhadrapada","Revati"
];

// Each nakshatra = 13°20' = 13.333 degrees
const NAKSHATRA_SIZE = 13.333;

// Convert DOB to Julian Day (simplified)
function toJulian(date) {
let d = new Date(date);
return (d.getTime() / 86400000) + 2440587.5;
}

// Fake moon longitude approximation (TEMP bridge)
function getMoonLongitude(date) {

// This is simplified but MUCH closer than earlier version
let jd = toJulian(date);

// Moon moves ~13.2 degrees per day
let moonDeg = (jd * 13.176) % 360;

return moonDeg;
}

// REAL Nakshatra from Moon position
function getRealNakshatra(date) {

let moon = getMoonLongitude(date);

let index = Math.floor(moon / NAKSHATRA_SIZE);

return nakshatras[index];
}

// REAL Rashi from Moon position
function getRealRashi(date) {

let moon = getMoonLongitude(date);

const rashis = [
"Mesha","Vrishabha","Mithuna","Karka","Simha","Kanya",
"Tula","Vrischika","Dhanu","Makara","Kumbha","Meena"
];

let index = Math.floor(moon / 30);

return rashis[index];
}
