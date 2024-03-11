// IMPORTS
import { getAvgPlat } from "./main.js";
import { fetchDataAndUpdatePlat } from "./main.js";
import { populatePage } from "./main.js";
import { convertToSnakeCase } from "./main.js";
import { showLoadingIndicator } from "./main.js";
import { hideLoadingIndicator } from "./main.js";
import { sortByRatioDescending } from "./main.js";

// Fetch button, every page will have one of these
const fetchBtn = document.querySelector('.fetchDataBtn')
fetchBtn.addEventListener('click', function() {
    // Replace list with whatever list you have for page
    const caviaPromises = caviaList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(caviaPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(caviaList);
            let sortedList = sortByRatioDescending(caviaList)
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
let caviaList = [
    { name: 'Necramech Blitz', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Blitz'), rank: 0 },
    { name: 'Necramech Enemy Sense', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Enemy Sense'), rank: 0 },
    { name: 'Necramech Deflection', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Deflection'), rank: 0 },
    { name: 'Necramech Slipstream', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Slipstream'), rank: 0 },
    { name: 'Necramech Aviator', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Aviator'), rank: 0 },
    { name: 'Necramech Fury', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Fury'), rank: 0 },
    { name: 'Necramech Reach', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Reach'), rank: 0 },
    { name: 'Necramech Redirection', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Redirection'), rank: 0 },
    { name: 'Necramech Augur', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Augur'), rank: 0 },
    { name: 'Necramech Rebuke', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Rebuke'), rank: 0 },
    { name: 'Necramech Rage', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Rage'), rank: 0 },
    { name: 'Necramech Hydraulics', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Hydraulics'), rank: 0 },
    { name: 'Necramech Repair', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Repair'), rank: 0 },
    { name: 'Necramech Steel Fiber', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Steel Fiber'), rank: 0 },
    { name: 'Necramech Continuity', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Continuity'), rank: 0 },
    { name: 'Necramech Stretch', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Stretch'), rank: 0 },
    { name: 'Necramech Seismic Wave', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Seismic Wave'), rank: 0 },
    { name: 'Necramech Streamline', plat: 0, standing: 28000, url: convertToSnakeCase('Necramech Streamline'), rank: 0 },
    { name: 'Necramech Thrusters', plat: 0, standing: 28000, url: convertToSnakeCase('Necramech Thrusters'), rank: 0 },
    { name: 'Melee Retaliation', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Melee Retaliation'), rank: 5 },
    { name: 'Melee Fortification', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Melee Fortification'), rank: 5 },
    { name: 'Melee Exposure', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Melee Exposure'), rank: 5 },
    { name: 'Melee Influence', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Melee Influence'), rank: 5 },
    { name: 'Melee Animosity', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Melee Animosity'), rank: 5 },
    { name: 'Melee Vortex', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Melee Vortex'), rank: 5 },
];