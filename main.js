var equalsBtn = document.querySelector("[data-equals]"),
    delBtn = document.querySelector("[data-delete]"),
    allClearBtn = document.querySelector("[data-all-clear]"),
    operationBtns = document.querySelectorAll("[data-operation]"),
    numBtns = document.querySelectorAll("[data-number]"),
    previousOperandTextElement = document.querySelector("[data-previous-operand]"),
    currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    });
});

operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

delBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});

document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key >= "0" && e.key <= "9") {
        calculator.appendNum(e.key);
        calculator.updateDisplay();
    } else
        switch (e.key) {
            case "Backspace":
                calculator.delete();
                calculator.updateDisplay();
                break;
            case "Delete":
                calculator.clear();
                calculator.updateDisplay();
                break;
            case "=":
            case "Enter":
                e.preventDefault(); //prevent click event when press "Enter"
                calculator.compute();
                calculator.updateDisplay();
                break;
            case "-":
            case "/":
                calculator.chooseOperation(e.key);
                calculator.updateDisplay();
                break;
            case "+":
            case "*":
            case "%":
                if (e.shiftKey) {
                    calculator.chooseOperation(e.key);
                    calculator.updateDisplay();
                }
                break;
        }
});

// Format
var selectionElement = document.querySelector("#theme-options"),
    containerElement = document.querySelector(".container"),
    calculatorElement = document.querySelector(".calculator"),
    buttonElements = document.querySelectorAll("button.item"),
    outputElement = document.querySelector(".output");

