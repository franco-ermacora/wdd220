// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector("#wind");
const feelLike = document.querySelector("#feel");



const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rosario&wind.speed&exclude=hourly,daily&appid=5517f27f684000efd143ddc0886050fc&units=metric';



async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();
    const wspeed = weatherData.wind.speed * 3.6;
    const flike = weatherData.main.feels_like.toFixed(0);


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windSpeed.textContent = wspeed.toFixed(1);
    feelLike.textContent = flike;

}

apiFetch();