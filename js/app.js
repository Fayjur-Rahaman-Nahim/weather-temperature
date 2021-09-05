const API_key = `ccc0e340506b06f88b2527968080dc61`
const searchCity = () => {
    const searchCityName = document.getElementById('enter-city');
    const searchCity = searchCityName.value;
    searchCityName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))      
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = cityData => {
    // const cityName = document.getElementById('city-name');
    // cityName.innerText = cityData.name;
    // const cityTemp = document.getElementById('city-temp');
    // cityTemp.innerText = cityData.main.temp;
    setInnerText('city-name', cityData.name);
    setInnerText('city-temp', cityData.main.temp);
    setInnerText('city-temperature', cityData.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`
    const icon = document.getElementById('icon');
    icon.setAttribute('src', url);
}