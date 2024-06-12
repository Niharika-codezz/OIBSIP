let displayValue = "";

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value.toString();
    } else {
        displayValue += value.toString();
    }
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").innerText = displayValue;
    } catch (error) {
        document.getElementById("display").innerText = "Error";
    }
}