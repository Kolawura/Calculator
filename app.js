const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");
const del = document.querySelector(".delete");
const answer = document.querySelector(".answer");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let value = e.target.dataset.num;
    if (screen.value === "" && e.target.dataset.num === ".") {
      screen.value = "0";
    }
    screen.value += value;
  });
});
let result;

equal.addEventListener("click", (e) => {
  e.preventDefault();
  if (screen.value === "") {
    screen.value = "";
  } else {
    try {
      result = new Function("return " + screen.value)();
      if (typeof result === "number" && isFinite(result)) {
        localStorage.setItem("ansResult", JSON.stringify(result));
        screen.value = result;
      } else {
        screen.value = "Syntax Error";
      }
    } catch (error) {
      screen.value = "Invalid Expression";
    }
  }
});
answer.addEventListener("click", () => {
  let ansResult = JSON.parse(localStorage.getItem("ansResult"));
  if (typeof ansResult === "number" && isFinite(ansResult)) {
    screen.value += ansResult;
  }
});

del.addEventListener("click", () => {
  let x = screen.value.length - 1;
  let newValue = screen.value.slice(0, x);
  screen.value = newValue;
});

clear.addEventListener("click", () => {
  screen.value = "";
});
