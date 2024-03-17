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
    const steelPromise = steeList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(steelPromise)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(steeList);
            let sortedList = sortByRatioDescending(steeList)
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
let steeList = [
    { name: 'Scattered Justice', plat: 0, standing: 25000, url: convertToSnakeCase('Scattered Justice'), rank: 0 },
    { name: 'Justice Blades', plat: 0, standing: 25000, url: convertToSnakeCase('Justice Blades'), rank: 0 },
    { name: 'Neutralizing Justice', plat: 0, standing: 25000, url: convertToSnakeCase('Neutralizing Justice'), rank: 0 },
    { name: 'Shattering Justice', plat: 0, standing: 25000, url: convertToSnakeCase('Shattering Justice'), rank: 0 },
    { name: 'Path of Statues', plat: 0, standing: 25000, url: convertToSnakeCase('Path of Statues'), rank: 0 },
    { name: 'Tectonic Fracture', plat: 0, standing: 25000, url: convertToSnakeCase('Tectonic Fracture'), rank: 0 },
    { name: 'Ore Gaze', plat: 0, standing: 25000, url: convertToSnakeCase('Ore Gaze'), rank: 0 },
    { name: 'Titanic Rumbler', plat: 0, standing: 25000, url: convertToSnakeCase('Titanic Rumbler'), rank: 0 },
    { name: 'Rubble Heap', plat: 0, standing: 25000, url: convertToSnakeCase('Rubble Heap'), rank: 0 },
    { name: 'Fireball Frenzy', plat: 0, standing: 25000, url: convertToSnakeCase('Fireball Frenzy'), rank: 0 },
    { name: 'Immolated Radiance', plat: 0, standing: 25000, url: convertToSnakeCase('Immolated Radiance'), rank: 0 },
    { name: 'Healing Flame', plat: 0, standing: 25000, url: convertToSnakeCase('Healing Flame'), rank: 0 },
    { name: 'Exothermic', plat: 0, standing: 25000, url: convertToSnakeCase('Exothermic'), rank: 0 },
    { name: 'Surging Dash', plat: 0, standing: 25000, url: convertToSnakeCase('Surging Dash'), rank: 0 },
    { name: 'Radiant Finish', plat: 0, standing: 25000, url: convertToSnakeCase('Radiant Finish'), rank: 0 },
    { name: 'Furious Javelin', plat: 0, standing: 25000, url: convertToSnakeCase('Furious Javelin'), rank: 0 },
    { name: 'Chromatic Blade', plat: 0, standing: 25000, url: convertToSnakeCase('Chromatic Blade'), rank: 0 },
    { name: 'Freeze Force', plat: 0, standing: 25000, url: convertToSnakeCase('Freeze Force'), rank: 0 },
    { name: 'Ice Wave Impedance', plat: 0, standing: 25000, url: convertToSnakeCase('Ice Wave Impedance'), rank: 0 },
    { name: 'Chilling Globe', plat: 0, standing: 25000, url: convertToSnakeCase('Chilling Globe'), rank: 0 },
    { name: 'Icy Avalanche', plat: 0, standing: 25000, url: convertToSnakeCase('Icy Avalanche'), rank: 0 },
    { name: 'Biting Frost', plat: 0, standing: 25000, url: convertToSnakeCase('Biting Frost'), rank: 0 },
    { name: 'Dread Ward', plat: 0, standing: 25000, url: convertToSnakeCase('Dread Ward'), rank: 0 },
    { name: 'Blood Forge', plat: 0, standing: 25000, url: convertToSnakeCase('Blood Forge'), rank: 0 },
    { name: 'Blending Talons', plat: 0, standing: 25000, url: convertToSnakeCase('Blending Talons'), rank: 0 },
    { name: 'Gourmand', plat: 0, standing: 25000, url: convertToSnakeCase('Gourmand'), rank: 0 },
    { name: 'Hearty Nourishment', plat: 0, standing: 25000, url: convertToSnakeCase('Hearty Nourishment'), rank: 0 },
    { name: 'Catapult', plat: 0, standing: 25000, url: convertToSnakeCase('Catapult'), rank: 0 },
    { name: 'Accumulating Whipclaw', plat: 0, standing: 25000, url: convertToSnakeCase('Accumulating Whipclaw'), rank: 0 },
    { name: 'Venari Bodyguard', plat: 0, standing: 25000, url: convertToSnakeCase('Venari Bodyguard'), rank: 0 },
    { name: 'Pilfering Strangledome', plat: 0, standing: 25000, url: convertToSnakeCase('Pilfering Strangledome'), rank: 0 },
    { name: 'Ballistic Bullseye', plat: 0, standing: 25000, url: convertToSnakeCase('Ballistic Bullseye'), rank: 0 },
    { name: 'Staggering Shield', plat: 0, standing: 25000, url: convertToSnakeCase('Staggering Shield'), rank: 0 },
    { name: 'Muzzle Flash', plat: 0, standing: 25000, url: convertToSnakeCase('Muzzle Flash'), rank: 0 },
    { name: 'Mesas Waltz', plat: 0, standing: 25000, url: convertToSnakeCase('Mesas Waltz'), rank: 0 },
    { name: 'Pyroclastic Flow', plat: 0, standing: 25000, url: convertToSnakeCase('Pyroclastic Flow'), rank: 0 },
    { name: 'Reaping Chakram', plat: 0, standing: 25000, url: convertToSnakeCase('Reaping Chakram'), rank: 0 },
    { name: 'Safeguard', plat: 0, standing: 25000, url: convertToSnakeCase('Safeguard'), rank: 0 },
    { name: 'Controlled Slide', plat: 0, standing: 25000, url: convertToSnakeCase('Controlled Slide'), rank: 0 },
    { name: 'Teeming Virulence', plat: 0, standing: 25000, url: convertToSnakeCase('Teeming Virulence'), rank: 0 },
    { name: 'Larva Burst', plat: 0, standing: 25000, url: convertToSnakeCase('Larva Burst'), rank: 0 },
    { name: 'Insatiable', plat: 0, standing: 25000, url: convertToSnakeCase('Insatiable'), rank: 0 },
    { name: 'Abundant Mutation', plat: 0, standing: 25000, url: convertToSnakeCase('Abundant Mutation'), rank: 0 },
    { name: 'Neutron Star', plat: 0, standing: 25000, url: convertToSnakeCase('Neutron Star'), rank: 0 },
    { name: 'Antimatter Absorb', plat: 0, standing: 25000, url: convertToSnakeCase('Antimatter Absorb'), rank: 0 },
    { name: 'Escape Velocity', plat: 0, standing: 25000, url: convertToSnakeCase('Escape Velocity'), rank: 0 },
    { name: 'Molecular Fission', plat: 0, standing: 25000, url: convertToSnakeCase('Molecular Fission'), rank: 0 },
    { name: 'Smite Infusion', plat: 0, standing: 25000, url: convertToSnakeCase('Smite Infusion'), rank: 0 },
    { name: 'Hallowed Eruption', plat: 0, standing: 25000, url: convertToSnakeCase('Hallowed Eruption'), rank: 0 },
    { name: 'Phoenix Renewal', plat: 0, standing: 25000, url: convertToSnakeCase('Phoenix Renewal'), rank: 0 },
    { name: 'Hallowed Reckoning', plat: 0, standing: 25000, url: convertToSnakeCase('Hallowed Reckoning'), rank: 0 },
    { name: 'Ironclad Charge', plat: 0, standing: 25000, url: convertToSnakeCase('Ironclad Charge'), rank: 0 },
    { name: 'Iron Shrapnel', plat: 0, standing: 25000, url: convertToSnakeCase('Iron Shrapnel'), rank: 0 },
    { name: 'Piercing Roar', plat: 0, standing: 25000, url: convertToSnakeCase('Piercing Roar'), rank: 0 },
    { name: 'Reinforcing Stomp', plat: 0, standing: 25000, url: convertToSnakeCase('Reinforcing Stomp'), rank: 0 },
    { name: 'Venom Dose', plat: 0, standing: 25000, url: convertToSnakeCase('Venom Dose'), rank: 0 },
    { name: 'Regenerative Molt', plat: 0, standing: 25000, url: convertToSnakeCase('Regenerative Molt'), rank: 0 },
    { name: 'Contagion Cloud', plat: 0, standing: 25000, url: convertToSnakeCase('Contagion Cloud'), rank: 0 },
    { name: 'Revealing Spores', plat: 0, standing: 25000, url: convertToSnakeCase('Revealing Spores'), rank: 0 },
    { name: 'Ulfruns Endurance', plat: 0, standing: 25000, url: convertToSnakeCase('Ulfruns Endurance'), rank: 0 },
    { name: 'Vampiric Grasp', plat: 0, standing: 25000, url: convertToSnakeCase('Vampiric Grasp'), rank: 0 },
    { name: 'The Relentless Lost', plat: 0, standing: 25000, url: convertToSnakeCase('The Relentless Lost'), rank: 0 },
];