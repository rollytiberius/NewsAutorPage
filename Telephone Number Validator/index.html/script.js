const input = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const resetBtn = document.getElementById("clear-btn")
const resultDiv = document.getElementById("results-div")


const updateResult = (valid) => {
    if (valid) {
        resultDiv.innerText = `Valid US number: ${input.value}`
    }else {
        resultDiv.innerText = `Invalid US number: ${input.value}`
    }
}


checkBtn.addEventListener("click", () => {
    input.value.length === 0 ? alert("Please provide a phone number") : updateResult(/(^[1]?\s?\(?[0-9]{3}\)?[- | \S | \s ][0-9]{3}[- | \S | \s ][0-9]{4})/g.test(input.value))
})

resetBtn.addEventListener("click", () => {
    resultDiv.innerText = ""
})