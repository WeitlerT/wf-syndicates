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
    { name: 'Damzav Vati (Father)', plat: 0, standing: 20000, url: convertToSnakeCase('Damzav Vati'), rank: 0 },
    { name: 'Zazvat Kar (Father)', plat: 0, standing: 20000, url: convertToSnakeCase('Zazvat Kar'), rank: 0 },
    { name: 'Bhisaj Bal (Father)', plat: 0, standing: 20000, url: convertToSnakeCase('Bhisaj Bal'), rank: 0 },
    { name: 'Hata Satya (Father)', plat: 0, standing: 20000, url: convertToSnakeCase('Hata Satya'), rank: 0 },
    { name: 'Vicious Bond (Son)', plat: 0, standing: 20000, url: convertToSnakeCase('Vicious Bond'), rank: 0 },
    { name: 'Contagious Bond (Son)', plat: 0, standing: 20000, url: convertToSnakeCase('Contagious Bond'), rank: 0 },
    { name: 'Duplex Bond (Son)', plat: 0, standing: 20000, url: convertToSnakeCase('Duplex Bond'), rank: 0 },
    { name: 'Martyr Symbiosis (Son)', plat: 0, standing: 20000, url: convertToSnakeCase('Martyr Symbiosis'), rank: 0 },
    { name: 'Volatile Parasite (Son)', plat: 0, standing: 20000, url: convertToSnakeCase('Volatile Parasite'), rank: 0 },
];