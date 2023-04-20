
const newdate = new Date(document.lastModified);
const year = newdate.getFullYear();
const month = newdate.getMonth();
const day = newdate.getDay();
const minutes = newdate.getMinutes();
const seconds = newdate.getSeconds();
const mili = newdate.getMilliseconds();

let currentDate = `${day}/${month}/${year} ${minutes}:${seconds}:${mili}`;
document.querySelector("#time").textContent = currentDate;