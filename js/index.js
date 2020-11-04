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
} from '../modules/appUIFuncs.js';
import { getDishList } from '../admin/updateFood.js';

const {
    getStartedBtn,
    orderNowMobileBtn,
    dishSelectorBtn,
} = DOMElems;

event(
    [
        orderNowMobileBtn,
        getStartedBtn,
    ],
    [
        ...repeat('click', 2),
    ],
    [
        showOrderForm,
        scrollToHowItWorks,
    ],
);

for (const btn of dishSelectorBtn) {
    console.log(btn);
    event(btn, 'click', () => {
        console.log('Hi');
        showDishSelector(grabFirstPart(btn.id), getDishList(grabFirstPart(btn.id)));
    });
}
