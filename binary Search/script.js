// const title = document.getElementById("title")


// title.textContent = "Car Database"


// declaring the array

const arr = [6, 43, 89, 168, 5, 89, 79, 67, 1068, 45, 6]

// copy the array
const soredtArr = [...arr]

// sort the copied array
soredtArr.sort((a, b) => a - b)

// output bouth of arrays
console.log(arr)
console.log(soredtArr)

//  lets do a binary search for 168
const arraySearch = (target , sortArr) => {
let low = 0
let hi = sortArr.length
let mid = 0

// let mid = low + hi / 2

// if (!sortArr % 2 == 0) {
//   mid = Math.floor(mid)
// }

while (low <= hi) {
    mid = Math.floor((low + hi )/ 2)
    if (sortArr[mid] > target) {
        hi = mid - 1
    }else if (sortArr[mid] < target) {
        low = mid + 1
    }else if (sortArr[mid] === target) {
        console.log(`We found  ${target} at index ${mid}`)
        break;
    }
}}

// arraySearch(168, soredtArr)
// arraySearch(6, soredtArr)
// arraySearch(1068, soredtArr)


function createArray(N) {
    return Array.from({length: N}, (_, index) => index + 1);
}

let N = 1685;
let arrayOfNumbers = createArray(N);
console.log(arrayOfNumbers);

// arraySearch(1000, arrayOfNumbers)

const test = [...Array(40000)].map(e=>~~(Math.random()*40000))

sortedTest = [...test]
sortedTest.sort((a, b) => a - b)

console.log(test)
console.log(sortedTest)
arraySearch(235, sortedTest)

var startTime = performance.now()

arraySearch(2357, sortedTest)   // <---- measured code goes between startTime and endTime
    
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)