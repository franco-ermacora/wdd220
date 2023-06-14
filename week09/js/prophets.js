const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';



async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
  }

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
  
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let bp = document.createElement("p");
      let db = document.createElement("p");
      let nc = document.createElement("p");
  
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      dp.textContent = `Place of birth: ${prophet.birthplace}`
      db.textContent = `Date of birth: ${prophet.birthdate}`
      nc.textContent = `Num of children: ${prophet.numofchildren}`
  
      
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.name}`);
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
  } 

  getProphetData();