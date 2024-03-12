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
    const entratiPromises = entratiList.map(item => fetchDataAndUpdatePlat(item));

    // Promise for our fetch function in main.js
    Promise.all(entratiPromises)
        .then(() => {
            // All fetch requests completed, and plat fields are updated
            console.log(entratiList);
            let sortedList = sortByRatioDescending(entratiList)
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
let entratiList = [
    { name: 'Damzav Vati', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Vitality'), rank: 0 },
    { name: 'Necramech Refuel', plat: 0, standing: 10000, url: convertToSnakeCase('Necramech Refuel'), rank: 0 },
    { name: 'Necramech Intensify', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Intensify'), rank: 0 },
    { name: 'Necramech Pressure Point', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Pressure Point'), rank: 0 },
    { name: 'Necramech Efficiency', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Efficiency'), rank: 0 },
    { name: 'Necramech Drift', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Drift'), rank: 0 },
    { name: 'Necramech Friction', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Friction'), rank: 0 },
    { name: 'Necramech Flow', plat: 0, standing: 25000, url: convertToSnakeCase('Necramech Flow'), rank: 0 },
];