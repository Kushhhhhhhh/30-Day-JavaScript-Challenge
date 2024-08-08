const apiKey = "347f69513d1d26ebe230bb49089a2287";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
            document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
            document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

            if(data.weather[0].main === "Clouds") {
                weatherIcon.src = "assets/clouds.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "assets/clear.png";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "assets/rain.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "assets/drizzle.png";
            } else if (data.weather[0].main === "Mist") {
                weatherIcon.src = "assets/mist.png";
            }

            document.querySelector('.weather').style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("An error occurred while fetching the weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});