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
    const lokaPromises = lokaList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(lokaPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(lokaList);
            let sortedList = sortByRatioDescending(lokaList)
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
let lokaList = [
    // { name: 'Onorix Blade', plat: 0, standing: 20000, url: convertToSnakeCase('Onorix Blade'), rank: 0 },
    // { name: 'Phaedra Stock', plat: 0, standing: 20000, url: convertToSnakeCase('Phaedra Stock'), rank: 0 },
    // { name: 'Rathbone Head', plat: 0, standing: 20000, url: convertToSnakeCase('Rathbone Head'), rank: 0 },
    // { name: 'Agkuza Blade', plat: 0, standing: 20000, url: convertToSnakeCase('Agkuza Blade'), rank: 0 },
    // { name: 'Centaur Handle', plat: 0, standing: 20000, url: convertToSnakeCase('Centaur Handle'), rank: 0 },
    { name: 'Loyal Merulina', plat: 0, standing: 25000, url: convertToSnakeCase('Loyal Merulina'), rank: 0 },
    { name: 'Axios Javelineers', plat: 0, standing: 25000, url: convertToSnakeCase('Axios Javelineers'), rank: 0 },
    { name: 'Valence Formation', plat: 0, standing: 25000, url: convertToSnakeCase('Valence Formation'), rank: 0 },
    { name: 'Wrath of Ukko', plat: 0, standing: 25000, url: convertToSnakeCase('Wrath of Ukko'), rank: 0 },
    { name: 'Winds of Purity', plat: 0, standing: 25000, url: convertToSnakeCase('Winds of Purity'), rank: 0 },
    { name: 'Disarming Purity', plat: 0, standing: 25000, url: convertToSnakeCase('Disarming Purity'), rank: 0 },
    { name: 'Bright Purity', plat: 0, standing: 25000, url: convertToSnakeCase('Bright Purity'), rank: 0 },
    { name: 'Lasting Purity', plat: 0, standing: 25000, url: convertToSnakeCase('Lasting Purity'), rank: 0 },
    { name: 'Endless Lullaby', plat: 0, standing: 25000, url: convertToSnakeCase('Endless Lullaby'), rank: 0 },
    { name: 'Reactive Storm', plat: 0, standing: 25000, url: convertToSnakeCase('Reactive Storm'), rank: 0 },
    { name: 'Duality', plat: 0, standing: 25000, url: convertToSnakeCase('Duality'), rank: 0 },
    { name: 'Calm & Frenzy', plat: 0, standing: 25000, url: convertToSnakeCase('Calm and Frenzy'), rank: 0 },
    { name: 'Peaceful Provocation', plat: 0, standing: 25000, url: convertToSnakeCase('Peaceful Provocation'), rank: 0 },
    { name: 'Energy Transfer', plat: 0, standing: 25000, url: convertToSnakeCase('Energy Transfer'), rank: 0 },
    { name: 'Shattered Storm', plat: 0, standing: 25000, url: convertToSnakeCase('Shattered Storm'), rank: 0 },
    { name: 'Mending Splinters', plat: 0, standing: 25000, url: convertToSnakeCase('Mending Splinters'), rank: 0 },
    { name: 'Spectrosiphon', plat: 0, standing: 25000, url: convertToSnakeCase('Spectrosiphon'), rank: 0 },
    { name: 'Corroding Barrage', plat: 0, standing: 25000, url: convertToSnakeCase('Corroding Barrage'), rank: 0 },
    { name: 'Tidal Impunity', plat: 0, standing: 25000, url: convertToSnakeCase('Tidal Impunity'), rank: 0 },
    { name: 'Curative Undertow', plat: 0, standing: 25000, url: convertToSnakeCase('Curative Undertow'), rank: 0 },
    { name: 'Pilfering Swarm', plat: 0, standing: 25000, url: convertToSnakeCase('Pilfering Swarm'), rank: 0 },
    { name: 'Swift Bite', plat: 0, standing: 25000, url: convertToSnakeCase('Swift Bite'), rank: 0 },
    { name: 'Greedy Pull', plat: 0, standing: 25000, url: convertToSnakeCase('Greedy Pull'), rank: 0 },
    { name: 'Magnetized Discharge', plat: 0, standing: 25000, url: convertToSnakeCase('Magnetized Discharge'), rank: 0 },
    { name: 'Counter Pulse', plat: 0, standing: 25000, url: convertToSnakeCase('Counter Pulse'), rank: 0 },
    { name: 'Fracturing Crush', plat: 0, standing: 25000, url: convertToSnakeCase('Fracturing Crush'), rank: 0 },
    { name: 'Mind Freak', plat: 0, standing: 25000, url: convertToSnakeCase('Mind Freak'), rank: 0 },
    { name: 'Pacifying Bolts', plat: 0, standing: 25000, url: convertToSnakeCase('Pacifying Bolts'), rank: 0 },
    { name: 'Chaos Sphere', plat: 0, standing: 25000, url: convertToSnakeCase('Chaos Sphere'), rank: 0 },
    { name: 'Assimilate', plat: 0, standing: 25000, url: convertToSnakeCase('Assimilate'), rank: 0 },
    { name: 'Smite Infusion', plat: 0, standing: 25000, url: convertToSnakeCase('Smite Infusion'), rank: 0 },
    { name: 'Hallowed Eruption', plat: 0, standing: 25000, url: convertToSnakeCase('Hallowed Eruption'), rank: 0 },
    { name: 'Phoenix Renewal', plat: 0, standing: 25000, url: convertToSnakeCase('Phoenix Renewal'), rank: 0 },
    { name: 'Hallowed Reckoning', plat: 0, standing: 25000, url: convertToSnakeCase('Hallowed Reckoning'), rank: 0 },
    { name: 'Partitioned Mallet', plat: 0, standing: 25000, url: convertToSnakeCase('Partitioned Mallet'), rank: 0 },
    { name: 'Conductor', plat: 0, standing: 25000, url: convertToSnakeCase('Conductor'), rank: 0 },
    { name: 'Spellbound Harvest', plat: 0, standing: 25000, url: convertToSnakeCase('Spellbound Harvest'), rank: 0 },
    { name: 'Beguiling Lantern', plat: 0, standing: 25000, url: convertToSnakeCase('Beguiling Lantern'), rank: 0 },
    { name: 'Razorwing Blitz', plat: 0, standing: 25000, url: convertToSnakeCase('Razorwing Blitz'), rank: 0 },
    { name: 'Ironclad Flight', plat: 0, standing: 25000, url: convertToSnakeCase('Ironclad Flight'), rank: 0 },
    { name: 'Pool of Life', plat: 0, standing: 25000, url: convertToSnakeCase('Pool of Life'), rank: 0 },
    { name: 'Vampire Leech', plat: 0, standing: 25000, url: convertToSnakeCase('Vampire Leech'), rank: 0 },
    { name: 'Abating Link', plat: 0, standing: 25000, url: convertToSnakeCase('Abating Link'), rank: 0 },
    { name: 'Champions Blessing', plat: 0, standing: 25000, url: convertToSnakeCase('Champions Blessing'), rank: 0 },
    { name: 'Swing Line', plat: 0, standing: 25000, url: convertToSnakeCase('Swing Line'), rank: 0 },
    { name: 'Eternal War', plat: 0, standing: 25000, url: convertToSnakeCase('Eternal War'), rank: 0 },
    { name: 'Prolonged Paralysis', plat: 0, standing: 25000, url: convertToSnakeCase('Prolonged Paralysis'), rank: 0 },
    { name: 'Hysterical Assault', plat: 0, standing: 25000, url: convertToSnakeCase('Hysterical Assault'), rank: 0 },
    { name: 'Enraged', plat: 0, standing: 25000, url: convertToSnakeCase('Enraged'), rank: 0 },
    { name: 'Fused Reservoir', plat: 0, standing: 25000, url: convertToSnakeCase('Fused Reservoir'), rank: 0 },
    { name: 'Critical Surge', plat: 0, standing: 25000, url: convertToSnakeCase('Critical Surge'), rank: 0 },
    { name: 'Target Fixation', plat: 0, standing: 25000, url: convertToSnakeCase('Target Fixation'), rank: 0 },
    { name: 'Airburst Rounds', plat: 0, standing: 25000, url: convertToSnakeCase('Airburst Rounds'), rank: 0 },
    { name: 'Jet Stream', plat: 0, standing: 25000, url: convertToSnakeCase('Jet Stream'), rank: 0 },
    { name: 'Funnel Clouds', plat: 0, standing: 25000, url: convertToSnakeCase('Funnel Clouds'), rank: 0 },
    { name: 'Anchored Glide', plat: 0, standing: 25000, url: convertToSnakeCase('Anchored Glide'), rank: 0 },
    { name: 'Celestial Stomp', plat: 0, standing: 25000, url: convertToSnakeCase('Celestial Stomp'), rank: 0 },
    { name: 'Enveloping Cloud', plat: 0, standing: 25000, url: convertToSnakeCase('Enveloping Cloud'), rank: 0 },
    { name: 'Primal Rage', plat: 0, standing: 25000, url: convertToSnakeCase('Primal Rage'), rank: 0 },
    { name: 'Merulina Guardian', plat: 0, standing: 25000, url: convertToSnakeCase('Merulina Guardian'), rank: 0 },
    { name: 'Surging Blades', plat: 0, standing: 25000, url: convertToSnakeCase('Surging Blades'), rank: 0 },
    { name: 'Elusive Retribution', plat: 0, standing: 25000, url: convertToSnakeCase('Elusive Retribution'), rank: 0 },
];