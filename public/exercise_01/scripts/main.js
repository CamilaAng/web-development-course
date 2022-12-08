var celsiusInput = document.getElementById("celsius-input");
var celsiusButton = document.getElementById("celsius-button");
var fahrenheitInput = document.getElementById("celsius-to-fahrenheit-result");
var kelvinInput = document.getElementById("celsius-to-kelvin-result");

var celsiusToFahrenheit = (celsius) => {
    var fahrenheit;
    fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
};

var celsiusToKelvin = (celsius) => {
    var kelvin;
    kelvin = celsius + 273.15;
    return kelvin;
};

celsiusButton.onclick = () => {
    var celsius = celsiusInput.value.trim();
    var fahrenheit = celsiusToFahrenheit(celsius);
    var kelvin = celsiusToKelvin(celsius);
    fahrenheitInput.value = fahrenheit;
    kelvinInput.value = kelvin;
};