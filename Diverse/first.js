const character = "#";
const count = 8;
const rows = [];

function padRow() {

}
const call = padRow();



for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

function addTwoNumbers(a, b) {
    return a + b;
}
sum = addTwoNumbers(5, 10)
console.log(sum);