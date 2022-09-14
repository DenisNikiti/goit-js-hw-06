const formEl = document.querySelector(".login-form")





formEl.addEventListener("submit", (event) => { 
    event.preventDefault()

    if (formEl[0] || formEl[1] === "" ) {
         return alert("Все поля должны быть заполнены")
     }


    const formdata = new FormData(event.currentTarget)
    
    console.log(formdata)
    

})
