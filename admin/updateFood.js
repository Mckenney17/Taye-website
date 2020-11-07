const mainDishes = [
    'Adalu',
    'Beans(Ewa)',
    'Ewa Aganyin',
    'Moi Moi',
    'Amala',
    'Amala lafun',
    'Asaro',
    'Eba',
    'Fufu',
    'Ikokore',
    'Ogi',
    'Semo',
    'Fried Rice',
    'Jollof Rice',
    'White Rice',
    'Tuwo Massara',
    'Tuwo Shinkafa',
];

const sideDishes = [
    'Akara',
    'Moi Moi',
    'Ekuru',
    'Coke',
    'Gin',
    'Fura',
    'Kunu',
    'Others(alcoholic)',
    'Others(non alcoholic)',
    'Palm Wine',
    'Pepsi',
    'Wine',
    'Soya Beans',
    'Yoghurt',
    'Zobo',
    'Asun',
    'Chicken',
    'Kilishi',
    'Nkwobi',
    'Suya',
    'Turkey',
    'Dodo',
    'Mosa',
    'Buns',
    'Cake',
    'Chocolate',
    'Chin Chin',
    'Coconut Candy',
    'Dundu',
    'Egg Roll',
    'French Fries',
    'Meat Pie/Mince Pie',
    'Ojojo',
    'Plantain chips',
    'Pizza',
    'Puff Puff',
    'Sausage Roll',
    'Small Chops',
    'Spring Roll',
    'Wara',
    'Banga soup',
    'Bitterleaf soup',
    'Draw soup (Okra&Ogbono)',
    'Efo Riro',
    'Efo Elegusi',
    'Egusi',
    'Ewedu',
    'Gbegiri',
    'Groundnut soup',
    'Ogbono',
    'Pepper soup',
];

const getDishList = (type) => (type === 'main' ? [...new Set(mainDishes)] : [...new Set(sideDishes)]);

export default getDishList;
