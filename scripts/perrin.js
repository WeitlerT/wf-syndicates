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
    const perrinPromises = perrinList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(perrinPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(perrinList);
            let sortedList = sortByRatioDescending(perrinList)
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
let perrinList = [
    { name: 'Parasitic Vitality', plat: 0, standing: 25000, url: convertToSnakeCase('Parasitic Vitality'), rank: 0 },
    { name: 'Toxic Sequence', plat: 0, standing: 25000, url: convertToSnakeCase('Toxic Sequence'), rank: 0 },
    { name: 'Deadly Sequence', plat: 0, standing: 25000, url: convertToSnakeCase('Deadly Sequence'), rank: 0 },
    { name: 'Voltage Sequence', plat: 0, standing: 25000, url: convertToSnakeCase('Voltage Sequence'), rank: 0 },
    { name: 'Sequence Burn', plat: 0, standing: 25000, url: convertToSnakeCase('Sequence Burn'), rank: 0 },
    { name: 'Sonic Fracture', plat: 0, standing: 25000, url: convertToSnakeCase('Sonic Fracture'), rank: 0 },
    { name: 'Resonance', plat: 0, standing: 25000, url: convertToSnakeCase('Resonance'), rank: 0 },
    { name: 'Savage Silence', plat: 0, standing: 25000, url: convertToSnakeCase('Savage Silence'), rank: 0 },
    { name: 'Resonating Quake', plat: 0, standing: 25000, url: convertToSnakeCase('Resonating Quake'), rank: 0 },
    { name: 'Afterburn', plat: 0, standing: 25000, url: convertToSnakeCase('Afterburn'), rank: 0 },
    { name: 'Everlasting Ward', plat: 0, standing: 25000, url: convertToSnakeCase('Everlasting Ward'), rank: 0 },
    { name: 'Vexing Retaliation', plat: 0, standing: 25000, url: convertToSnakeCase('Vexing Retaliation'), rank: 0 },
    { name: 'Guided Effigy', plat: 0, standing: 25000, url: convertToSnakeCase('Guided Effigy'), rank: 0 },
    { name: 'Mach Crash', plat: 0, standing: 25000, url: convertToSnakeCase('Mach Crash'), rank: 0 },
    { name: 'Thermal Transfer', plat: 0, standing: 25000, url: convertToSnakeCase('Thermal Transfer'), rank: 0 },
    { name: 'Cathode Current', plat: 0, standing: 25000, url: convertToSnakeCase('Cathode Current'), rank: 0 },
    { name: 'Balefire Surge', plat: 0, standing: 25000, url: convertToSnakeCase('Balefire Surge'), rank: 0 },
    { name: 'Blazing Pillage', plat: 0, standing: 25000, url: convertToSnakeCase('Blazing Pillage'), rank: 0 },
    { name: 'Desiccations Curse', plat: 0, standing: 25000, url: convertToSnakeCase('Desiccations Curse'), rank: 0 },
    { name: 'Elemental Sandstorm', plat: 0, standing: 25000, url: convertToSnakeCase('Elemental Sandstorm'), rank: 0 },
    { name: 'Negation Swarm', plat: 0, standing: 25000, url: convertToSnakeCase('Negation Swarm'), rank: 0 },
    { name: 'Empowered Quiver', plat: 0, standing: 25000, url: convertToSnakeCase('Empowered Quiver'), rank: 0 },
    { name: 'Piercing Navigator', plat: 0, standing: 25000, url: convertToSnakeCase('Piercing Navigator'), rank: 0 },
    { name: 'Infiltrate', plat: 0, standing: 25000, url: convertToSnakeCase('Infiltrate'), rank: 0 },
    { name: 'Concentrated Arrow', plat: 0, standing: 25000, url: convertToSnakeCase('Concentrated Arrow'), rank: 0 },
    { name: 'Greedy Pull', plat: 0, standing: 25000, url: convertToSnakeCase('Greedy Pull'), rank: 0 },
    { name: 'Magnetized Discharge', plat: 0, standing: 25000, url: convertToSnakeCase('Magnetized Discharge'), rank: 0 },
    { name: 'Counter Pulse', plat: 0, standing: 25000, url: convertToSnakeCase('Counter Pulse'), rank: 0 },
    { name: 'Fracturing Crush', plat: 0, standing: 25000, url: convertToSnakeCase('Fracturing Crush'), rank: 0 },
    { name: 'Soul Survivor', plat: 0, standing: 25000, url: convertToSnakeCase('Soul Survivor'), rank: 0 },
    { name: 'Creeping Terrify', plat: 0, standing: 25000, url: convertToSnakeCase('Creeping Terrify'), rank: 0 },
    { name: 'Despoil', plat: 0, standing: 25000, url: convertToSnakeCase('Despoil'), rank: 0 },
    { name: 'Shield of Shadows', plat: 0, standing: 25000, url: convertToSnakeCase('Shield of Shadows'), rank: 0 },
    { name: 'Teeming Virulence', plat: 0, standing: 25000, url: convertToSnakeCase('Teeming Virulence'), rank: 0 },
    { name: 'Larva Burst', plat: 0, standing: 25000, url: convertToSnakeCase('Larva Burst'), rank: 0 },
    { name: 'Insatiable', plat: 0, standing: 25000, url: convertToSnakeCase('Insatiable'), rank: 0 },
    { name: 'Abundant Mutation', plat: 0, standing: 25000, url: convertToSnakeCase('Abundant Mutation'), rank: 0 },
    { name: 'Repair Dispensary', plat: 0, standing: 25000, url: convertToSnakeCase('Repair Dispensary'), rank: 0 },
    { name: 'Thrall Pact', plat: 0, standing: 25000, url: convertToSnakeCase('Thrall Pact'), rank: 0 },
    { name: 'Mesmer Shield', plat: 0, standing: 25000, url: convertToSnakeCase('Mesmer Shield'), rank: 0 },
    { name: 'Blinding Reave', plat: 0, standing: 25000, url: convertToSnakeCase('Blinding Reave'), rank: 0 },
    { name: 'Ironclad Charge', plat: 0, standing: 25000, url: convertToSnakeCase('Ironclad Charge'), rank: 0 },
    { name: 'Iron Shrapnel', plat: 0, standing: 25000, url: convertToSnakeCase('Iron Shrapnel'), rank: 0 },
    { name: 'Piercing Roar', plat: 0, standing: 25000, url: convertToSnakeCase('Piercing Roar'), rank: 0 },
    { name: 'Reinforcing Stomp', plat: 0, standing: 25000, url: convertToSnakeCase('Reinforcing Stomp'), rank: 0 },
    { name: 'Pool of Life', plat: 0, standing: 25000, url: convertToSnakeCase('Pool of Life'), rank: 0 },
    { name: 'Vampire Leech', plat: 0, standing: 25000, url: convertToSnakeCase('Vampire Leech'), rank: 0 },
    { name: 'Abating Link', plat: 0, standing: 25000, url: convertToSnakeCase('Abating Link'), rank: 0 },
    { name: 'Champions Blessing', plat: 0, standing: 25000, url: convertToSnakeCase('Champions Blessing'), rank: 0 },
    { name: 'Swing Line', plat: 0, standing: 25000, url: convertToSnakeCase('Swing Line'), rank: 0 },
    { name: 'Eternal War', plat: 0, standing: 25000, url: convertToSnakeCase('Eternal War'), rank: 0 },
    { name: 'Prolonged Paralysis', plat: 0, standing: 25000, url: convertToSnakeCase('Prolonged Paralysis'), rank: 0 },
    { name: 'Hysterical Assault', plat: 0, standing: 25000, url: convertToSnakeCase('Hysterical Assault'), rank: 0 },
    { name: 'Enraged', plat: 0, standing: 25000, url: convertToSnakeCase('Enraged'), rank: 0 },
    { name: 'Tesla Bank', plat: 0, standing: 25000, url: convertToSnakeCase('Tesla Bank'), rank: 0 },
    { name: 'Repelling Bastille', plat: 0, standing: 25000, url: convertToSnakeCase('Repelling Bastille'), rank: 0 },
    { name: 'Photon Repeater', plat: 0, standing: 25000, url: convertToSnakeCase('Photon Repeater'), rank: 0 },
    { name: 'Guardian Armor', plat: 0, standing: 25000, url: convertToSnakeCase('Guardian Armor'), rank: 0 },
];