function changeOption() {
    var formatBgClasses = { dfBgClass: "df-bg", blueBg: "blue-bg", purpleBg: "purple-bg" },
        formatCalBgClasses = { dfCalBgClass: "df-cal-bg", blueCal: "blue-cal-bg", purpleCal: "purple-cal-bg" },
        formatOutputBorderClasses = {
            dfOutputBorderClass: "df-output-border",
            blueOutputBorder: "blue-output-border",
            purpleOutputBorder: "purple-output-border",
        },
        formatPreviousOperandClasses = {
            dfPreviousOperandClass: "df-previous-operand",
            bluePrevOperand: "blue-previous-operand",
            purplePrevOperand: "purple-previous-operand",
        },
        formatCurrentOperandClasses = {
            dfCurrentOperandClasses: "df-current-operand",
            blueCurrOperand: "blue-current-operand",
            purpleCurrOperand: "purple-current-operand",
        },
        formatButtonClasses = { dfButtonClass: "df-item", blueButton: "blue-item", purpleButton: "purple-item" };

    switch (selectionElement.value) {
        case "0": // Default theme
            var { dfBgClass, ...otherBgClasses } = formatBgClasses;
            for (let i in otherBgClasses) {
                containerElement.classList.remove(otherBgClasses[i]);
            }
            var { dfCalBgClass, ...otherCalBgClasses } = formatCalBgClasses;
            for (let i in otherCalBgClasses) {
                calculatorElement.classList.remove(otherCalBgClasses[i]);
            }
            var { dfOutputBorderClass, ...otherOutputBorderClasses } = formatOutputBorderClasses;
            for (let i in otherOutputBorderClasses) {
                outputElement.classList.remove(otherOutputBorderClasses[i]);
            }
            var { dfPreviousOperandClass, ...otherPreviousOperandClasses } = formatPreviousOperandClasses;
            for (let i in otherPreviousOperandClasses) {
                previousOperandTextElement.classList.remove(otherPreviousOperandClasses[i]);
            }
            var { dfCurrentOperandClasses, ...otherCurrentOperandClasses } = formatCurrentOperandClasses;
            for (let i in otherCurrentOperandClasses) {
                currentOperandTextElement.classList.remove(otherCurrentOperandClasses[i]);
            }
            var { dfButtonClass, ...otherButtonClasses } = formatButtonClasses;
            for (let i in otherButtonClasses) {
                buttonElements.forEach((button) => {
                    button.classList.remove(otherButtonClasses[i]);
                });
            }

            containerElement.classList.add(dfBgClass);
            calculatorElement.classList.add(dfCalBgClass);
            outputElement.classList.add(dfOutputBorderClass);
            previousOperandTextElement.classList.add(dfPreviousOperandClass);
            currentOperandTextElement.classList.add(dfCurrentOperandClasses);
            buttonElements.forEach((button) => {
                button.classList.add(dfButtonClass);
            });
            break;
        case "1": // Blue theme
            var { blueBg, ...otherBgClasses } = formatBgClasses;
            for (let i in otherBgClasses) {
                containerElement.classList.remove(otherBgClasses[i]);
            }
            var { blueCal, ...otherCalBgClasses } = formatCalBgClasses;
            for (let i in otherCalBgClasses) {
                calculatorElement.classList.remove(otherCalBgClasses[i]);
            }
            var { blueOutputBorder, ...otherOutputBorderClasses } = formatOutputBorderClasses;
            for (let i in otherOutputBorderClasses) {
                outputElement.classList.remove(otherOutputBorderClasses[i]);
            }
            var { bluePrevOperand, ...otherPreviousOperandClasses } = formatPreviousOperandClasses;
            for (let i in otherPreviousOperandClasses) {
                previousOperandTextElement.classList.remove(otherPreviousOperandClasses[i]);
            }
            var { blueCurrOperand, ...otherCurrentOperandClasses } = formatCurrentOperandClasses;
            for (let i in otherCurrentOperandClasses) {
                currentOperandTextElement.classList.remove(otherCurrentOperandClasses[i]);
            }
            var { blueButton, ...otherButtonClasses } = formatButtonClasses;
            for (let i in otherButtonClasses) {
                buttonElements.forEach((button) => {
                    button.classList.remove(otherButtonClasses[i]);
                });
            }

            containerElement.classList.add(blueBg);
            calculatorElement.classList.add(blueCal);
            outputElement.classList.add(blueOutputBorder);
            previousOperandTextElement.classList.add(bluePrevOperand);
            currentOperandTextElement.classList.add(blueCurrOperand);
            buttonElements.forEach((button) => {
                button.classList.add(blueButton);
            });
            break;
        case "2": // Purple theme
            var { purpleBg, ...otherBgClasses } = formatBgClasses;
            for (let i in otherBgClasses) {
                containerElement.classList.remove(otherBgClasses[i]);
            }
            var { purpleCal, ...otherCalBgClasses } = formatCalBgClasses;
            for (let i in otherCalBgClasses) {
                calculatorElement.classList.remove(otherCalBgClasses[i]);
            }
            var { purpleOutputBorder, ...otherOutputBorderClasses } = formatOutputBorderClasses;
            for (let i in otherOutputBorderClasses) {
                outputElement.classList.remove(otherOutputBorderClasses[i]);
            }
            var { purplePrevOperand, ...otherPreviousOperandClasses } = formatPreviousOperandClasses;
            for (let i in otherPreviousOperandClasses) {
                previousOperandTextElement.classList.remove(otherPreviousOperandClasses[i]);
            }
            var { purpleCurrOperand, ...otherCurrentOperandClasses } = formatCurrentOperandClasses;
            for (let i in otherCurrentOperandClasses) {
                currentOperandTextElement.classList.remove(otherCurrentOperandClasses[i]);
            }
            var { purpleButton, ...otherButtonClasses } = formatButtonClasses;
            for (let i in otherButtonClasses) {
                buttonElements.forEach((button) => {
                    button.classList.remove(otherButtonClasses[i]);
                });
            }

            containerElement.classList.add(purpleBg);
            calculatorElement.classList.add(purpleCal);
            outputElement.classList.add(purpleOutputBorder);
            previousOperandTextElement.classList.add(purplePrevOperand);
            currentOperandTextElement.classList.add(purpleCurrOperand);
            buttonElements.forEach((button) => {
                button.classList.add(purpleButton);
            });
            break;
    }
}
