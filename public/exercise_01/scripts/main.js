/**
 * Converts celsius to fahrenheit.
 * @param {number} celsius 
 * @returns number
 */
var celsiusToFahrenheit = (celsius) => {
    var fahrenheit;
    fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
};

/**
 * Converts celsius to kelvin.
 * @param {number} celsius 
 * @returns number
 */
var celsiusToKelvin = (celsius) => {
    var kelvin;
    kelvin = celsius + 273.15;
    return kelvin;
};

/**
 * Converts fahrenheit to celsius.
 * @param {number} fahrenheit 
 * @returns number
 */
var fahrenheitToCelsius = (fahrenheit) => {
    var celsius;
    celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};

/**
 * Converts fahrenheit to kelvin.
 * @param {number} fahrenheit 
 * @returns number
 */
var fahrenheitToKelvin = (fahrenheit) => {
    var celsius = fahrenheitToCelsius(fahrenheit);
    var kelvin = celsiusToKelvin(celsius);
    return kelvin;
};

/**
 * Converts kelvin to celsius.
 * @param {number} kelvin 
 * @returns number
 */
var kelvinToCelsius = (kelvin) => {
    var celsius; 
    celsius = kelvin - 273.15;
    return celsius; 
};

/**
 * Converts kelvin to fahrenheit.
 * @param {number} kelvin 
 * @returns number
 */
var kelvinToFahrenheit = (kelvin) => { 
    var celsius = kelvinToCelsius(kelvin);
    var fahrenheit = celsiusToFahrenheit(celsius)
    return fahrenheit;
};

var celsiusInput = document.getElementById("celsius-input");
var celsiusButton = document.getElementById("celsius-button");
var fahrenheitInput = document.getElementById("celsius-to-fahrenheit-result");
var kelvinInput = document.getElementById("celsius-to-kelvin-result");

celsiusButton.onclick = () => {
    var celsius = Number(celsiusInput.value.trim());
    var fahrenheit = celsiusToFahrenheit(celsius);
    var kelvin = celsiusToKelvin(celsius);
    fahrenheitInput.value = fahrenheit;
    kelvinInput.value = kelvin;
};

var fahrenheitInputTwo = document.getElementById("fahrenheit-input");
var fahrenheitButton = document.getElementById("fahrenheit-button");
var celsiusFahrenheitResult = document.getElementById("fahrenheit-to-celsius-result"); 
var kelvinFahrenheitResult = document.getElementById("fahrenheit-to-kelvin-result");

fahrenheitButton.onclick = () => {
    var fahrenheit = fahrenheitInputTwo.value.trim();
    var celsius = fahrenheitToCelsius(fahrenheit);
    var kelvin = fahrenheitToKelvin(fahrenheit);
    celsiusFahrenheitResult.value = celsius;
    kelvinFahrenheitResult.value = kelvin;
}

var kelvinInputTwo = document.getElementById("kelvin-input"); 
var kelvinButton = document.getElementById("kelvin-button"); 
var celsiusKelvinResult = document.getElementById("kelvin-to-celsius-result"); 
var fahrenheitKelvinResult = document.getElementById("kelvin-to-fahrenheit-result");

kelvinButton.onclick = () => { 
    var kelvin = kelvinInputTwo.value.trim();
    var celsius = kelvinToCelsius(kelvin);
    var fahrenheit = kelvinToFahrenheit(kelvin);
    celsiusKelvinResult.value = celsius;
    fahrenheitKelvinResult.value = fahrenheit;
}