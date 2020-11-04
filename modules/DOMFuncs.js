const [select, selectAll] = [(selector) => document.querySelector(selector), (selector) => document.querySelectorAll(selector)];

const setStyle = (elem, prop, value) => {
    if (Array.isArray(elem)) {
        elem.forEach((el, i) => {
            el.style[prop[i]] = value[i];
        });
    } else {
        elem.style[prop] = value;
    }
};

const classAction = (elem, action, classValue) => {
    if (Array.isArray(elem)) {
        elem.forEach((el, i) => {
            el.classList[action[i]] = classValue[i];
        });
    } else {
        elem.classList[action](classValue);
    }
};

const setProp = (elem, prop, value) => {
    if (Array.isArray(elem)) {
        elem.forEach((el, i) => {
            el[prop[i]] = value[i];
        });
    } else {
        if (!elem) return;
        elem[prop] = value;
    }
};

const insertHtml = (elem, where, html) => {
    if (Array.isArray(elem)) {
        elem.forEach((el, i) => {
            el.insertAdjacentHTML(where[i], html[i]);
        });
    } else {
        elem.insertAdjacentHTML(where, html);
    }
};

const event = (elem, type, callback) => {
    if (Array.isArray(elem)) {
        elem.forEach((el, i) => {
            el.addEventListener(type[i], callback[i]);
        });
    } else {
        elem.addEventListener(type, callback);
    }
};

export {
    setStyle,
    setProp,
    insertHtml,
    classAction,
    event,
    select,
    selectAll,
};
