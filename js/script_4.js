const counterEl = document.querySelectorAll("#counter button")
const counterValue = document.querySelector("#value")


counterEl[0].addEventListener("click", () => { counterValue.textContent -= 1 })

counterEl[1].addEventListener("click", () => {counterValue.textContent = counterValue.textContent + 1} )

