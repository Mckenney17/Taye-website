const mainDishes = [
    'eba',
    'rice',
    'amala',
    'beans',
    'fufu',
];

const sideDishes = [
    'meat',
    'fish',
    'dodo',
];

const testimonies = [

];

const getDishList = (type) => (type === 'main' ? [...new Set(mainDishes)] : [...new Set(sideDishes)]);

export {
    getDishList,
    testimonies,
};
