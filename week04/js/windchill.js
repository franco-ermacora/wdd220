const grades = 10 + "ºC"; 
const wind = 4.8 + " km/h";
const result = 35.74 + (0.6215*10) - 0.4275*10*(3.0**0.16)
const celcius = (result - 32)* 5/9;
const chill = celcius.toFixed(2) + "ºC";


document.querySelector("#grade").innerHTML =  grades;

document.querySelector("#wind").innerHTML =  wind;

document.querySelector("#chill").innerHTML =  chill;

