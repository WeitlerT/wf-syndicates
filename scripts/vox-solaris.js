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
    const voxPromises = voxList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(voxPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(voxList);
            let sortedList = sortByRatioDescending(voxList)
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
let voxList = [
    { name: 'Virtuos Surge', plat: 0, standing: 5000 * 10, url: convertToSnakeCase('Virtuos Surge'), rank: 3 },
    { name: 'Virtuos Spike', plat: 0, standing: 5000 * 10, url: convertToSnakeCase('Virtuos Spike'), rank: 3 },
    { name: 'Virtuos Forge', plat: 0, standing: 7500 * 10, url: convertToSnakeCase('Virtuos Forge'), rank: 3 },
    { name: 'Virtuos Trojan', plat: 0, standing: 7500 * 10, url: convertToSnakeCase('Virtuos Trojan'), rank: 3 },
    { name: 'Magus Anomaly', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Anomaly'), rank: 5 },
    { name: 'Magus Destruct', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Destruct'), rank: 5 },
    { name: 'Magus Lockdown', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Lockdown'), rank: 5 },
    { name: 'Magus Firewall', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Firewall'), rank: 5 },
    { name: 'Magus Drive', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Drive'), rank: 5 },
    { name: 'Magus Repair', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Repair'), rank: 5 },
    { name: 'Magus Melt', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Melt'), rank: 5 },
    { name: 'Magus Overload', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Overload'), rank: 5 },
    { name: 'Magus Accelerant', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Accelerant'), rank: 5 },
    { name: 'Magus Glitch', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Glitch'), rank: 5 },
    { name: 'Magus Revert', plat: 0, standing: 10000 * 21, url: convertToSnakeCase('Magus Revert'), rank: 5 },
];