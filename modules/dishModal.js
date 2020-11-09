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
import { getDish, setDish } from './sessionStorage.js';
import { setSelectedDish } from './orderFormUIFuncs.js';
const {
    container,
} = DOMElems;
const removeExistingDishModal = () => {
    setProp(select('.dish-list'), 'outerHTML', '');
};

const dishModal = (type, dishList) => {
    removeExistingDishModal();
    insertHtml(container, 'beforeend', dishSelectorModal(type));
    setStyle(select('.dish-list'), 'display', 'block');
    setTimeout(() => {
        setStyle(select('.dish-list'), 'opacity', 1);
    }, 1);

    for (const dishName of dishList) {
        insertHtml(select(`#${type}-dish-list-cont`), 'beforeend', dishItem(dishName));
        const asId = dishName.split(/\W+/gu).join('');
        event(select(`#${asId}-dish-div`), 'click', () => {
            if (type === 'main') {
                [...selectAll('.dish-selector')].map((sel) => classAction(sel, 'remove', `selected-${type}-dish`));
                classAction(select(`#${asId}-select`), 'add', `selected-${type}-dish`);
                pushToSearch(select(`.selected-${type}-dish`).previousElementSibling.textContent, type);
            } else {
                classAction(select(`#${asId}-select`), 'toggle', `selected-${type}-dish`);
                pushToSearch([...selectAll(`.selected-${type}-dish`)].map((el) => el.previousElementSibling.textContent), type);
            }
        });
    }

    implementSearch(type);

    const dish = getDish(type);
    if (dish) {
        const allDishes = [...selectAll('.dish-name')];
        const searchInput = select(`#${type}-dish-search-input`);
        if (Array.isArray(dish)) {
            allDishes
            .filter((el) => dish.map((v) => v.toLowerCase()).includes(el.textContent.toLowerCase()))
            .map((el) => el.nextElementSibling.classList.add(`selected-${type}-dish`));
            setProp(searchInput, 'value', dish.join(', '));
        } else {
            allDishes
            .find((el) => el.textContent.toLowerCase() === dish.toLowerCase())
            ?.nextElementSibling.classList.add(`selected-${type}-dish`);
            setProp(searchInput, 'value', dish);
        }
    }

    event(select(`#set-${type}-dish`), 'click', () => {
        const dishes = select(`#${type}-dish-search-input`).value;
        setSelectedDish(type, dishes);
        setDish(type, dishes.includes(', ') ? dishes.split(', ') : dishes);
        removeExistingDishModal();
    });

    event(select('.dish-list').parentElement, 'click', (ev) => {
        if (ev.target.classList.contains('item-2')) removeExistingDishModal();
    });
};

export default dishModal;
