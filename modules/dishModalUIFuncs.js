import {
    repeat,
} from './appEngineFuncs.js';
import {
    event,
    select,
    selectAll,
    setProp,
    setStyle,
} from './DOMFuncs.js';

const implementSearch = (dishType) => {
    const searchInput = select(`#${dishType}-dish-search-input`);
    event(searchInput, 'input', (ev) => {
        [...selectAll('.dish-name')]
        .filter((elem) => !elem.textContent.toLowerCase().startsWith(searchInput.value.toLowerCase()))
            .forEach((elem) => {
                setStyle(elem.parentElement, 'display', 'none');
            });

        [...selectAll('.dish-name')]
        .filter((elem) => elem.textContent.toLowerCase().startsWith(searchInput.value.toLowerCase()))
            .forEach((elem) => {
                setStyle(elem.parentElement, 'display', 'flex');
            });
    });
};

const pushToSearch = (dishName, dishType) => {
    const searchInput = select(`#${dishType}-dish-search-input`);
    setProp([...repeat(searchInput, 2)], [...repeat('value', 2)], ['', Array.isArray(dishName) ? dishName.join(', ') : dishName]);
};

export {
    implementSearch,
    pushToSearch,
};
