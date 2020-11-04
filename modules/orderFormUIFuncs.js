import DOMElems from './DOMElems.js';
import { setProp } from './DOMFuncs.js';
const { mainDishInput, sideDishInput } = DOMElems;

const setSelectedDish = (type, selectedDishes) => {
    setProp(type === 'main' ? mainDishInput : sideDishInput, 'value', selectedDishes);
};

export default setSelectedDish;
