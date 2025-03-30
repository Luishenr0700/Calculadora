const buttons = document.querySelectorAll("ul#number-actions-items button");
const numberDisplay = document.querySelector("ul.display-number");
const element_numberDisplay = document.querySelector("ul.display-number li");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const initButton = btn.innerHTML;
    if (+initButton >= 0 || initButton === ".") {
      console.log(initButton);
    } else {
      console.log(`Op: ${initButton}`);
      
    }
  });
});
