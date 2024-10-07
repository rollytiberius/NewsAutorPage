
const checkButton = document.getElementById("check-btn")

checkButton.addEventListener("click", () => {
     const pResult = document.getElementById("result")
    const input = document.getElementById("text-input") 
     const procesedString = input.value.replace(/[^a-zA-Z0-9]+/gi, '');
     const arrString = procesedString.split("")
    const workArr = [...arrString]
     const reversedArr = workArr.reverse()
     const finalString = reversedArr.join("")
     const resultToLower =procesedString.toLowerCase()
     const finalResult = finalString.toLowerCase()
     if (input.value.length < 1) {
      return alert("Please input a value")
     }
     if (resultToLower === finalResult) {
          pResult.innerText = `${input.value} is a palindrome`
          pResult.style.display = "block"
          
          
           
                  
      }else {
        pResult.innerText = `${input.value} is not a palindrome`
        pResult.style.display = "block"
      }
      input.value= ""
    })

// // Sudo code
//  const input = document.getElementById("text-input")
// // // grab the user Input


// // //remove all spaces and caracters regex?
//  const inputValue = input.value


// // // store in a variable the result 
//  const procesedString = input.value.replace(/[^a-zA-Z]+/g, '');
// // // transform in array
//  const arrString = procesedString.split("")

// // // reverse the vorld 
//  const reversedArr = arrString.reverse()


// //  compare if the words ar the same 

// // if the words are the same return the vord is palidrome 

// // if they are not the same return the vorld is not a palidrome 
