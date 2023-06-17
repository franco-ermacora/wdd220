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

const url = "data.json";


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.companies);
  };

  const displayProphets = (companies) => {
    const cards = document.querySelector('div.cards');
  
    companies.forEach((companie) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let bp = document.createElement("p");
      let db = document.createElement("p");
  
      h2.textContent = `${companie.name}`;
      bp.textContent = `Place of birth: ${companie.direction}`
      db.textContent = `Date of birth: ${companie.contact}`
      nc.textContent = `Num of children: ${companie.web}`
  
      
      portrait.setAttribute('src', companie.imageurl);
      portrait.setAttribute('alt', `Portait of ${companie.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      
      card.appendChild(h2);
      card.appendChild(db);
      card.appendChild(bp);
      card.appendChild(nc);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } 
    )
  };

getProphetData();