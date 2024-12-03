// temperature ranges
const tempValue = document.getElementById('tempValue');
const tempIncrease = document.getElementById('increaseTempControl');
const tempDecrease = document.getElementById('decreaseTempControl');


let currentTemp = 70;

function updateTemperature() {
    tempValue.textContent = `${currentTemp}°F`;

    tempValue.classList.remove('temp-red','temp-orange','temp-yellow','temp-green','temp-teal');

    if (currentTemp >= 80) {
        tempValue.classList.add('temp-red');
    } else if (currentTemp >= 70) {
        tempValue.classList.add('temp-orange');
    } else if (currentTemp >= 60) {
        tempValue.classList.add('temp-yellow');
    } else if (currentTemp >= 50) {
        tempValue.classList.add('temp-green');
    } else if (currentTemp <= 49) {
        tempValue.classList.add('temp-teal');
    }
}

// event listeners for buttons
tempIncrease.addEventListener('click', () => {
    currentTemp += 1;
    updateTemperature();
});

tempDecrease.addEventListener('click', () => {
    currentTemp -= 1;
    updateTemperature();
});

updateTemperature();
