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

    // Check if container is empty
    if (container.innerHTML.trim() !== '') {
        // Clear the contents of the container div
        container.innerHTML = '';
    }
    
    // Replace list with whatever list you have for page
    const cephSimPromises = cephSimList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(cephSimPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(cephSimList);
            let sortedList = sortByRatioDescending(cephSimList)
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
let cephSimList = [
    { name: 'Looter', plat: 0, standing: 75000, url: convertToSnakeCase('Looter'), rank: 0 },
    { name: 'Detect Vulnerability', plat: 0, standing: 75000, url: convertToSnakeCase('Detect Vulnerability'), rank: 0 },
    { name: 'Reawaken', plat: 0, standing: 75000, url: convertToSnakeCase('Reawaken'), rank: 0 },
    { name: 'Negate', plat: 0, standing: 75000, url: convertToSnakeCase('Negate'), rank: 0 },
    { name: 'Ambush', plat: 0, standing: 75000, url: convertToSnakeCase('Ambush'), rank: 0 },
    { name: 'Energy Generator', plat: 0, standing: 75000, url: convertToSnakeCase('Energy Generator'), rank: 0 },
    { name: 'Botanist', plat: 0, standing: 75000, url: convertToSnakeCase('Botanist'), rank: 0 },
    { name: 'Energy Conversion', plat: 0, standing: 100000, url: convertToSnakeCase('Energy Conversion'), rank: 0 },
    { name: 'Health Conversion', plat: 0, standing: 100000, url: convertToSnakeCase('Health Conversion'), rank: 0 },
    { name: 'Astral Autopsy', plat: 0, standing: 100000, url: convertToSnakeCase('Astral Autopsy'), rank: 0 },
];