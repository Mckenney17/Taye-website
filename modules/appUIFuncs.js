import {
    classAction,
    event,
    setStyle,
} from './DOMFuncs.js';
import DOMElems from './DOMElems.js';
import displayDishModal from './dishModal.js';
const {
    orderForm,
    howItWorksSection,
    menuBtn,
    menu,
} = DOMElems;

const toggleMenu = () => {
    classAction(menuBtn, 'toggle', 'active');
    setStyle(menu, 'display', menuBtn.classList.contains('active') ? 'flex' : 'none');
};

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

const hideOrderForm = () => {
    setStyle(orderForm, 'opacity', 0);
    setTimeout(() => {
        setStyle(orderForm, 'display', 'none');
    }, 250);
};

const showOrderForm = () => {
    setStyle(orderForm, 'display', 'flex');
    setTimeout(() => {
        setStyle(orderForm, 'opacity', 1);
    }, 1);
    event(orderForm, 'click', (ev) => {
        if (window.screen.width <= 768) {
            if (ev.target.classList.contains('item-2')) hideOrderForm();
        }
    });
};

const showDishSelector = (type, dishList) => {
    displayDishModal(type, dishList);
};

export {
    showOrderForm,
    showDishSelector,
    scrollToHowItWorks,
    hideOrderForm,
    toggleMenu,
};
