import { capitalize } from './appEngineFuncs.js';

const dishSelectorModal = (dishType) => `
    <div class="dish-list" id="${dishType}-dish-list">
        <div class="search-bar">
            <input type="text" id='${dishType}-dish-search-input' placeholder="${capitalize(dishType)} Dish">
            <button class='set-dish' id='set-${dishType}-dish'>SET</button>
        </div>
    </div>
`;

const dishItem = (dishName) => `
    <div class="dish" id="${dishName}-dish-div">
        <p class="dish-name" id='${dishName}'>${capitalize(dishName)}</p>
        <span class='dish-selector' id='${dishName}-select'></span>
    </div>
`;

const thankYouModal = (orderID, referLink) => `
    <div class="pop-up-page">
        <span class="screw"></span>
        <span class="screw"></span>
        <span class="screw"></span>
        <span class="screw"></span>

        <img src="./img/logo.png" alt="">
        <div class="image-cont"></div>
        <p>Thank <span>You</span></p>
        <p>Complete your Order via <span>WhatsApp Chat</span></p>
        <a href="${referLink}">Click to Continue</a>
        <p>Your <span>Order ID</span>: ${orderID}</p>
    </div>
`;

export {
    dishSelectorModal,
    dishItem,
    thankYouModal,
};