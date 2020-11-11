import {
    generateOrderID,
    structureWhatsAppMessage,
} from '../../modules/appEngineFuncs.js';
import {
    getOrderInputs,
} from './orderFormUIFuncs.js';
import DOMElems from '../../modules/DOMElems.js';
import {
    event,
    insertHtml,
    select,
    setProp,
    setStyle,
} from '../../modules/DOMFuncs.js';
import {
    thankYouModal,
} from '../../modules/htmlBoilerPlate.js';
const {
    container,
} = DOMElems;

const thankUser = () => {
    const { mainDishAmount, sideDishAmount } = getOrderInputs();
    const orderID = generateOrderID(getOrderInputs());
    const message = escape(structureWhatsAppMessage(getOrderInputs()).trim());
    insertHtml(container, 'beforeend', thankYouModal({
        orderID,
        message,
        orderPrice: Number(mainDishAmount) + Number(sideDishAmount),
        deliveryPrice: 300,
        totalPrice: Number(mainDishAmount) + Number(sideDishAmount) + 300,
    }));
    setStyle(select('.pop-up-page'), 'display', 'flex');
    setStyle(select('.order-form'), 'display', 'none');
    setTimeout(() => {
        setStyle(select('.pop-up-page'), 'opacity', '1');
    }, 1);
    event(select('.pop-up-page a'), 'click', () => {
        setProp(select('.pop-up-page'), 'outerHTML', '');
        setStyle(select('.order-form'), 'display', 'block');
    });
};

export default thankUser;
