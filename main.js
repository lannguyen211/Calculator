import Calculator from "./Calculator";

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
            dfPrevOperandClass: "df-previous-operand",
            bluePrevOperand: "blue-previous-operand",
            purplePrevOperand: "purple-previous-operand",
        },
        formatCurrentOperandClasses = {
            dfCurrOperandClass: "df-current-operand",
            blueCurrOperand: "blue-current-operand",
            purpleCurrOperand: "purple-current-operand",
        },
        formatButtonClasses = { dfButtonClass: "df-item", blueButton: "blue-item", purpleButton: "purple-item" };

    switch (selectionElement.value) {
        case "0": // Default theme
            var { dfBgClass, ...otherBgClasses } = formatBgClasses;
            var { dfCalBgClass, ...otherCalBgClasses } = formatCalBgClasses;
            var { dfOutputBorderClass, ...otherOutputBorderClasses } = formatOutputBorderClasses;
            var { dfPrevOperandClass, ...otherPreviousOperandClasses } = formatPreviousOperandClasses;
            var { dfCurrOperandClass, ...otherCurrentOperandClasses } = formatCurrentOperandClasses;
            var { dfButtonClass, ...otherButtonClasses } = formatButtonClasses;
            handleAddThemeClasses`${dfBgClass}${dfCalBgClass}${dfOutputBorderClass}${dfPrevOperandClass}
            ${dfCurrOperandClass}${dfButtonClass}${otherBgClasses}${otherCalBgClasses}
            ${otherOutputBorderClasses}${otherPreviousOperandClasses}${otherCurrentOperandClasses}
            ${otherButtonClasses}`;
            break;
        case "1": // Blue theme
            var { blueBg, ...otherBgClasses } = formatBgClasses;
            var { blueCal, ...otherCalBgClasses } = formatCalBgClasses;
            var { blueOutputBorder, ...otherOutputBorderClasses } = formatOutputBorderClasses;
            var { bluePrevOperand, ...otherPreviousOperandClasses } = formatPreviousOperandClasses;
            var { blueCurrOperand, ...otherCurrentOperandClasses } = formatCurrentOperandClasses;
            var { blueButton, ...otherButtonClasses } = formatButtonClasses;
            handleAddThemeClasses`${blueBg}${blueCal}${blueOutputBorder}${bluePrevOperand}
            ${blueCurrOperand}${blueButton}${otherBgClasses}${otherCalBgClasses}
            ${otherOutputBorderClasses}${otherPreviousOperandClasses}${otherCurrentOperandClasses}
            ${otherButtonClasses}`;
            break;
        case "2": // Purple theme
            var { purpleBg, ...otherBgClasses } = formatBgClasses;
            var { purpleCal, ...otherCalBgClasses } = formatCalBgClasses;
            var { purpleOutputBorder, ...otherOutputBorderClasses } = formatOutputBorderClasses;
            var { purplePrevOperand, ...otherPreviousOperandClasses } = formatPreviousOperandClasses;
            var { purpleCurrOperand, ...otherCurrentOperandClasses } = formatCurrentOperandClasses;
            var { purpleButton, ...otherButtonClasses } = formatButtonClasses;
            handleAddThemeClasses`${purpleBg}${purpleCal}${purpleOutputBorder}${purplePrevOperand}
            ${purpleCurrOperand}${purpleButton}${otherBgClasses}${otherCalBgClasses}
            ${otherOutputBorderClasses}${otherPreviousOperandClasses}${otherCurrentOperandClasses}
            ${otherButtonClasses}`;
            break;
    }
}

function handleAddThemeClasses(...classes) {
    for (var i in classes[7]) {
        if (!containerElement.classList.contains(classes[7][i])) continue;
        else containerElement.classList.remove(classes[7][i]);
    }
    for (var i in classes[8]) {
        if (!calculatorElement.classList.contains(classes[8][i])) continue;
        else calculatorElement.classList.remove(classes[8][i]);
    }
    for (var i in classes[9]) {
        if (!outputElement.classList.contains(classes[9][i])) continue;
        else outputElement.classList.remove(classes[9][i]);
    }
    for (var i in classes[10]) {
        if (!previousOperandTextElement.classList.contains(classes[10][i])) continue;
        else previousOperandTextElement.classList.remove(classes[10][i]);
    }
    for (var i in classes[11]) {
        if (!currentOperandTextElement.classList.contains(classes[11][i])) continue;
        else currentOperandTextElement.classList.remove(classes[11][i]);
    }
    for (var i in classes[12]) {
        buttonElements.forEach((button) => {
            if (!button.classList.contains(classes[12][i])) return;
            else button.classList.remove(classes[12][i]);
        });
    }

    containerElement.classList.add(classes[1]);
    calculatorElement.classList.add(classes[2]);
    outputElement.classList.add(classes[3]);
    previousOperandTextElement.classList.add(classes[4]);
    currentOperandTextElement.classList.add(classes[5]);
    buttonElements.forEach((button) => {
        button.classList.add(classes[6]);
    });
}
