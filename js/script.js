const navBar = document.querySelector(".nav__menu");
const navList = document.querySelectorAll(".nav__link");
const openMenu = document.querySelector(".open__btn");
const closeMenu = document.querySelector(".close__btn");

openMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
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
        description: `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, 
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
      winter lover's dream. With an icy surface, it's perfect for a bit of 
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
      bonus, you get striking views of Saturn's rings.`,
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

const tabBtn = document.querySelectorAll("[role='tab']");
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
        if (destinationImages) {
          destinationImages.src = getData.images.png;
          destinationImages.alt = getData.name;
          destinationTitle.textContent = getData.name
          destinationDescription.textContent = getData.description;
          distanceText.textContent = getData.distance;
          travelText.textContent = getData.travel;
        }
    });
});

// Crew page
const crew =[
  {
    subheading: "Commander",
    heading: "Douglas Hurley",
    image: {
      png: "./assets/crew/image-douglas-hurley.png",
  },
    description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`
  },
  {
    subheading: "Mission Specialist",
    heading: "Mark Shuttleworth",
    image: {
      png: "./assets/crew/image-mark-shuttleworth.png",
    },
    description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`
  },
  {
    subheading: "Pilot",
    heading: "Victor Glover",
    image: {
      png: "./assets/crew/image-victor-glover.png",
    },
    description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.`
  },
  {
    subheading: "Flight Engineer",
    heading: "Anousheh Ansari",
    image: {
      png: "./assets/crew/image-anousheh-ansari.png",
    },
    description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.`
  }
];

const crewBtn = document.querySelectorAll(".crew [role='tab']");
const crewImg = document.querySelector(".crew__img");
const crewSubheading = document.querySelector(".tab__subheading");
const crewHeading = document.querySelector(".tab__heading");
const crewDescription = document.querySelector(".tab__description");

crewBtn.forEach((b, index) => {
  b.addEventListener("click", () => {
    crewBtn.forEach(btn => btn.setAttribute("aria-selected", "false"));
    b.setAttribute("aria-selected", "true");

    const getCrew = crew[index];

    // update DOM
    if (crewImg) {
      crewImg.src = getCrew.image.png;
      crewImg.alt = getCrew.subheading;
      crewSubheading.textContent = getCrew.subheading;
      crewHeading.textContent = getCrew.heading;
      crewDescription.textContent = getCrew.description;
    }

    [crewImg, crewSubheading, crewHeading, crewDescription].forEach(el => {
      el.classList.remove("fade-in");
      void el.offsetWidth;
      el.classList.add("fade-in");
    })
  })
});

// Technology page
const technology = [
  {
    heading: "Launch vehicle",
    image: {
      png: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`
  },
  {
    heading: "Spaceport",
    image: {
      png: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth's rotation for launch.`
  },
  {
    heading: "Space capsule",
    image: {
      png: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`
  }
];

const techBtn = document.querySelectorAll(".tech__tabs [role='tab']");
const techImg = document.querySelector(".tech__img");
const techHeading = document.querySelector(".tech__heading");
const techDescription = document.querySelector(".tech__description");

techBtn.forEach((t, index) => {
  t.addEventListener("click", () => {
    techBtn.forEach(tn => tn.setAttribute("aria-selected", "false"));
    t.setAttribute("aria-selected", "true");

    const getTech = technology[index];

    // update DOM
    if (techImg) {
      techImg.src = getTech.image.png;
      techImg.alt = getTech.heading;
      techHeading.textContent = getTech.heading;
      techDescription.textContent = getTech.description;
    }

    [techImg, techHeading, techDescription].forEach(le => {
      le.classList.remove("fade-in");
      void le.offsetWidth;
      le.classList.add("fade-in");
    })
  })
});
