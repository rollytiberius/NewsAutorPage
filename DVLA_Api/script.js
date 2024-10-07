
const button = document.getElementById("btnSubmit")

function submitReg() {
    console.log("submit button clicked")
    const url = "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles"
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url)
    xhr.setRequestHeader("x-api-key", "eaVGLOKrHC8sq1HW5Sf9Q3L07wgVaH7K9d9Xjpek")
    xhr.setRequestHeader("Content-Type", "aplication/json")

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
    }
    const reg = document.getElementById("inputRegistration")
    const data = JSON.stringify({"registrationNumber": reg.value})
    xhr.send(data)
}

button.addEventListener("click" ,submitReg)