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
    const arbiPromises = arbiList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(arbiPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(arbiList);
            let sortedList = sortByRatioDescending(arbiList)
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
let arbiList = [
    { name: 'Sharpshooter', plat: 0, standing: 20, url: convertToSnakeCase('Sharpshooter'), rank: 0 },
    { name: 'Cautious Shot', plat: 0, standing: 20, url: convertToSnakeCase('Cautious Shot'), rank: 0 },
    { name: 'Power Donation', plat: 0, standing: 20, url: convertToSnakeCase('Power Donation'), rank: 0 },
    { name: 'Vigorous Swap', plat: 0, standing: 20, url: convertToSnakeCase('Vigorous Swap'), rank: 0 },
    { name: 'Rolling Guard', plat: 0, standing: 20, url: convertToSnakeCase('Rolling Guard'), rank: 0 },
    { name: 'Preparation', plat: 0, standing: 30, url: convertToSnakeCase('Preparation'), rank: 0 },
    { name: 'Aerial Ace', plat: 0, standing: 30, url: convertToSnakeCase('Aerial Ace'), rank: 0 },
    { name: 'Mending Shot', plat: 0, standing: 30, url: convertToSnakeCase('Mending Shot'), rank: 0 },
    { name: 'Energizing Shot', plat: 0, standing: 30, url: convertToSnakeCase('Energizing Shot'), rank: 0 },
    { name: 'Galvanized Acceleration', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Acceleration'), rank: 0 },
    { name: 'Galvanized Aptitude', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Aptitude'), rank: 0 },
    { name: 'Galvanized Chamber', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Chamber'), rank: 0 },
    { name: 'Galvanized Crosshairs', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Crosshairs'), rank: 0 },
    { name: 'Galvanized Diffusion', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Diffusion'), rank: 0 },
    { name: 'Galvanized Hell', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Hell'), rank: 0 },
    { name: 'Galvanized Savvy', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Savvy'), rank: 0 },
    { name: 'Galvanized Scope', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Scope'), rank: 0 },
    { name: 'Galvanized Shot', plat: 0, standing: 20, url: convertToSnakeCase('Galvanized Shot'), rank: 0 },
];