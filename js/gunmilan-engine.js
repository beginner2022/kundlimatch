const kootaWeights = {
  varna: 1,
  vashya: 2,
  tara: 3,
  yoni: 4,
  grahaMaitri: 5,
  gana: 6,
  bhakoot: 7,
  nadi: 8
};

// simplified mapping (we will refine later)
function calculateKootas(bIndex, gIndex) {

let diff = Math.abs(bIndex - gIndex);

// VARNA (1)
let varna = diff % 4 === 0 ? 1 : 0;

// VASHYA (2)
let vashya = diff % 3 === 0 ? 2 : 1;

// TARA (3)
let tara = diff % 9 <= 4 ? 3 : 1;

// YONI (4)
let yoni = diff % 2 === 0 ? 4 : 2;

// GRAHA MAITRI (5)
let grahaMaitri = diff % 5 === 0 ? 5 : 3;

// GANA (6)
let gana = diff % 3 === 0 ? 6 : 3;

// BHAKOOT (7)
let bhakoot = diff % 7 === 0 ? 7 : 4;

// NADI (8) IMPORTANT DOSHA
let nadi = diff % 8 === 0 ? 0 : 8;

return {
  varna,
  vashya,
  tara,
  yoni,
  grahaMaitri,
  gana,
  bhakoot,
  nadi
};
}

function totalScore(koota) {
return Object.values(koota).reduce((a,b)=>a+b,0);
}
