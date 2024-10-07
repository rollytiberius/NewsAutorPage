const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
console.log(evenListMedian);
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;


const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
  }



if (sorted.length % 2 === 0) {
    return getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]])
}
