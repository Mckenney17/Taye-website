import { select, selectAll } from './DOMFuncs.js';

const DOMElems = {
    container: select('.container'),
    getStartedBtn: select('.get-started'),
    orderNowMobileBtn: select('#order-now-mobile'),
    orderNowLargeBtn: select('#order-now-large'),
    orderForm: select('.landing-contents .item-2'),
    mainDishInput: select('#main-dish'),
    sideDishInput: select('#side-dish'),
    mainDishAmountInput: select('#main-dish-amount'),
    sideDishAmountInput: select('#side-dish-amount'),
    dishSelectorModal: select('.dish-list'),
    errorNotice: select('.order-form .notice'),
    placeOrderBtn: select('.order-form button[type="submit"]'),
    howItWorksSection: select('.how-it-works-section'),
    dishSelectorBtn: selectAll('.field span[id*=trigger]'),
};

export default DOMElems;
