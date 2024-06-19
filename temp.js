function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    if (inputUnit === outputUnit) {
        outputValue = inputValue;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            outputValue = (inputValue * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
            outputValue = inputValue + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            outputValue = (inputValue - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
            outputValue = (inputValue - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            outputValue = inputValue - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            outputValue = (inputValue - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('outputValue').textContent = outputValue.toFixed(2) + ' ' + outputUnit;
}
