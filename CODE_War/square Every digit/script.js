// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// console.log("is working!!")

// Square Every Digit


let num = 9119
  // we take the number and convert to a string

let strNum = num.toString()

  // we take the string and convert to an array 
  
let array = strNum.split('')

//   froma array of strings we convert to array of numbers

let numberArray = []
array.forEach(item => numberArray.push(+item))

//  then we make a loop and we make the square of all the items on array 

let squareArray = []
numberArray.forEach(item => squareArray.push(item * item))

// we convert back to string and we concatonate 
let answer = squareArray.join('')

// then we convert back to number


function squareDigits(num){
    let strNum = num.toString()
    let array = strNum.split('')
    let numberArray = []
array.forEach(item => numberArray.push(+item))
let squareArray = []
numberArray.forEach(item => squareArray.push(item * item))
let answer = squareArray.join('')

    return parseInt(answer);
  }

console.log(squareDigits(9119))


//Somthin interesting

// Another thing 