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
    { name: 'Exodia Brave (Hok)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Exodia Brave'), rank: 3 },
    { name: 'Exodia Valor (Hok)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Exodia Valor'), rank: 3 },
    { name: 'Exodia Might (Hok)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Exodia Might'), rank: 3 },
    { name: 'Exodia Triumph (Hok)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Exodia Triumph'), rank: 3 },
    { name: 'Exodia Hunt (Hok)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Exodia Hunt'), rank: 3 },
    { name: 'Exodia Force (Hok)', plat: 0, standing: 10000 * 10, url: convertToSnakeCase('Exodia Force'), rank: 3 },
    { name: 'Restorative Bond (Teasonai)', plat: 0, standing: 10000, url: convertToSnakeCase('Restorative Bond'), rank: 0 },
    { name: 'Manifold Bond (Teasonai)', plat: 0, standing: 10000, url: convertToSnakeCase('Manifold Bond'), rank: 0 },
    { name: 'Covert Bond (Teasonai)', plat: 0, standing: 10000, url: convertToSnakeCase('Covert Bond'), rank: 0 },
    { name: 'Mystic Bond (Teasonai)', plat: 0, standing: 10000, url: convertToSnakeCase('Mystic Bond'), rank: 0 },
    { name: 'Tandem Bond (Teasonai)', plat: 0, standing: 10000, url: convertToSnakeCase('Tandem Bond'), rank: 0 },
];