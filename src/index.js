document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("cityNameInput");
    const cityDisplay = document.getElementById("headerCityName");
    const resetButton = document.getElementById("cityNameReset");

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
