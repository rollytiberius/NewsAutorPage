const title = document.getElementById("title")
const checkBtn = document.getElementById("convert-btn")
const topText = document.getElementById("topinp")
const output = document.getElementById("output")
const outContainer = document.getElementById("output-container")
const input = document.getElementById("number")



checkBtn.innerText = "Convert"
title.innerText = "Roman numeral converter"
topText.innerText = "Enter a number: "


outContainer.classList.toggle("hidden")


checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputValidation(input.value)
    
    
})

const inputValidation = (input) => {
    if (input.length === 0) {
        output.innerText = "Please enter a valid number"
     }else if (parseInt(input) < 0 ) {
        output.innerText = "Please enter a number greater than or equal to 1"
     }else if (parseInt(input) >= 4000 ) {
        output.innerText = "Please enter a number less than or equal to 3999"
     }
     
     else {
         output.innerText = convertArabicToRoman(input)
     input.value = "";
     }
}

const convertArabicToRoman = function (num) {
	const rules = {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"XXX": 30,
		"XX": 20,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	}
	
	let res = "";
	const romans = Object.keys(rules);

	for (let i = 0; i < romans.length; ++i) {
		const val = rules[romans[i]];
		
		while (num >= val) {
			num -= val;
			res += romans[i];
		}
	}
	return res;
};