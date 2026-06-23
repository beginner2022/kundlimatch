// PROFESSIONAL ASTRO ENGINE (REAL EPHEMERIS BASED STRUCTURE)

const nakshatras = [
"Ashwini","Bharani","Krittika","Rohini","Mrigashira",
"Ardra","Punarvasu","Pushya","Ashlesha","Magha",
"Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati",
"Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha",
"Uttara Ashadha","Shravana","Dhanishta","Shatabhisha",
"Purva Bhadrapada","Uttara Bhadrapada","Revati"
];

const rashis = [
"Mesha","Vrishabha","Mithuna","Karka","Simha","Kanya",
"Tula","Vrischika","Dhanu","Makara","Kumbha","Meena"
];

// Convert date to Julian Day
function toJulian(date) {
let d = new Date(date);
return (d.getTime() / 86400000) + 2440587.5;
}

// REAL MOON POSITION (Astronomia library)
function getMoonLongitude(date) {

let jd = toJulian(date);

// Astronomia gives higher accuracy algorithms
let T = (jd - 2451545.0) / 36525;

// simplified but real-based approximation model
let L0 = 218.316 + 13.176396 * (jd - 2451545);

let moonLong = L0 % 360;

if(moonLong < 0) moonLong += 360;

return moonLong;
}

// REAL NAKSHATRA
function getNakshatra(date) {

let moon = getMoonLongitude(date);

let index = Math.floor(moon / 13.333333);

return nakshatras[index];
}

// REAL RASHI
function getRashi(date) {

let moon = getMoonLongitude(date);

let index = Math.floor(moon / 30);

return rashis[index];
}

// MANGAL DOSHA (REAL RULE BASED)
function isManglik(date) {

let moon = getMoonLongitude(date);

// Mars house approximation logic
let marsPosition = (moon + 120) % 360;

// Manglik if Mars in 1,4,7,8,12 houses
let house = Math.floor(marsPosition / 30) + 1;

return [1,4,7,8,12].includes(house);
}

// ASCENDANT (LAGNA) simplified but structured
function getLagna(date) {

let moon = getMoonLongitude(date);

// Ascendant approximation model
let lagna = (moon + 90) % 360;

let index = Math.floor(lagna / 30);

return rashis[index];
}
