//Last Modified
const newdate = new Date(document.lastModified);
const year = newdate.getFullYear();
const month = newdate.getMonth() + 1;
const day = newdate.getDate();
const hours = newdate.getHours();
const minutes = newdate.getMinutes();
const seconds = newdate.getSeconds();

let currentDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;


document.querySelector("#time").innerHTML = currentDate;

//Lazy

let imagesToLoad = document.querySelectorAll("#mainIn img[data-src], .heroimg img[data-src]");

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


// Shake counter

const infoDH2 = document.querySelector('#info p')
if (infoDH2) {
    infoDH2.textContent = displayInfoDrinks();
}
function displayInfoDrinks() {
    if (localStorage.getItem('infoTotal') == 0 || localStorage.getItem('infoTotal') == null) {
        return "You didn't build any drink yet!"
    }
    else {
        return `You built ${localStorage.getItem('infoTotal')} drinks`
    }
}