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
    const holdfastsPromises = holdfastsList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(holdfastsPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(holdfastsList);
            let sortedList = sortByRatioDescending(holdfastsList)
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
let holdfastsList = [
    { name: 'Eternal Eradicate', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Eternal Eradicate'), rank: 5 },
    { name: 'Cascadia Accuracy', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Cascadia Accuracy'), rank: 5 },
    { name: 'Fractalized Reset', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Fractalized Reset'), rank: 5 },
    { name: 'Molt Vigor', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Molt Vigor'), rank: 5 },
    { name: 'Emergence Savior', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Emergence Savior'), rank: 5 },
    { name: 'Eternal Onslaught', plat: 0, standing: 5500 * 21, url: convertToSnakeCase('Eternal Onslaught'), rank: 5 },
    { name: 'Cascadia Flare', plat: 0, standing: 5500 * 21, url: convertToSnakeCase('Cascadia Flare'), rank: 5 },
    { name: 'Cascadia Empowered', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Cascadia Empowered'), rank: 5 },
    { name: 'Molt Efficiency', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Molt Efficiency'), rank: 5 },
    { name: 'Emergence Renewed', plat: 0, standing: 7500 * 21, url: convertToSnakeCase('Emergence Renewed'), rank: 5 },
    { name: 'Molt Reconstruct', plat: 0, standing: 8500 * 21, url: convertToSnakeCase('Molt Reconstruct'), rank: 5 },
    { name: 'Eternal Logistics', plat: 0, standing: 8500 * 21, url: convertToSnakeCase('Eternal Logistics'), rank: 5 },
    { name: 'Cascadia Overcharge', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Cascadia Overcharge'), rank: 5 },
    { name: 'Emergence Dissipate', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Emergence Dissipate'), rank: 5 },
    { name: 'Molt Augmented', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Molt Augmented'), rank: 5 },
];