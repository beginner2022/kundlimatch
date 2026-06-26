// KUNDLICHECK ASTRO ENGINE (STABLE STRUCTURE VERSION)

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

// ================================
// STABLE MOON LONGITUDE MODEL
// ================================
function getMoonLongitude(date) {

  let jd = toJulian(date);
  let T = (jd - 2451545.0) / 36525;

  // simplified but stable lunar model
  let L0 = 218.316 + 13.176396 * (jd - 2451545);

  // normalize 0–360
  let moonLong = ((L0 % 360) + 360) % 360;

  return moonLong;
}

// ================================
// NAKSHATRA (27 divisions)
// ================================
function getNakshatra(date) {

  let moon = getMoonLongitude(date);

  let index = Math.floor(moon / (360 / 27));
  index = index % 27;

  return nakshatras[index];
}

// ================================
// RASHI (12 divisions)
// ================================
function getRashi(date) {

  let moon = getMoonLongitude(date);

  let index = Math.floor(moon / 30);
  index = index % 12;

  return rashis[index];
}

// ================================
// MANGAL DOSHA (HOUSE BASED MODEL)
// ================================
function isManglik(date) {

  let moon = getMoonLongitude(date);

  let house = Math.floor(moon / 30) % 12 + 1;

  // classical Manglik houses
  return [1, 4, 7, 8, 12].includes(house);
}

// ================================
// LAGNA (SIMPLIFIED ASCENDANT MODEL)
// ================================
function getLagna(date) {

  let moon = getMoonLongitude(date);

  let lagna = (moon + 90) % 360;
  lagna = (lagna + 360) % 360;

  let index = Math.floor(lagna / 30);
  index = index % 12;

  return rashis[index];
}
