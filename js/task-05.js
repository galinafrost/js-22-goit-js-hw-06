const textInput = document.querySelector("#name-input")
const textOutput = document.querySelector("#name-output")

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
      return  textOutput.textContent = `Anonymous`
    }
    textOutput.textContent = event.currentTarget.value 
})