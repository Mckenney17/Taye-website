import {
    generateOrderID,
    structureWhatsAppMessage,
} from './appEngineFuncs.js';
import {
    getOrderInputs,
} from './orderFormUIFuncs.js';
import DOMElems from './DOMElems.js';
import {
    classAction,
    event,
    insertHtml,
    select,
    setProp,
    setStyle,
} from './DOMFuncs.js';
import {
    thankYouModal,
} from './htmlBoilerPlate.js';
const {
    container,
} = DOMElems;

const thankUser = () => {
    const orderID = generateOrderID(getOrderInputs());
    const message = escape(structureWhatsAppMessage(getOrderInputs()).trim());
    insertHtml(container, 'beforeend', thankYouModal({
        orderID,
        message,
    }));
    setStyle(select('.pop-up-page'), 'display', 'flex');
    setTimeout(() => {
        setStyle(select('.pop-up-page'), 'opacity', '1');
    }, 1);
    event(select('.pop-up-page a'), 'click', () => {
        setProp(select('.pop-up-page'), 'outerHTML', '');
    });
};

export default thankUser;
