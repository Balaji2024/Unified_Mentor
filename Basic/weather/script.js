// JavaScript for Weather App
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const searchButton = document.getElementById("search-button");
    const cityInput = document.getElementById("city-input");
    const weatherInfo = document.getElementById("weather-info");
    const errorMessage = document.getElementById("error-message");

    searchButton.addEventListener("click", async () => {
        const cityName = cityInput.value.trim();
        if (!cityName) {
            displayError("Please enter a city name.");
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
            );

            if (!response.ok) {
                throw new Error("City not found.");
            }

            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            displayError(error.message);
        }
    });

    function displayWeather(data) {
        errorMessage.textContent = "";
        weatherInfo.style.display = "block";
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `${data.main.temp}°C`;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }

    function displayError(message) {
        errorMessage.textContent = message;
        weatherInfo.style.display = "none";
    }
});
