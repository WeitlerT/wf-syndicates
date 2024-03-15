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

    // Check if container is empty
    if (container.innerHTML.trim() !== '') {
        // Clear the contents of the container div
        container.innerHTML = '';
    }
    
    // Replace list with whatever list you have for page
    const quillsPromises = quillsList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(quillsPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(quillsList);
            let sortedList = sortByRatioDescending(quillsList)
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
let quillsList = [
    { name: 'Magus Vigor', plat: 0, standing: 2500 * 21, url: convertToSnakeCase('Magus Vigor'), rank: 5 },
    { name: 'Virtuos Null', plat: 0, standing: 2500 * 10, url: convertToSnakeCase('Virtuos Null'), rank: 3 },
    { name: 'Magus Husk', plat: 0, standing: 5000 * 21, url: convertToSnakeCase('Magus Husk'), rank: 5 },
    { name: 'Virtuos Tempo', plat: 0, standing: 5000 * 10, url: convertToSnakeCase('Virtuos Tempo'), rank: 3 },
    { name: 'Virtuos Fury', plat: 0, standing: 7500 * 10, url: convertToSnakeCase('Virtuos Fury'), rank: 3 },
    { name: 'Magus Cloud', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Cloud'), rank: 5 },
    { name: 'Virtuos Strike', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Virtuos Strike'), rank: 3 },
    { name: 'Magus Cadence', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Cadence'), rank: 5 },
    { name: 'Magus Replenish', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Replenish'), rank: 5 },
    { name: 'Virtuos Shadow', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Virtuos Shadow'), rank: 3 },
    { name: 'Virtuos Ghost', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Virtuos Shadow'), rank: 3 },
    { name: 'Magus Elevate', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Elevate'), rank: 5 },
    { name: 'Magus Nourish', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Nourish'), rank: 5 },
];