// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.



let string = "foobar000"

//we need to remove the numbers from text and convert
// extract number using regex
let numArray = string.match(/\d+$/g).join()
let number
let zeroes
// check If the number has leading zeros
if (/^0+/.test(numArray)) {
    console.log("containing 0000")
    zeroes = numArray.match(/^0+/)
    number = parseInt(numArray) +1
}else {
    console.log("not containing 000")
    number = parseInt(numArray) + 1
}
zeroes = zeroes.join('')
let stringBegining = string.substring(0, string.length - numArray.length)
let numresult = number.toString()

const incrementString = (nr) => {
    const [nrDigits] = /\d*$/.exec(nr);
    const next = '' + (+nrDigits + 1);
    const nextNr = nr.slice(0, nr.length - Math.min(next.length, nrDigits.length)) + next;
    return nextNr;
  };



const incrementString = (string) => {
    if (!/\d+/.test(string)) {
        return string + "1"
    }else {
    let numArray = string.match(/\d+$/g).join()
let number
let zeroes
let numresult
let stringBegining = string.substring(0, string.length - numArray.length)
if (/^0+/.test(numArray)) {
    console.log("containing 0000")
    zeroes = numArray.match(/^0+/)
    number = parseInt(numArray) +1
    numresult = number.toString()
    zeroes = zeroes.join('')
    return stringBegining + zeroes + numresult
}else {
    console.log("not containing 000")
    number = parseInt(numArray) + 1
    numresult = number.toString()
    return stringBegining + numresult
}}}


// add 1 to the  last number number
//numArray2[numArray2.length -1] = numArray2[numArray2.length -1] + 1


//  format the string back

// strip the numbers

//let stringBegining = string.match(/[a-z]+\d+?[a-z]$/ig)


// add back the numbers 




// function incrementString (string) {
//     // take care when the string not contain any numbers
//         if (!/\d+/.test(string)) {
//             return string + "1"
//         }else {
//             let numArray = string.match(/\d+$/g).join().split('')

// let splitArray = [...numArray]
// let numArray2 = []
// numArray.forEach(item => numArray2.push(+item))
// numArray2[numArray2.length -1] = numArray2[numArray2.length -1] + 1
// let numString = numArray2.join('')
// let stringBegining = string.substring(0, string.length - numArray2.length)
// let result = stringBegining + numString
// return result
//         }
//       }

      