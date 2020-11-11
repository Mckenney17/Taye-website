import DOMElems from '../../modules/DOMElems.js';
import {
    event,
} from '../../modules/DOMFuncs.js';

import {
    grabFirstPart,
} from '../../modules/appEngineFuncs.js';

import {
    showDishSelector,
} from '../../modules/appUIFuncs.js';
import getDishList from '../../admin/updateFood.js';
import thankUser from '../modules/thankYou.js';

const {
    dishSelectorBtn,
    orderFormActual,
} = DOMElems;

event(orderFormActual, 'submit', (ev) => {
    ev.preventDefault();
    thankUser();
});

for (const btn of dishSelectorBtn) {
    event(btn, 'click', () => {
        showDishSelector(grabFirstPart(btn.id), getDishList(grabFirstPart(btn.id)));
    });
}
