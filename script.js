function getOrder(url){
    fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data
            // console.log(data);
            sortData(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}

function sortData(data){
    // Grab orders and store
    let orders = data.payload.orders;

    console.log(orders);

    // Filter orders based on the user status and order type of sell
    let filteredOrders = orders.filter(order => order.user.status === "ingame" && order.order_type === "sell");

    // Sort orders from lowest to highest based on platinum value
    filteredOrders.sort((a, b) => a.platinum - b.platinum);

    // Grab the cheapest 5 orders
    topFiveOrders = filteredOrders.slice(0, 5);

    topFiveOrders.forEach(order => {
        console.log("Plat", order.platinum)
    })
}

// FORTUNA
getOrder('https://api.warframe.market/v1/items/aerial_bond/orders');