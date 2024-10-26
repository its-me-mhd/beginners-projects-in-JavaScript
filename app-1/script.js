const screen = document.getElementById("calc-screen");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      currentInput = "";
      screen.value = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      screen.value = currentInput;
    } else if (value === "=") {
      try {
        let result = eval(currentInput);
        if (result === Infinity) throw "Cannot divide by zero";
        screen.value = result;
        currentInput = result.toString();
      } catch (error) {
        screen.value = "Error..";
        currentInput = "";
      }
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});
