const fontControlEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

 

 fontControlEl.addEventListener("input", () =>{textEl.style.fontSize = `${fontControlEl.value}px`})