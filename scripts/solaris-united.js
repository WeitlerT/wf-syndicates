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
    const solarisPromises = solarisList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(solarisPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(solarisList);
            let sortedList = sortByRatioDescending(solarisList)
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
let solarisList = [
    { name: 'Pax Soar (Rude Zuud)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Pax Soar'), rank: 3 },
    { name: 'Pax Charge (Rude Zuud)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Pax Charge'), rank: 3 },
    { name: 'Pax Bolt (Rude Zuud)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Pax Bolt'), rank: 3 },
    { name: 'Pax Seeker (Rude Zuud)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Pax Seeker'), rank: 3 },
    { name: 'Reinforced Bond (The Business)', plat: 0, standing: 20000, url: convertToSnakeCase('Reinforced Bond'), rank: 0 },
    { name: 'Aerial Bond (The Business)', plat: 0, standing: 20000, url: convertToSnakeCase('Aerial Bond'), rank: 0 },
    { name: 'Momentous Bond (The Business)', plat: 0, standing: 20000, url: convertToSnakeCase('Momentous Bond'), rank: 0 },
    { name: 'Reinforced Bond (The Business)', plat: 0, standing: 20000, url: convertToSnakeCase('Tenacious Bond'), rank: 0 },
    { name: 'Astral Bond (The Business)', plat: 0, standing: 20000, url: convertToSnakeCase('Astral Bond'), rank: 0 },
];