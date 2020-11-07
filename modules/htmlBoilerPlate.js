import {
    capitalize,
} from './appEngineFuncs.js';

const dishSelectorModal = (dishType) => `
    <div class="dish-list" id="${dishType}-dish-list">
        <div class="search-bar">
            <input type="text" id='${dishType}-dish-search-input' placeholder="${capitalize(dishType)} Dish">
            <button class='set-dish' id='set-${dishType}-dish'>SET</button>
        </div>
    </div>
`;
const dishItem = (dishName) => {
    const asId = dishName.split(/\W+/gu).join('');
    return `<div class="dish" id="${asId}-dish-div">
        <p class="dish-name" id='${asId}'>${capitalize(dishName)}</p>
        <span class='dish-selector' id='${asId}-select'></span>
    </div>
`;
};

const thankYouModal = ({
    orderID,
    message,
    orderPrice,
    deliveryPrice,
    totalPrice,
}) => `
    <div class="pop-up-page">
        <span class="screw"></span>
        <span class="screw"></span>
        <span class="screw"></span>
        <span class="screw"></span>

        <img src="./img/logo.png" alt="">
        <div class="image-cont"></div>
        <p>Thank <span>You</span></p>
        <p>Complete your Order via <span>WhatsApp Chat</span></p>
        <p>Order Price: <span>${orderPrice}</span>, Delivery Price: <span>${deliveryPrice}</span><br>Total Price: <span>${totalPrice} Naira</span></p>
        <a href="https://api.whatsapp.com/send?phone=2348130768048&text=${message}">Click to Continue</a>
        <p>Your <span>Order ID</span>: ${orderID}</p>
    </div>
`;

const testimonyCont = (count) => `
    <div class="testimonial swiper-slide" id="testimonial-${count}">
        
    </div>
`;

const testimonyBody = ({
    testifierId,
    testimonyContent,
    testifierName,
    testifierImg,
}) => `
    <div class="testimony">
        <span>“</span>
        <p class="testimony-content">${testimonyContent}
            <span class='test-info'>
                <span style="background-image: url(${testifierImg});" class='test-pic'></span>
                <span class='test-name'>${testifierName}</span>
                <span class='test-star' id="test-star-testifier-${testifierId}">
                    
                </span>
            </span>
        </p>
    </div>
`;


export {
    dishSelectorModal,
    dishItem,
    thankYouModal,
    testimonyCont,
    testimonyBody,
};
