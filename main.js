var equalsBtn = document.querySelector("[data-equals]"),
    delBtn = document.querySelector("[data-delete]"),
    allClearBtn = document.querySelector("[data-all-clear]"),
    operationBtns = document.querySelectorAll("[data-operation]"),
    numBtns = document.querySelectorAll("[data-number]"),
    previousOperandTextElement = document.querySelector(
        "[data-previous-operand]"
    ),
    currentOperandTextElement = document.querySelector(
        "[data-current-operand]"
    );

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

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
    } else if (e.key === "Backspace") {
        calculator.delete();
        calculator.updateDisplay();
    } else if (e.key === "Delete") {
        calculator.clear();
        calculator.updateDisplay();
    } else if (e.key === "=" || e.key === "Enter") {
        e.preventDefault(); //prevent click event when press "Enter"
        calculator.compute();
        calculator.updateDisplay();
    } else if (e.key == "-" || e.key == "/") {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
    } else if (e.shiftKey) {
        if (e.key === "+" || e.key === "*" || e.key === "%") {
            calculator.chooseOperation(e.key);
            calculator.updateDisplay();
        }
    }
});

// Format
var selectionElement = document.querySelector("#theme-options"),
    containerElement = document.querySelector(".container"),
    calculatorElement = document.querySelector(".calculator"),
    buttonElements = document.querySelectorAll("button.item"),
    outputElement = document.querySelector(".output");

function changeOption() {
    if (selectionElement.value == "0") {
        containerElement.classList.remove("blue-bg", "purple-bg");
        containerElement.classList.add("df-bg");

        calculatorElement.classList.remove("blue-cal-bg", "purple-cal-bg");
        calculatorElement.classList.add("df-cal-bg");

        outputElement.classList.remove(
            "blue-output-border",
            "purple-output-border"
        );
        outputElement.classList.add("df-output-border");

        previousOperandTextElement.classList.remove(
            "blue-previous-operand",
            "purple-previous-operand"
        );
        previousOperandTextElement.classList.add("df-previous-operand");

        currentOperandTextElement.classList.remove(
            "blue-current-operand",
            "purple-current-operand"
        );
        currentOperandTextElement.classList.add("df-current-operand");

        buttonElements.forEach((button) => {
            button.classList.remove("blue-item", "purple-item");
            button.classList.add("df-item");
        });
    } else if (selectionElement.value == "1") {
        containerElement.classList.remove("df-bg", "purple-bg");
        containerElement.classList.add("blue-bg");

        calculatorElement.classList.remove("df-cal-bg", "purple-cal-bg");
        calculatorElement.classList.add("blue-cal-bg");

        outputElement.classList.remove(
            "df-output-border",
            "purple-output-border"
        );
        outputElement.classList.add("blue-output-border");

        previousOperandTextElement.classList.remove(
            "df-previous-operand",
            "purple-previous-operand"
        );
        previousOperandTextElement.classList.add("blue-previous-operand");

        currentOperandTextElement.classList.remove(
            "df-current-operand",
            "purple-current-operand"
        );
        currentOperandTextElement.classList.add("blue-current-operand");

        buttonElements.forEach((button) => {
            button.classList.remove("df-item", "purple-item");
            button.classList.add("blue-item");
        });
    } else if (selectionElement.value == "2") {
        containerElement.classList.remove("df-bg", "blue-bg");
        containerElement.classList.add("purple-bg");

        calculatorElement.classList.remove("df-cal-bg", "blue-cal-bg");
        calculatorElement.classList.add("purple-cal-bg");

        outputElement.classList.remove(
            "df-output-border",
            "blue-output-border"
        );
        outputElement.classList.add("purple-output-border");

        previousOperandTextElement.classList.remove(
            "df-previous-operand",
            "blue-previous-operand"
        );
        previousOperandTextElement.classList.add("purple-previous-operand");

        currentOperandTextElement.classList.remove(
            "df-current-operand",
            "blue-current-operand"
        );
        currentOperandTextElement.classList.add("purple-current-operand");

        buttonElements.forEach((button) => {
            button.classList.remove("df-item", "blue-item");
            button.classList.add("purple-item");
        });
    }
}
