function pairFactor(a, b){
  return (a * 7 + b * 11) % 12;
}

function calculateKootas(bIndex, gIndex){

  let p = pairFactor(bIndex, gIndex);

  // VARNA - social alignment
  let varna = (p % 4 === 0) ? 1 : 0;

  // VASHYA - attraction/control balance
  let vashya = (p % 5 < 2) ? 2 : 1;

  // TARA - star distance compatibility
  let tara = (Math.abs(bIndex - gIndex) % 9 <= 3) ? 3 : 1;

  // YONI - emotional compatibility
  let yoni = (p % 6 < 3) ? 4 : 2;

  // GRAHA MAITRI - mental compatibility
  let grahaMaitri = (p % 7 < 4) ? 5 : 3;

  // GANA - personality type match
  let gana = (p % 8 < 5) ? 6 : 3;

  // BHAKOOT - life path harmony
  let bhakoot = (p % 10 < 6) ? 7 : 4;

  // NADI - dosha factor (kept strict)
  let nadi = ((bIndex % 3) === (gIndex % 3)) ? 0 : 8;

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

function totalScore(koota){
  return Object.values(koota).reduce((a,b)=>a + b, 0);
}
