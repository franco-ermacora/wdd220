const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


const url = "https://franco-ermacora.github.io/wdd230/week04/data.json";



async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.companies);
  };

  const displayData= (companies) => {
    const cards = document.querySelector('article.cards');
  
    companies.forEach((companie) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let address = document.createElement("p");
      let contact = document.createElement("p");
      let web = document.createElement("a");
  
      h2.textContent = `${companie.name}`;
      address.textContent = `${companie.direction}`
      contact.textContent = `${companie.contact}`
      web.textContent = `${companie.web}`
  
      
      img.setAttribute('src', `images/${companie.imageurl}`);
      img.setAttribute('alt', `Logo of ${companie.name}`);
      img.setAttribute('loading', 'lazy');
      address.setAttribute("class", "directory-address");
      web.setAttribute("href", `${companie.web}`);
      web.setAttribute("target", "_blank");

      
      card.appendChild(h2);
      card.appendChild(img);
      card.appendChild(address);
      card.appendChild(contact);
      card.appendChild(web);
      
  
      cards.appendChild(card);
    } 
    )
  };

getData();