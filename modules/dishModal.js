import {
    classAction,
    event,
    insertHtml,
    select,
    selectAll,
    setProp,
    setStyle,
} from './DOMFuncs.js';
import DOMElems from './DOMElems.js';
import {
    dishItem,
    dishSelectorModal,
} from './htmlBoilerPlate.js';
import { implementSearch, pushToSearch } from './dishModalUIFuncs.js';
const {
    container,
} = DOMElems;

const dishModal = (type, dishList) => {
    setProp(select('.dish-list'), 'outerHTML', '');
    insertHtml(container, 'beforeend', dishSelectorModal(type));
    setStyle(select('.dish-list'), 'display', 'block');
    setTimeout(() => {
        setStyle(select('.dish-list'), 'opacity', 1);
    }, 1);

    for (const dishName of dishList) {
        insertHtml(select(`#${type}-dish-list`), 'beforeend', dishItem(dishName));
        event(select(`#${dishName}-dish-div`), 'click', () => {
            if (type === 'main') {
                [...selectAll('.dish-selector')].map((sel) => classAction(sel, 'remove', `selected-${type}-dish`));
                classAction(select(`#${dishName}-select`), 'add', `selected-${type}-dish`);
                pushToSearch(select(`.selected-${type}-dish`).previousElementSibling.textContent, type);
            } else {
                classAction(select(`#${dishName}-select`), 'toggle', `selected-${type}-dish`);
                pushToSearch([...selectAll(`.selected-${type}-dish`)].map((el) => el.previousElementSibling.textContent), type);
            }
        });
    }

    implementSearch(type);
};

export default dishModal;
