const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let value = e.target.dataset.num;
    if (screen.value === '' && e.target.dataset.num === '.'){
            screen.value = '0';
    }
    screen.value += value;
  });
});

equal.addEventListener("click", (e) => {
  console.log(screen.value);
  e.preventDefault();
  if (screen.value === "") {
    screen.value = "";
  } else {
    try {
      let result = new Function("return " + screen.value)();
      if (typeof result === "number" && isFinite(result)) {
        screen.value = result;
      } else {
        screen.value = "Syntax Error";
      }
    } catch (error) {
      screen.value = "Invalid Expression";
    }
  }
});

clear.addEventListener("click", (e) => {
  screen.value = "";
});
