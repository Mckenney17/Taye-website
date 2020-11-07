import DOMElems from '../modules/DOMElems.js';
import {
    event,
} from '../modules/DOMFuncs.js';

import {
    grabFirstPart,
    repeat,
} from '../modules/appEngineFuncs.js';

import {
    scrollToHowItWorks,
    showDishSelector,
    showOrderForm,
    toggleMenu,
} from '../modules/appUIFuncs.js';
import getDishList from '../admin/updateFood.js';
import implementTestimonials from '../modules/testimonial.js';
import implementStarRating from '../modules/implementStarRating.js';
import thankUser from '../modules/thankYou.js';

const {
    getStartedBtn,
    orderNowMobileBtn,
    dishSelectorBtn,
    menuBtn,
    // orderFormActual,
    placeOrderBtn,
} = DOMElems;

event(
    [
        orderNowMobileBtn,
        getStartedBtn,
        menuBtn,
        // orderFormActual,
        placeOrderBtn,
    ],
    [
        ...repeat('click', 4),
        // 'submit',
    ],
    [
        showOrderForm,
        scrollToHowItWorks,
        toggleMenu,
        thankUser,
    ],
);

for (const btn of dishSelectorBtn) {
    event(btn, 'click', () => {
        showDishSelector(grabFirstPart(btn.id), getDishList(grabFirstPart(btn.id)));
    });
}

implementTestimonials();

implementStarRating();
