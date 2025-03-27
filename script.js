const numbers = document.querySelectorAll("ul#number-actions-items .number")
const numberDisplay = document.querySelector("ul.display-number")
const element_numberDisplay = document.querySelector("ul.display-number li")

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const initNumber = number.innerHTML
    if (element_numberDisplay.className == "init") {
      element_numberDisplay.innerHTML = initNumber
    }
    else {
      const newNumber = document.createElement('li')
      newNumber.textContent = initNumber
      numberDisplay.appendChild(newNumber)
    }
    element_numberDisplay.classList.remove("init")
  })
  
});
   