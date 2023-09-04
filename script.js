function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");

    let convertedTemp;

    if (fromUnit === "celsius") {
        // Convert from Celsius to Fahrenheit
        convertedTemp = (inputTemp * 9/5) + 32;
        resultElement.textContent = `${inputTemp} Celsius = ${convertedTemp} Fahrenheit`;
    } else {
        // Convert from Fahrenheit to Celsius
        convertedTemp = (inputTemp - 32) * 5/9;
        resultElement.textContent = `${inputTemp} Fahrenheit = ${convertedTemp} Celsius`;
    }
}
