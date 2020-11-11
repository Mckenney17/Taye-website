import { select, selectAll } from './DOMFuncs.js';

const DOMElems = {
    container: select('.container'),
    menuBtn: select('.hamburger'),
    menu: select('.nav'),
    getStartedBtn: select('.get-started'),
    orderNowLargeBtn: select('#order-now-large'),
    orderNowMiddleBtn: select('#order-now-middle'),
    orderForm: select('.landing-contents .item-2'),
    dishSelectorModal: select('.dish-list'),
    errorNotice: select('.order-form .notice'),
    orderFormActual: select('.order-form form'),
    placeOrderBtn: select('.order-form button[type="submit"]'),
    howItWorksSection: select('.how-it-works-section'),
    dishSelectorBtn: selectAll('.field span[id*=trigger]'),
    testimonialsCont: select('.testimonials-cont'),
    sliderIndicator: select('.caro-nav'),
    starRating: selectAll('.review-service i'),
    starRatingInputValue: select('input#star-rating'),


    fullNameInput: select('.order-form input#fullname'),
    phoneNumberInput: select('.order-form input#phonenumber'),
    emailInput: select('.order-form input#email'),
    fullAddressInput: select('.order-form input#fulladdress'),
    mainDishInput: select('.order-form input#main-dish'),
    sideDishInput: select('.order-form input#side-dish'),
    mainDishAmountInput: select('.order-form input#main-dish-amount'),
    sideDishAmountInput: select('.order-form input#side-dish-amount'),
};

export default DOMElems;
