// wave 2 change temperature
const tempValue = document.getElementById('tempValue');
const tempIncrease = document.getElementById('increaseTempControl');
const tempDecrease = document.getElementById('decreaseTempControl');
const landscape = document.getElementById('landscapeDisplay');

let currentTemp = 70;
let currentLandscape = '';

function updateTemperature() {
    tempValue.textContent = `${currentTemp}°F`;

    tempValue.classList.remove("temp-red", "temp-orange", "temp-yellow", "temp-green", "temp-teal");

    if (currentTemp >= 80) {
        tempValue.classList.add("red");
        currentLandscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemp >= 70) {
        tempValue.classList.add("orange");
        currentLandscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemp >= 60) {
        tempValue.classList.add('yellow');
        currentLandscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (currentTemp >= 50) {
        tempValue.classList.add("green");
        currentLandscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (currentTemp <= 49) {
        tempValue.classList.add("teal");
        currentLandscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    landscape.textContent = currentLandscape;
}

tempIncrease.addEventListener('click', () => {
    currentTemp += 1;
    updateTemperature();
});

tempDecrease.addEventListener("click", () => {
    currentTemp -= 1;
    updateTemperature();
});

// Initialize the temperature and landscape display
updateTemperature();

// wave 3 & 6
document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("cityNameInput");
    const cityDisplay = document.getElementById("headerCityName");
    const resetButton = document.getElementById("cityNameReset");
    const currentTempButton = document.getElementById("currentTempButton");

    cityInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const cityName = cityInput.value;
            cityDisplay.textContent = cityName;
        }
    });

    resetButton.addEventListener("click", () => {
        cityInput.value = "";
        cityDisplay.textContent = "";
    });
});

// Wave 5 
// change sky display when select from dropdown list
const skySelect = document.getElementById('skySelect');
const skyDisplay = document.getElementById('skyDisplay');

const skyOptions = {
    sunny: '☁️ ☁️ ☁️ ☀️ ☁️ ☁️',
    cloudy: '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️',
    rainy: '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧',
    snowy: '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨',
};

function updateSky(sky) {
    const selectedSky = skySelect.value;
    skyDisplay.textContent = skyOptions[selectedSky];
};

skySelect.addEventListener('change', updateSky);

updateSky();