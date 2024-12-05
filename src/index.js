// temperature ranges
const tempValue = document.getElementById("tempValue");
const tempIncrease = document.getElementById("increaseTempControl");
const tempDecrease = document.getElementById("decreaseTempControl");
const landscape = document.getElementById("landscapeDisplay");

let currentTemp = 70;
let currentLandscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";

function updateTemperature() {
    tempValue.textContent = `${currentTemp}°F`;
    landscape.textContent = `${currentLandscape}`;

    tempValue.classList.remove("temp-red", "temp-orange", "temp-yellow", "temp-green", "temp-teal");

    if (currentTemp >= 80) {
        tempValue.classList.add("red");
        currentLandscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemp >= 70) {
        tempValue.classList.add("orange");
        currentLandscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemp >= 60) {
        tempValue.classList.add("yellow");
        currentLandscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (currentTemp >= 50) {
        tempValue.classList.add("green");
        currentLandscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (currentTemp <= 49) {
        tempValue.classList.add("teal");
        currentLandscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

// Event listeners for buttons
tempIncrease.addEventListener("click", () => {
    currentTemp += 1;
    updateTemperature();
});

tempDecrease.addEventListener("click", () => {
    currentTemp -= 1;
    updateTemperature();
});

updateTemperature();

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

    currentTempButton.addEventListener("click", () => {
        const cityName = cityDisplay.textContent.trim();
        if (!cityName) {
            alert("Please set a city name before fetching the temperature.");
            return;
        }

        axios
            .get(`http://localhost:5000/location`, {
                params: { q: cityName },
            })
            .then((locationResponse) => {

                const firstLocation = locationResponse.data[0];
                const { lat, lon } = firstLocation;

                return axios.get(`http://localhost:5000/weather`, {
                    params: { lat, lon },
                });
            })
            .then((weatherResponse) => {
                const temperature = weatherResponse.data.main.temp;
                currentTemp = Math.round((temperature - 273.15) * 9/5 + 32); // Convert from Kelvin to Fahrenheit
                updateTemperature(); 
            })

            .catch((error) => {
                console.error("Error fetching weather data:", error);
                alert("Could not fetch weather data. Please try again.");
            });
    });
});
