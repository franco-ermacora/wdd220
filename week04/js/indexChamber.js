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



//Directory//

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const display = document.querySelector("article");

grid.addEventListener("click", () => {
    chanceView("grid")
});
list.addEventListener("click", () => {
    chanceViewView("list")
});




const url = "https://franco-ermacora.github.io/wdd230/week04/data.json";


async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.companies);
  };

  const displayData = (companies) => {
    const cards = document.querySelector('.list');
  
    companies.forEach((companie) => {
      let card = document.createElement('section');
	  let name = document.createElement('div');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let address = document.createElement("p");
      let contact = document.createElement("p");
	  let web = document.createElement("a");
  
      h2.textContent = `${companie.name}`;
      address.textContent = `${companie.direction}`;
      contact.textContent = `${companie.contact}`;
      web.textContent = `${companie.web}`;
  
      
      img.setAttribute('src', `images/${companie.imageurl}`);
      img.setAttribute('alt', `Logo of ${companie.name}`);
      address.setAttribute("class", "directory-address");
      web.setAttribute("href", `${companie.web}`);
      web.setAttribute("target", "_blank");
  
      
      card.appendChild(imageurl);
      name.appendChild(h2);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(web);

      cards.appendChild(card);
    } 
    )
  };

getData();