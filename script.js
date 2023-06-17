let inputtextEL = document.querySelector(".input-text")
let searchBtn = document.querySelector(".searchBtn")
let tempEL = document.querySelector(".temp")
let cityEL = document.querySelector(".city")
let humidityEL = document.querySelector(".Humidity")
let windEL = document.querySelector(".wind")

const apiKey = "1f1602912359a777255e9879b11d14ca"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const getSearchedWeather = async (city) => {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)
        const json = await response.json()
        getWeather(json)
        console.log(json)
    } catch (err) {
        console.log(err)
    }
}
const getWeather = (char) => {
    tempEL.innerHTML = Math.round(char.main.temp) + "°C"
    cityEL.innerHTML = char.name
    humidityEL.innerHTML = char.main.humidity + "%";
    windEL.innerHTML = char.wind.speed + " km/h"
}
searchBtn.addEventListener("click", () => {
    getSearchedWeather(inputtextEL.value)
})
