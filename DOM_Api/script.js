
// const create = (element, text) => {
//     const el = document.createElement(element)
// el.innerText = text
// document.body.appendChild(el)
// }

const form = document.createElement("form")
document.body.appendChild(form)


const input = document.createElement("input")
input.placeholder = "To Doo"
form.appendChild(input)

const button = document.createElement("button")
button.innerText = "Add"
form.appendChild(button)

const ul = document.createElement("ul")
document.body.appendChild(ul)

const remove = element => element.remove()


form.onsubmit = (event) => {
    event.preventDefault()
    const li = document.createElement("li")
    ul.appendChild(li)
    li.innerText = input.value
    input.value = ""
    li.onclick = remove.bind(null, li)

}

//Styles elements in line 
document.body.style.padding = "16px"
input.style.marginRight = "8px"



//Set atributes
document.body.setAttribute("class", "blue")


// button.addEventListener("click", () => {
//     const div = document.createElement("div")
//     div.innerText = input.value
//     document.body.appendChild(div)
//     input.value = ""
// })







//document.body.children[5].setAttribute("id", "secondBtn")
// const btnList = document.querySelectorAll("button")
// btnList[1].setAttribute("id", "secondBtn")   

// create("p", "Salut")
// create("button", "Second")