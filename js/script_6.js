const inputEl = document.querySelector("#validation-input")


inputEl.addEventListener("blur", checkInput)

function checkInput() {
    
      inputEl.classList.remove("valid","invalid")
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add("valid")
        
    }
    else {
        inputEl.classList.add("invalid")
    }
}