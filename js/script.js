const navBar = document.querySelector(".nav__menu");
const navList = document.querySelectorAll(".nav__link");
const openMenu = document.querySelector(".open__btn");
const closeMenu = document.querySelector(".close__btn");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    overlay.classList.add("active");
});

navList.forEach(list => {
    list.addEventListener("click", () => {
        navList.forEach(l => l.classList.remove("active"));
        
        list.classList.add("active")
        navBar.classList.remove("active");
        navBar.classList.remove("active");
    });
});

closeMenu.addEventListener("click", () => {
    navBar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("active");
});


// Destination page
const destinations = [
    {
        name: "Moon",
        images: {
            png: "./assets/destination/image-moon.png",
        },
        description: `See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective 
                        and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 
                        landing sites.`,
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        name: "Mars",
        images: {
            png: "./assets/destination/image-mars.png",
        },
        description: `Don't forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It's two and a half times 
  the size of Everest!`,
        distance: "225 mil. km",
        travel: "9 months"
    },
    {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
    },
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.`,
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
    },
    description: `The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of Saturn’s rings.`,
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

const tabBtn = document.querySelectorAll("[role='tab'");
const destinationImages = document.querySelector(".destination__img");
const destinationTitle = document.querySelector(".tab__header");
const destinationDescription = document.querySelector(".tab__para");
const distanceText = document.querySelector(".distance__text");
const travelText = document.querySelector(".destination__text");

tabBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        tabBtn.forEach(button => button.setAttribute("aria-selected", "false"));
        btn.setAttribute("aria-selected", "true");

        const getData = destinations[index];

        // update DOM
        destinationImages.src = getData.images.png;
        destinationImages.alt = getData.name;
        destinationTitle.textContent = getData.name
        destinationDescription.textContent = getData.description;
        distanceText.textContent = getData.distance;
        travelText.textContent = getData.travel;
    });
});