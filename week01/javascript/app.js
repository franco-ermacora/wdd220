// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");
const p = document.querySelector('p');
// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

function getTemperature(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const dateNew = `${monthName} ${d.getDate()}, ${year}`;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#date2").textContent = fulldate;
document.querySelector("#date1").textContent = dateNew;


document.querySelector('p').innerHTML = 'Welcome to <em>our</em> neighborhood!';
let quantity = document.querySelector('#q').value;
document.querySelector("#temp").value = getTemperature(89).toFixed(1);
const divs = document.querySelectorAll('div');
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let filterC = citynames.filter(city => city.charAt(0) === 'S');

document.querySelector("#city").textContent = filterC;