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
    const cephPromises = cephList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(cephPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(cephList);
            let sortedList = sortByRatioDescending(cephList)
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
let cephList = [
    { name: 'Loyal Merulina', plat: 0, standing: 25000, url: convertToSnakeCase('Loyal Merulina'), rank: 0 },
    { name: 'Divine Retribution', plat: 0, standing: 25000, url: convertToSnakeCase('Divine Retribution'), rank: 0 },
    { name: 'Entropy Spike', plat: 0, standing: 25000, url: convertToSnakeCase('Entropy Spike'), rank: 0 },
    { name: 'Entropy Flight', plat: 0, standing: 25000, url: convertToSnakeCase('Entropy Flight'), rank: 0 },
    { name: 'Entropy Detonation', plat: 0, standing: 25000, url: convertToSnakeCase('Entropy Detonation'), rank: 0 },
    { name: 'Entropy Burst', plat: 0, standing: 25000, url: convertToSnakeCase('Entropy Burst'), rank: 0 },
    { name: 'Sonic Fracture', plat: 0, standing: 25000, url: convertToSnakeCase('Sonic Fracture'), rank: 0 },
    { name: 'Resonance', plat: 0, standing: 25000, url: convertToSnakeCase('Resonance'), rank: 0 },
    { name: 'Savage Silence', plat: 0, standing: 25000, url: convertToSnakeCase('Savage Silence'), rank: 0 },
    { name: 'Resonating Quake', plat: 0, standing: 25000, url: convertToSnakeCase('Resonating Quake'), rank: 0 },
    { name: 'Afterburn', plat: 0, standing: 25000, url: convertToSnakeCase('Afterburn'), rank: 0 },
    { name: 'Everlasting Ward', plat: 0, standing: 25000, url: convertToSnakeCase('Everlasting Ward'), rank: 0 },
    { name: 'Vexing Retaliation', plat: 0, standing: 25000, url: convertToSnakeCase('Vexing Retaliation'), rank: 0 },
    { name: 'Guided Effigy', plat: 0, standing: 25000, url: convertToSnakeCase('Guided Effigy'), rank: 0 },
    { name: 'Freeze Force', plat: 0, standing: 25000, url: convertToSnakeCase('Freeze Force'), rank: 0 },
    { name: 'Ice Wave Impedance', plat: 0, standing: 25000, url: convertToSnakeCase('Ice Wave Impedance'), rank: 0 },
    { name: 'Chilling Globe', plat: 0, standing: 25000, url: convertToSnakeCase('Chilling Globe'), rank: 0 },
    { name: 'Icy Avalanche', plat: 0, standing: 25000, url: convertToSnakeCase('Icy Avalanche'), rank: 0 },
    { name: 'Biting Frost', plat: 0, standing: 25000, url: convertToSnakeCase('Biting Frost'), rank: 0 },
    { name: 'Balefire Surge', plat: 0, standing: 25000, url: convertToSnakeCase('Balefire Surge'), rank: 0 },
    { name: 'Blazing Pillage', plat: 0, standing: 25000, url: convertToSnakeCase('Blazing Pillage'), rank: 0 },
    { name: 'Corroding Barrage', plat: 0, standing: 25000, url: convertToSnakeCase('Corroding Barrage'), rank: 0 },
    { name: 'Tidal Impunity', plat: 0, standing: 25000, url: convertToSnakeCase('Tidal Impunity'), rank: 0 },
    { name: 'Curative Undertow', plat: 0, standing: 25000, url: convertToSnakeCase('Curative Undertow'), rank: 0 },
    { name: 'Pilfering Swarm', plat: 0, standing: 25000, url: convertToSnakeCase('Pilfering Swarm'), rank: 0 },
    { name: 'Empowered Quiver', plat: 0, standing: 25000, url: convertToSnakeCase('Empowered Quiver'), rank: 0 },
    { name: 'Piercing Navigator', plat: 0, standing: 25000, url: convertToSnakeCase('Piercing Navigator'), rank: 0 },
    { name: 'Infiltrate', plat: 0, standing: 25000, url: convertToSnakeCase('Infiltrate'), rank: 0 },
    { name: 'Concentrated Arrow', plat: 0, standing: 25000, url: convertToSnakeCase('Concentrated Arrow'), rank: 0 },
    { name: 'Rift Haven', plat: 0, standing: 25000, url: convertToSnakeCase('Rift Haven'), rank: 0 },
    { name: 'Rift Torrent', plat: 0, standing: 25000, url: convertToSnakeCase('Rift Torrent'), rank: 0 },
    { name: 'Cataclysmic Continuum', plat: 0, standing: 25000, url: convertToSnakeCase('Cataclysmic Continuum'), rank: 0 },
    { name: 'Hall of Malevolence', plat: 0, standing: 25000, url: convertToSnakeCase('Hall of Malevolence'), rank: 0 },
    { name: 'Explosive Legerdemain', plat: 0, standing: 25000, url: convertToSnakeCase('Explosive Legerdemain'), rank: 0 },
    { name: 'Total Eclipse', plat: 0, standing: 25000, url: convertToSnakeCase('Total Eclipse'), rank: 0 },
    { name: 'Pyroclastic Flow', plat: 0, standing: 25000, url: convertToSnakeCase('Pyroclastic Flow'), rank: 0 },
    { name: 'Reaping Chakram', plat: 0, standing: 25000, url: convertToSnakeCase('Reaping Chakram'), rank: 0 },
    { name: 'Safeguard', plat: 0, standing: 25000, url: convertToSnakeCase('Safeguard'), rank: 0 },
    { name: 'Controlled Slide', plat: 0, standing: 25000, url: convertToSnakeCase('Controlled Slide'), rank: 0 },
    { name: 'Neutron Star', plat: 0, standing: 25000, url: convertToSnakeCase('Neutron Star'), rank: 0 },
    { name: 'Antimatter Absorb', plat: 0, standing: 25000, url: convertToSnakeCase('Antimatter Absorb'), rank: 0 },
    { name: 'Escape Velocity', plat: 0, standing: 25000, url: convertToSnakeCase('Escape Velocity'), rank: 0 },
    { name: 'Molecular Fission', plat: 0, standing: 25000, url: convertToSnakeCase('Molecular Fission'), rank: 0 },
    { name: 'Partitioned Mallet', plat: 0, standing: 25000, url: convertToSnakeCase('Partitioned Mallet'), rank: 0 },
    { name: 'Conductor', plat: 0, standing: 25000, url: convertToSnakeCase('Conductor'), rank: 0 },
    { name: 'Thrall Pact', plat: 0, standing: 25000, url: convertToSnakeCase('Thrall Pact'), rank: 0 },
    { name: 'Mesmer Shield', plat: 0, standing: 25000, url: convertToSnakeCase('Mesmer Shield'), rank: 0 },
    { name: 'Blinding Reave', plat: 0, standing: 25000, url: convertToSnakeCase('Blinding Reave'), rank: 0 },
    { name: 'Tesla Bank', plat: 0, standing: 25000, url: convertToSnakeCase('Tesla Bank'), rank: 0 },
    { name: 'Repelling Bastille', plat: 0, standing: 25000, url: convertToSnakeCase('Repelling Bastille'), rank: 0 },
    { name: 'Photon Repeater', plat: 0, standing: 25000, url: convertToSnakeCase('Photon Repeater'), rank: 0 },
    { name: 'Fused Reservoir', plat: 0, standing: 25000, url: convertToSnakeCase('Fused Reservoir'), rank: 0 },
    { name: 'Critical Surge', plat: 0, standing: 25000, url: convertToSnakeCase('Critical Surge'), rank: 0 },
    { name: 'Vampiric Grasp', plat: 0, standing: 25000, url: convertToSnakeCase('Vampiric Grasp'), rank: 0 },
    { name: 'The Relentless Lost', plat: 0, standing: 25000, url: convertToSnakeCase('The Relentless Lost'), rank: 0 },
    { name: 'Merulina Guardian', plat: 0, standing: 25000, url: convertToSnakeCase('Merulina Guardian'), rank: 0 },
    { name: 'Surging Blades', plat: 0, standing: 25000, url: convertToSnakeCase('Surging Blades'), rank: 0 },
    { name: 'Guardian Armor', plat: 0, standing: 25000, url: convertToSnakeCase('Guardian Armor'), rank: 0 },
];