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
    orderNowLargeBtn,
    orderNowMiddleBtn,
    orderFormActual,
} = DOMElems;

event(
    [
        orderNowMobileBtn,
        getStartedBtn,
        menuBtn,
        orderNowLargeBtn,
        orderNowMiddleBtn,
        orderFormActual,
    ],
    [
        ...repeat('click', 5),
        'submit',
    ],
    [
        showOrderForm,
        scrollToHowItWorks,
        toggleMenu,
        ...repeat(
            () => {
                document.body.scrollTo(0, 0);
            },
            2,
        ),
        (ev) => {
            ev.preventDefault();
            thankUser();
        },
    ],
);

for (const btn of dishSelectorBtn) {
    event(btn, 'click', () => {
        showDishSelector(grabFirstPart(btn.id), getDishList(grabFirstPart(btn.id)));
    });
}

implementTestimonials();

implementStarRating();
