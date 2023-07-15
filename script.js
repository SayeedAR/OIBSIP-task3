const temperatureInput = document.getElementById("temperature-input");
const convertFromSelect = document.getElementById("convert-from");
const convertToSelect = document.getElementById("convert-to");
const convertButton = document.getElementById("convert-button");
const convertedTemperature = document.getElementById("converted-temperature");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const convertFromUnit = convertFromSelect.value;
  const convertToUnit = convertToSelect.value;
  let convertedValue;

  if (isNaN(temperature)) {
    convertedTemperature.innerText = "Invalid input. Please enter a valid number.";
    return;
  }

  if (convertFromUnit === "celsius" && convertToUnit === "fahrenheit") {
    convertedValue = convertToFahrenheit(temperature);
    convertedTemperature.innerText = `${convertedValue} °F`;
  } else if (convertFromUnit === "celsius" && convertToUnit === "kelvin") {
    convertedValue = convertToKelvin(temperature);
    convertedTemperature.innerText = `${convertedValue} K`;
  } else if (convertFromUnit === "fahrenheit" && convertToUnit === "celsius") {
    convertedValue = convertToCelsius(temperature);
    convertedTemperature.innerText = `${convertedValue} °C`;
  } else if (convertFromUnit === "fahrenheit" && convertToUnit === "kelvin") {
    convertedValue = convertToKelvin(convertToCelsius(temperature));
    convertedTemperature.innerText = `${convertedValue} K`;
  } else if (convertFromUnit === "kelvin" && convertToUnit === "celsius") {
    convertedValue = convertToCelsius(temperature);
    convertedTemperature.innerText = `${convertedValue} °C`;
  } else if (convertFromUnit === "kelvin" && convertToUnit === "fahrenheit") {
    convertedValue = convertToFahrenheit(convertToCelsius(temperature));
    convertedTemperature.innerText = `${convertedValue} °F`;
  } else {
    convertedTemperature.innerText = "Same unit conversion is not supported.";
  }
}

function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
    }
