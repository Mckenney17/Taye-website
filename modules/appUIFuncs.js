import { classAction, setStyle } from './DOMFuncs.js';
import DOMElems from './DOMElems.js';
import displayDishModal from './dishModal.js';
const { orderForm, howItWorksSection } = DOMElems;

const scrollToHowItWorks = () => {
    const position = howItWorksSection.getBoundingClientRect().y - 69;
    let count = position.y;
    const anim = () => {
        if (document.body.scrollTop >= position) return;
        document.body.scrollBy(0, 20);
        count--;
        requestAnimationFrame(anim);
    };
    anim();
};

const showOrderForm = () => {
    setStyle(orderForm, 'display', 'flex');
    setTimeout(() => {
        setStyle(orderForm, 'opacity', 1);
    }, 1);
};

const hideOrderForm = () => {
    classAction(orderForm, 'remove', 'modal-appear');
};

const showDishSelector = (type, dishList) => {
    displayDishModal(type, dishList);
};

const hideDishSelector = () => {

};

const setSelectedDish = (type, selectedDishes) => {

};

export {
    showOrderForm,
    showDishSelector,
    scrollToHowItWorks,
    hideOrderForm,
    hideDishSelector,
    setSelectedDish,
};
