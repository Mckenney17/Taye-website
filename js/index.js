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
import { getDishList } from '../admin/updateFood.js';

const {
    getStartedBtn,
    orderNowMobileBtn,
    dishSelectorBtn,
    menuBtn,
} = DOMElems;

event(
    [
        orderNowMobileBtn,
        getStartedBtn,
        menuBtn,
    ],
    [
        ...repeat('click', 3),
    ],
    [
        showOrderForm,
        scrollToHowItWorks,
        toggleMenu,
    ],
);

for (const btn of dishSelectorBtn) {
    event(btn, 'click', () => {
        showDishSelector(grabFirstPart(btn.id), getDishList(grabFirstPart(btn.id)));
    });
}
