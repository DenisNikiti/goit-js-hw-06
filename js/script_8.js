const formEl = document.querySelector(".login-form")





formEl.addEventListener("submit", (event) => { 
    event.preventDefault()
    const formdata = new FormData(event.currentTarget)
    
    console.log(formdata)
    

})
