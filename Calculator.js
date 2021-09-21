class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.previousOperand = "";
        this.currentOperand = "0";
        this.operation = "";
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand == "") this.currentOperand = "0";
    }

    appendNum(num) {
        if (num === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + num.toString();
    }

    chooseOperation(operation) {
        console.log(typeof operation);
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;
        const PREV = parseFloat(this.previousOperand),
            CURRENT = parseFloat(this.currentOperand);
        if (isNaN(PREV) || isNaN(CURRENT)) return;
        switch (this.operation) {
            case "+":
                computation = PREV + CURRENT;
                break;
            case "-":
                computation = PREV - CURRENT;
                break;
            case "*":
                computation = PREV * CURRENT;
                break;
            case "/":
                computation = PREV / CURRENT;
                break;
            case "%":
                computation = PREV % CURRENT;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = "";
        this.previousOperand = "";
    }

    formatNum(num) {
        const STR_NUM = num.toString(),
            INT_DIGITS = parseFloat(STR_NUM.split(".")[0]),
            DECIMAL_DIGITS = STR_NUM.split(".")[1];
        let intDisplay;
        if (isNaN(INT_DIGITS)) {
            intDisplay = "";
        } else {
            intDisplay = INT_DIGITS.toLocaleString("en", {
                maximumFractionDigits: 0,
            });
        }
        if (DECIMAL_DIGITS != null) {
            return `${intDisplay}.${DECIMAL_DIGITS}`;
        } else {
            return intDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.formatNum(
            this.currentOperand
        );
        if (this.previousOperandTextElement.innerText == "undefined") {
            this.previousOperandTextElement.innerText = "";
        }
        if (this.previousOperandTextElement != null) {
            this.previousOperandTextElement.innerText = `${this.formatNum(
                this.previousOperand
            )} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
    }
}
