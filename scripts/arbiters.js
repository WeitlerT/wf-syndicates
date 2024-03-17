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
    const arbiterPromise = arbiterList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(arbiterPromise)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(arbiterList);
            let sortedList = sortByRatioDescending(arbiterList)
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
let arbiterList = [
    { name: 'Gilded Truth', plat: 0, standing: 25000, url: convertToSnakeCase('Gilded Truth'), rank: 0 },
    { name: 'Blade of Truth', plat: 0, standing: 25000, url: convertToSnakeCase('Blade of Truth'), rank: 0 },
    { name: 'Avenging Truth', plat: 0, standing: 25000, url: convertToSnakeCase('Avenging Truth'), rank: 0 },
    { name: 'Stinging Truth', plat: 0, standing: 25000, url: convertToSnakeCase('Stinging Truth'), rank: 0 },
    { name: 'Seeking Shuriken', plat: 0, standing: 25000, url: convertToSnakeCase('Seeking Shuriken'), rank: 0 },
    { name: 'Smoke Shadow', plat: 0, standing: 25000, url: convertToSnakeCase('Smoke Shadow'), rank: 0 },
    { name: 'Fatal Teleport', plat: 0, standing: 25000, url: convertToSnakeCase('Fatal Teleport'), rank: 0 },
    { name: 'Rising Storm', plat: 0, standing: 25000, url: convertToSnakeCase('Rising Storm'), rank: 0 },
    { name: 'Endless Lullaby', plat: 0, standing: 25000, url: convertToSnakeCase('Endless Lullaby'), rank: 0 },
    { name: 'Reactive Storm', plat: 0, standing: 25000, url: convertToSnakeCase('Reactive Storm'), rank: 0 },
    { name: 'Duality', plat: 0, standing: 25000, url: convertToSnakeCase('Duality'), rank: 0 },
    { name: 'Calm and Frenzy', plat: 0, standing: 25000, url: convertToSnakeCase('Calm and Frenzy'), rank: 0 },
    { name: 'Peaceful Provocation', plat: 0, standing: 25000, url: convertToSnakeCase('Peaceful Provocation'), rank: 0 },
    { name: 'Energy Transfer', plat: 0, standing: 25000, url: convertToSnakeCase('Energy Transfer'), rank: 0 },
    { name: 'Surging Dash', plat: 0, standing: 25000, url: convertToSnakeCase('Surging Dash'), rank: 0 },
    { name: 'Radiant Finish', plat: 0, standing: 25000, url: convertToSnakeCase('Radiant Finish'), rank: 0 },
    { name: 'Furious Javelin', plat: 0, standing: 25000, url: convertToSnakeCase('Furious Javelin'), rank: 0 },
    { name: 'Chromatic Blade', plat: 0, standing: 25000, url: convertToSnakeCase('Chromatic Blade'), rank: 0 },
    { name: 'Shattered Storm', plat: 0, standing: 25000, url: convertToSnakeCase('Shattered Storm'), rank: 0 },
    { name: 'Mending Splinters', plat: 0, standing: 25000, url: convertToSnakeCase('Mending Splinters'), rank: 0 },
    { name: 'Spectrosiphon', plat: 0, standing: 25000, url: convertToSnakeCase('Spectrosiphon'), rank: 0 },
    { name: 'Mach Crash', plat: 0, standing: 25000, url: convertToSnakeCase('Mach Crash'), rank: 0 },
    { name: 'Thermal Transfer', plat: 0, standing: 25000, url: convertToSnakeCase('Thermal Transfer'), rank: 0 },
    { name: 'Cathode Current', plat: 0, standing: 25000, url: convertToSnakeCase('Cathode Current'), rank: 0 },
    { name: 'Tribunal', plat: 0, standing: 25000, url: convertToSnakeCase('Tribunal'), rank: 0 },
    { name: 'Warding Thurible', plat: 0, standing: 25000, url: convertToSnakeCase('Warding Thurible'), rank: 0 },
    { name: 'Lasting Covenant', plat: 0, standing: 25000, url: convertToSnakeCase('Lasting Covenant'), rank: 0 },
    { name: 'Desiccations Curse', plat: 0, standing: 25000, url: convertToSnakeCase('Desiccations Curse'), rank: 0 },
    { name: 'Elemental Sandstorm', plat: 0, standing: 25000, url: convertToSnakeCase('Elemental Sandstorm'), rank: 0 },
    { name: 'Negation Swarm', plat: 0, standing: 25000, url: convertToSnakeCase('Negation Swarm'), rank: 0 },
    { name: 'Rift Haven', plat: 0, standing: 25000, url: convertToSnakeCase('Rift Haven'), rank: 0 },
    { name: 'Rift Torrent', plat: 0, standing: 25000, url: convertToSnakeCase('Rift Torrent'), rank: 0 },
    { name: 'Cataclysmic Continuum', plat: 0, standing: 25000, url: convertToSnakeCase('Cataclysmic Continuum'), rank: 0 },
    { name: 'Savior Decoy', plat: 0, standing: 25000, url: convertToSnakeCase('Savior Decoy'), rank: 0 },
    { name: 'Hushed Invisibility', plat: 0, standing: 25000, url: convertToSnakeCase('Hushed Invisibility'), rank: 0 },
    { name: 'Safeguard Switch', plat: 0, standing: 25000, url: convertToSnakeCase('Safeguard Switch'), rank: 0 },
    { name: 'Irradiating Disarm', plat: 0, standing: 25000, url: convertToSnakeCase('Irradiating Disarm'), rank: 0 },
    { name: 'Hall of Malevolence', plat: 0, standing: 25000, url: convertToSnakeCase('Hall of Malevolence'), rank: 0 },
    { name: 'Explosive Legerdemain', plat: 0, standing: 25000, url: convertToSnakeCase('Explosive Legerdemain'), rank: 0 },
    { name: 'Total Eclipse', plat: 0, standing: 25000, url: convertToSnakeCase('Total Eclipse'), rank: 0 },
    { name: 'Mind Freak', plat: 0, standing: 25000, url: convertToSnakeCase('Mind Freak'), rank: 0 },
    { name: 'Pacifying Bolts', plat: 0, standing: 25000, url: convertToSnakeCase('Pacifying Bolts'), rank: 0 },
    { name: 'Chaos Sphere', plat: 0, standing: 25000, url: convertToSnakeCase('Chaos Sphere'), rank: 0 },
    { name: 'Assimilate', plat: 0, standing: 25000, url: convertToSnakeCase('Assimilate'), rank: 0 },
    { name: 'Repair Dispensary', plat: 0, standing: 25000, url: convertToSnakeCase('Repair Dispensary'), rank: 0 },
    { name: 'Shock Trooper', plat: 0, standing: 25000, url: convertToSnakeCase('Shock Trooper'), rank: 0 },
    { name: 'Shocking Speed', plat: 0, standing: 25000, url: convertToSnakeCase('Shocking Speed'), rank: 0 },
    { name: 'Transistor Shield', plat: 0, standing: 25000, url: convertToSnakeCase('Transistor Shield'), rank: 0 },
    { name: 'Capacitance', plat: 0, standing: 25000, url: convertToSnakeCase('Capacitance'), rank: 0 },
    { name: 'Celestial Stomp', plat: 0, standing: 25000, url: convertToSnakeCase('Celestial Stomp'), rank: 0 },
    { name: 'Enveloping Cloud', plat: 0, standing: 25000, url: convertToSnakeCase('Enveloping Cloud'), rank: 0 },
    { name: 'Primal Rage', plat: 0, standing: 25000, url: convertToSnakeCase('Primal Rage'), rank: 0 },
];