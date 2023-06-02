const grades = 10 + "ºC"; 
const wind = 6.4 + " km/h";
const result = 35.74 + 0.6215 * 50 - 35.75 * Math.pow(4.0 ,0.16) + 0.4275 * 50 * Math.pow(4.0, 0.16);
const celcius = (result - 32)* 5/9;
const chill = celcius.toFixed(2) + "ºC";


document.querySelector("#grade").innerHTML =  grades;

document.querySelector("#wind").innerHTML =  wind;

document.querySelector("#chill").innerHTML =  chill;

