const hamButton = document.querySelector('#hamButton');
const burguer = document.querySelector('.burguer');

hamButton.addEventListener('click', () => {
	burguer.classList.toggle('responsive');
});

const newdate = new Date(document.lastModified);
const year = newdate.getFullYear();
const month = newdate.getMonth() + 1;
const day = newdate.getDate();
const hours = newdate.getHours();
const minutes = newdate.getMinutes();
const seconds = newdate.getSeconds();

let currentDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;


document.querySelector("#time").innerHTML = currentDate;
document.querySelector("#year").innerHTML = year;


const datefieldUK = document.querySelector("#actual");
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


const join = new Date();

const dia = join.getDay()

if (dia == 1 || dia == 2)
	{
		document.getElementById('herodiv').style.display = 'grid';
	}

else 
	document.getElementById('herodiv').style.display = 'none';

//Join//

function getHiddenDate() {
	let dateElement = document.querySelector("#hiddenDate");
	dateElement.value = new Date();
	console.log(dateElement.value)
	};








//Weather Index//

const currentTemp = document.querySelector('#grade');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const windSpeed = document.querySelector("#wind");
const feelLike = document.querySelector("#feel");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=5517f27f684000efd143ddc0886050fc&units=metric';



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

//Directory//
