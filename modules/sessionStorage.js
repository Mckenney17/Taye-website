const dishStorage = new Map();

const setDish = (type, dish) => {
    dishStorage.set(`${type}-dish`, dish);
};

const getDish = (type) => {
    dishStorage?.get(`${type}-dish`);
};

export {
    setDish,
    getDish,
};
