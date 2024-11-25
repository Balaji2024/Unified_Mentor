// Calculator Logic
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");
    let currentInput = "";
    let operatorClicked = false;

    // Button Click Handling
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "clear") {
                // Clear the display
                currentInput = "";
                display.value = "";
            } else if (value === "=") {
                // Evaluate the expression
                try {
                    const result = eval(currentInput);
                    display.value = result;
                    currentInput = result.toString();
                } catch (error) {
                    display.value = "Error";
                    currentInput = "";
                }
            } else {
                // Append input
                if (["+", "-", "*", "/"].includes(value)) {
                    if (operatorClicked) {
                        return; // Avoid consecutive operators
                    }
                    operatorClicked = true;
                } else {
                    operatorClicked = false;
                }

                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
