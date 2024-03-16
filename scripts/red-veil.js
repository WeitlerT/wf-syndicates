// IMPORTS
import { getAvgPlat } from "./main.js";
import { fetchDataAndUpdatePlat } from "./main.js";
import { populatePage } from "./main.js";
import { convertToSnakeCase } from "./main.js";
import { showLoadingIndicator } from "./main.js";
import { hideLoadingIndicator } from "./main.js";
import { sortByRatioDescending } from "./main.js";

let container = document.getElementById('cardContainer');

// Fetch button, every page will have one of these
const fetchBtn = document.querySelector('.fetchDataBtn')
fetchBtn.addEventListener('click', function() {

    // If container is NOT empty then clear it
    if (container.innerHTML.trim() !== '') {
        // Clear the contents of the container div
        container.innerHTML = '';
    }
    
    // Replace list with whatever list you have for page
    const redPromises = redList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(redPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(redList);
            let sortedList = sortByRatioDescending(redList)
            populatePage(sortedList, 'cardContainer')
        })
        .then (() =>{
            hideLoadingIndicator()
        })
        .catch(error => {
            // Handle errors if any of the fetch requests fail
            console.error('Error in fetching data:', error);
            hideLoadingIndicator()
        });
})

// Big pretty list goes here
let redList = [
    { name: 'Gleaming Blight', plat: 0, standing: 25000, url: convertToSnakeCase('Gleaming Blight'), rank: 0 },
    { name: 'Eroding Blight', plat: 0, standing: 25000, url: convertToSnakeCase('Eroding Blight'), rank: 0 },
    { name: 'Stockpiled Blight', plat: 0, standing: 25000, url: convertToSnakeCase('Stockpiled Blight'), rank: 0 },
    { name: 'Toxic Blight', plat: 0, standing: 25000, url: convertToSnakeCase('Toxic Blight'), rank: 0 },
    { name: 'Seeking Shuriken', plat: 0, standing: 25000, url: convertToSnakeCase('Seeking Shuriken'), rank: 0 },
    { name: 'Smoke Shadow', plat: 0, standing: 25000, url: convertToSnakeCase('Smoke Shadow'), rank: 0 },
    { name: 'Fatal Teleport', plat: 0, standing: 25000, url: convertToSnakeCase('Fatal Teleport'), rank: 0 },
    { name: 'Rising Storm', plat: 0, standing: 25000, url: convertToSnakeCase('Rising Storm'), rank: 0 },
    { name: 'Path of Statues', plat: 0, standing: 25000, url: convertToSnakeCase('Path of Statues'), rank: 0 },
    { name: 'Tectonic Fracture', plat: 0, standing: 25000, url: convertToSnakeCase('Tectonic Fracture'), rank: 0 },
    { name: 'Ore Gaze', plat: 0, standing: 25000, url: convertToSnakeCase('Ore Gaze'), rank: 0 },
    { name: 'Titanic Rumbler', plat: 0, standing: 25000, url: convertToSnakeCase('Titanic Rumbler'), rank: 0 },
    { name: 'Rubble Heap', plat: 0, standing: 25000, url: convertToSnakeCase('Rubble Heap'), rank: 0 },
    { name: 'Fireball Frenzy', plat: 0, standing: 25000, url: convertToSnakeCase('Fireball Frenzy'), rank: 0 },
    { name: 'Immolated Radiance', plat: 0, standing: 25000, url: convertToSnakeCase('Immolated Radiance'), rank: 0 },
    { name: 'Healing Flame', plat: 0, standing: 25000, url: convertToSnakeCase('Healing Flame'), rank: 0 },
    { name: 'Exothermic', plat: 0, standing: 25000, url: convertToSnakeCase('Exothermic'), rank: 0 },
    { name: 'Dread Ward', plat: 0, standing: 25000, url: convertToSnakeCase('Dread Ward'), rank: 0 },
    { name: 'Blood Forge', plat: 0, standing: 25000, url: convertToSnakeCase('Blood Forge'), rank: 0 },
    { name: 'Blending Talons', plat: 0, standing: 25000, url: convertToSnakeCase('Blending Talons'), rank: 0 },
    { name: 'Gourmand', plat: 0, standing: 25000, url: convertToSnakeCase('Gourmand'), rank: 0 },
    { name: 'Hearty Nourishment', plat: 0, standing: 25000, url: convertToSnakeCase('Hearty Nourishment'), rank: 0 },
    { name: 'Catapult', plat: 0, standing: 25000, url: convertToSnakeCase('Catapult'), rank: 0 },
    { name: 'Tribunal', plat: 0, standing: 25000, url: convertToSnakeCase('Tribunal'), rank: 0 },
    { name: 'Warding Thurible', plat: 0, standing: 25000, url: convertToSnakeCase('Warding Thurible'), rank: 0 },
    { name: 'Lasting Covenant', plat: 0, standing: 25000, url: convertToSnakeCase('Lasting Covenant'), rank: 0 },
    { name: 'Accumulating Whipclaw', plat: 0, standing: 25000, url: convertToSnakeCase('Accumulating Whipclaw'), rank: 0 },
    { name: 'Venari Bodyguard', plat: 0, standing: 25000, url: convertToSnakeCase('Venari Bodyguard'), rank: 0 },
    { name: 'Pilfering Strangledome', plat: 0, standing: 25000, url: convertToSnakeCase('Pilfering Strangledome'), rank: 0 },
    { name: 'Swift Bite', plat: 0, standing: 25000, url: convertToSnakeCase('Swift Bite'), rank: 0 },
    { name: 'Savior Decoy', plat: 0, standing: 25000, url: convertToSnakeCase('Savior Decoy'), rank: 0 },
    { name: 'Hushed Invisibility', plat: 0, standing: 25000, url: convertToSnakeCase('Hushed Invisibility'), rank: 0 },
    { name: 'Safeguard Switch', plat: 0, standing: 25000, url: convertToSnakeCase('Safeguard Switch'), rank: 0 },
    { name: 'Irradiating Disarm', plat: 0, standing: 25000, url: convertToSnakeCase('Irradiating Disarm'), rank: 0 },
    { name: 'Ballistic Bullseye', plat: 0, standing: 25000, url: convertToSnakeCase('Ballistic Bullseye'), rank: 0 },
    { name: 'Staggering Shield', plat: 0, standing: 25000, url: convertToSnakeCase('Staggering Shield'), rank: 0 },
    { name: 'Muzzle Flash', plat: 0, standing: 25000, url: convertToSnakeCase('Muzzle Flash'), rank: 0 },
    { name: 'Mesas Waltz', plat: 0, standing: 25000, url: convertToSnakeCase('Mesas Waltz'), rank: 0 },
    { name: 'Soul Survivor', plat: 0, standing: 25000, url: convertToSnakeCase('Soul Survivor'), rank: 0 },
    { name: 'Creeping Terrify', plat: 0, standing: 25000, url: convertToSnakeCase('Creeping Terrify'), rank: 0 },
    { name: 'Despoil', plat: 0, standing: 25000, url: convertToSnakeCase('Despoil'), rank: 0 },
    { name: 'Shield of Shadows', plat: 0, standing: 25000, url: convertToSnakeCase('Shield of Shadows'), rank: 0 },
    { name: 'Venom Dose', plat: 0, standing: 25000, url: convertToSnakeCase('Venom Dose'), rank: 0 },
    { name: 'Revealing Spores', plat: 0, standing: 25000, url: convertToSnakeCase('Revealing Spores'), rank: 0 },
    { name: 'Regenerative Molt', plat: 0, standing: 25000, url: convertToSnakeCase('Regenerative Molt'), rank: 0 },
    { name: 'Contagion Cloud', plat: 0, standing: 25000, url: convertToSnakeCase('Contagion Cloud'), rank: 0 },
    { name: 'Spellbound Harvest', plat: 0, standing: 25000, url: convertToSnakeCase('Spellbound Harvest'), rank: 0 },
    { name: 'Beguiling Lantern', plat: 0, standing: 25000, url: convertToSnakeCase('Beguiling Lantern'), rank: 0 },
    { name: 'Razorwing Blitz', plat: 0, standing: 25000, url: convertToSnakeCase('Razorwing Blitz'), rank: 0 },
    { name: 'Ironclad Flight', plat: 0, standing: 25000, url: convertToSnakeCase('Ironclad Flight'), rank: 0 },
    { name: 'Shock Trooper', plat: 0, standing: 25000, url: convertToSnakeCase('Shock Trooper'), rank: 0 },
    { name: 'Shocking Speed', plat: 0, standing: 25000, url: convertToSnakeCase('Shocking Speed'), rank: 0 },
    { name: 'Transistor Shield', plat: 0, standing: 25000, url: convertToSnakeCase('Transistor Shield'), rank: 0 },
    { name: 'Capacitance', plat: 0, standing: 25000, url: convertToSnakeCase('Capacitance'), rank: 0 },
    { name: 'Target Fixation', plat: 0, standing: 25000, url: convertToSnakeCase('Target Fixation'), rank: 0 },
    { name: 'Airburst Rounds', plat: 0, standing: 25000, url: convertToSnakeCase('Airburst Rounds'), rank: 0 },
    { name: 'Jet Stream', plat: 0, standing: 25000, url: convertToSnakeCase('Jet Stream'), rank: 0 },
    { name: 'Funnel Clouds', plat: 0, standing: 25000, url: convertToSnakeCase('Funnel Clouds'), rank: 0 },
    { name: 'Anchored Glide', plat: 0, standing: 25000, url: convertToSnakeCase('Anchored Glide'), rank: 0 },
];