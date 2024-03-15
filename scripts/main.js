// EXPORTS
export { getAvgPlat }
export { fetchDataAndUpdatePlat }
export { populatePage }
export { convertToSnakeCase }
export { showLoadingIndicator }
export { hideLoadingIndicator }
export { sortByRatioDescending }

// Func to grab avg plat value of a given order/item. We pass in rank mainly for arcanes
function getAvgPlat(data, rank){
    // Storing all data in a var
    let orders = data.payload.orders;

    // Filter orders based on the user status, order type, and mod rank
    let filteredOrders = orders.filter(order => order.user.status === "ingame" && order.order_type === "sell" && order.mod_rank === rank);

    // Sort orders from lowest to highest based on platinum value
    filteredOrders.sort((a, b) => a.platinum - b.platinum);

    // Grab the cheapest # of orders so we can calc our avg
    let cheapestOrders = filteredOrders.slice(0, 3);

    let cheapestAvg = 0;
    cheapestOrders.forEach(order => {
        // console.log("Plat", order.platinum)
        cheapestAvg = cheapestAvg + order.platinum;
    })
    cheapestAvg = Math.floor(cheapestAvg/cheapestOrders.length)
    // console.log(`Average cost for this item is ${cheapestAvg} plat`)
    return cheapestAvg; 
}

// Function to fetch data from the API and update the plat field
function fetchDataAndUpdatePlat(item, maxRetries = 10, delay = 1000) {
    // Show our loading toast while we wait for data to load
    showLoadingIndicator();

    // Our item url will get passed in here
    const url = `https://api.warframe.market/v1/items/${item.url}/orders`;
  
    const fetchData = async (url, retries) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const apiData = await response.json();
        // Get the avg plat for requested item. We will call our getAvgPlat func
        item.plat = getAvgPlat(apiData, item.rank);
      } catch (error) {
        // Since we can't request all data at once from api we wait then retry
        if (retries > 0) {
          console.error(`Error fetching data for ${item.url}. Retrying in ${delay / 1000} seconds...`, error);
          await new Promise(resolve => setTimeout(resolve, delay));
          await fetchData(url, retries - 1);
        } else {
          console.error(`Max retries exceeded for ${item.url}. Unable to fetch data.`, error);
          // Handle errors here if needed
        }
      }
    };
    return fetchData(url, maxRetries);
  }

function populatePage(list, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with id '${containerId}' not found.`);
        return;
    }

    // Loop through the list and create cards
    list.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        // OLD TITLE
        // const title = document.createElement('h3');
        // title.textContent = item.name;

        const titleLink = document.createElement('a');
        titleLink.href = `https://warframe.market/items/${item.url}`;
        titleLink.textContent = item.name;

        const platParagraph = document.createElement('p');
        platParagraph.textContent = `Plat Avg: ${item.plat}`;

        const standingParagraph = document.createElement('p');
        standingParagraph.textContent = `Standing: ${item.standing}`;

        const rankParagraph = document.createElement('p');
        rankParagraph.textContent = `Rank: ${item.rank}`;

        const platStandingParagraph = document.createElement('p');
        platStandingParagraph.textContent = `Plat:Stan Ratio: ${((item.plat / item.standing)* 10).toFixed(4)}`

        const platImg = document.createElement('img');
        platImg.src = '../images/PlatinumLarge.webp';
        platParagraph.appendChild(platImg);

        const standingImg = document.createElement('img');
        standingImg.src = '../images/ReputationLargeBlack.webp';
        standingParagraph.appendChild(standingImg);

        // Append elements to the card
        card.appendChild(titleLink);
        card.appendChild(platParagraph);
        card.appendChild(standingParagraph);
        card.appendChild(rankParagraph);
        card.appendChild(platStandingParagraph);

        // Append the card to the container
        container.appendChild(card);
    });
}

function convertToSnakeCase(inputString) {
    // Replace spaces with underscores, convert to lowercase
    return inputString.toLowerCase().replace(/\s+/g, '_');
}

function sortByRatioDescending(list) {
    return list.sort((a, b) => {
        const ratioA = (a.plat / a.standing) * 10;
        const ratioB = (b.plat / b.standing) * 10;

        return ratioB - ratioA;
    });
}

function showLoadingIndicator() {
    const loadingToast = document.getElementById('loadingToast');
    loadingToast.style.display = 'block';
    document.getElementById('loadingContainer').style.display = 'flex';
  }

function hideLoadingIndicator() {
    const loadingToast = document.getElementById('loadingToast');
    loadingToast.style.display = 'none';
    document.getElementById('loadingContainer').style.display = 'none';
  }

// Hide by default only show when loading data
hideLoadingIndicator()