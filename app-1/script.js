const screen = document.getElementById("calc-screen");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      // Clear the screen
      currentInput = "";
      screen.value = "";
    } else if (value === "←") {
      // Backspace: Remove last character
      currentInput = currentInput.slice(0, -1);
      screen.value = currentInput;
    } else if (value === "=") {
      // Evaluate the expression safely
      try {
        let result = Function(`"use strict"; return (${currentInput})`)();
        if (result === Infinity || isNaN(result)) throw "Invalid calculation";
        screen.value = result;
        currentInput = result.toString();
      } catch (error) {
        screen.value = "Error";
        currentInput = "";
      }
    } else {
      // Append the value of the button to the current input
      currentInput += value;
      screen.value = currentInput;
    }
  });
});
