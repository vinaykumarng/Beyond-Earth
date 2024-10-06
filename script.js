function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();


  // Get all the needed items

const checkBox = document.getElementById('checkbox');
const sliderContainer = document.getElementById('speed');
const options = document.getElementById('options');
const orbitsManager = document.getElementById('orbit-container');
const title = document.getElementById('options-title');

const info_title = document.getElementById('title-info');
const info_text = document.getElementById('wrapper-text');

const allInfoElements = document.getElementById('info-container');

// Create some arrays of stored data

const names = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

const text = ['Orbit speed: 47.4 km/s \n Diameter: 4879 km \n Orbital period: 88 days \n \n Mercury is the closest planet to the sun, but is not the hottest planet in the solar system. It is also the only planet in our solar system to have no moons! As well as the only planet that is too small to have an atmosphere.',
  'Orbit speed: 35.0 km/s \n Diameter: 12,104 km \n Orbital period: 224.7 days \n \n Venus is the 2nd planet from the sun and is the hottest planet in the solar system as its atmosphere is made up mostly og greenhouse gases, which hold the suns heat in.',

  'Orbit speed: 29.8 km/s \n Diameter: 12,756 km \n Orbital period: 365.25 days \n \n Earth is the 3rd planet from the sun and is home to us humans. It is the only known planet to sustain any form of intelegent life (Humans). It is also the only known planet to sustain any life at all! Also, Earth is the only planet in our solar system to have liquid water at its surface, which is one of the reasons why life was able to evolve here.',

  'Orbit speed: 24.1 km/s \n Diameter: 6792	 km \n Orbital period: 687 days \n \n Mars is the 4th planet from the sun and is the last terrestrial planet (A planet made up of mostly rocks). Also, scientists believe that it could have once supported life millions of years ago.',

  'Orbit speed: 13.1 km/s \n Diameter: 142,984 km \n Orbital period: 4331 days \n \n Jupiter is the 5th planet from the sun and is the first gas giant in the solar system weighing more than all the planets weights combined! It is also the largests planet in our solar system, but does not have the most moons.', 
  'Orbit speed: 9.7 km/s \n Diameter: 120,536 km \n Orbital period: 10,747 days \n \n Saturn is the 6th planet from the sun and the only planet to have visible rings, which are made up of mostly ice and rock. It is also the planet which has the most moons (82 of them), even though it is smaller than Jupiter!', 

  'Orbit speed: 6.8 km/s \n Diameter: 51,118 km \n Orbital period: 30,589 days \n \n Uranus is the 7th planet in the solar system and like neptune, is made nearly entirely of a mixture of gases. Scientists have also found that one of the gases that makes up uranus is methane, which makes the planet smell like rotten eggs!!',

  'Orbit speed: 5.4 km/s \n Diameter: 49,528 km \n Orbital period: 59,800 days \n \n Neptune is the furthest planet from our sun. It is also the coldest of all the planets and is made up mostly of a mixture of gases.']

const speeds = [0.02, 0.051428, 0.08348, 0.157, 1.00112, 2.41942, 7.008, 13.765714];


function showUserInfo(num) {
  
  info_title.innerText = capitaliseFirstLetter(names[num]);

  info_text.innerText = text[num];
}

function capitaliseFirstLetter(word) {
 return word.substring(0, 1).toUpperCase() + word.slice(1);
}
