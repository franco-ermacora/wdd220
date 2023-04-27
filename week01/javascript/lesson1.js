const newdate = new Date(document.lastModified);
const year = newdate.getFullYear();
const month = newdate.getMonth() + 1;
const day = newdate.getDate();
const minutes = newdate.getMinutes();
const seconds = newdate.getSeconds();
const mili = newdate.getMilliseconds();

let currentDate = `${day}/${month}/${year} ${minutes}:${seconds}:${mili}`;


document.querySelector("#time").innerHTML = currentDate;

//hola 