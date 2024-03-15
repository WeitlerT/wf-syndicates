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
    const kahlPromises = kahlList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(kahlPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(kahlList);
            let sortedList = sortByRatioDescending(kahlList)
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
let kahlList = [
    { name: 'Archon Continuity', plat: 0, standing: 40, url: convertToSnakeCase('Archon Continuity'), rank: 0 },
    { name: 'Archon Stretch', plat: 0, standing: 40, url: convertToSnakeCase('Archon Stretch'), rank: 0 },
    { name: 'Archon Intensify', plat: 0, standing: 40, url: convertToSnakeCase('Archon Intensify'), rank: 0 },
    { name: 'Archon Vitality', plat: 0, standing: 40, url: convertToSnakeCase('Archon Vitality'), rank: 0 },
    { name: 'Archon Flow', plat: 0, standing: 40, url: convertToSnakeCase('Archon Flow'), rank: 0 },
];