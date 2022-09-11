const inputEl = document.querySelector("#validation-input")


inputEl.addEventListener("blur", checkInput)

function checkInput(params) {
    
    
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add("valid")
        
    }
    else {
        inputEl.classList.add("invalid")
    }
}