function getAverage(scores) {
    let numBer = 0
    for (let i = 0;i < scores.length; i++) {
        numBer += scores[i];
    }
    return numBer / scores.length;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));