import DOMElems from '../../modules/DOMElems.js';
import {
    setProp,
} from '../../modules/DOMFuncs.js';
const {
    fullNameInput,
    phoneNumberInput,
    emailInput,
    fullAddressInput,
    mainDishInput,
    sideDishInput,
    mainDishAmountInput,
    sideDishAmountInput,
} = DOMElems;

const setSelectedDish = (type, selectedDishes) => {
    setProp(type === 'main' ? mainDishInput : sideDishInput, 'value', selectedDishes);
};

const getOrderInputs = () => ({
    fullName: fullNameInput.value,
    phoneNumber: phoneNumberInput.value,
    email: emailInput.value,
    fullAddress: fullAddressInput.value,
    mainDish: mainDishInput.value,
    mainDishAmount: mainDishAmountInput.value,
    sideDish: sideDishInput.value,
    sideDishAmount: sideDishAmountInput.value,
});

export {
    setSelectedDish,
    getOrderInputs,
};
