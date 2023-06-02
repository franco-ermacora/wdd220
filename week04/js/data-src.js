let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }



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





let peopleVisit = localStorage.getItem("peopleVisit");

if (peopleVisit) {
    let currentDate = new Date();
    let previousDate = new Date(peopleVisit);
    let timeDifference = currentDate.getTime() - previousDate.getTime();
  
    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    document.querySelector("#peopleVisit").innerHTML = `You visited this webpage ${differenceInDays} days ago!`;
}
localStorage.setItem("peopleVisit", new Date());