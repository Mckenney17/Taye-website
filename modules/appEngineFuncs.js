const grabFirstPart = (string) => string.split('-')[0];

const repeat = (value, count) => {
    const res = [];
    for (let i = 0; i < count; i++) {
        res.push(value);
    }
    return res;
};

const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

const generateOrderID = ({ fullName, phoneNumber }) => {
    const name = fullName.substr(0, 7);
    const pn = phoneNumber.substr(0, 7);
    const combo = [];
    for (let i = 0; i < name.length; i++) {
        combo.push(name[i]);
        combo.push(pn[i]);
    }
    return combo.map((v) => v.codePointAt().toString(16)).join('');
};

const structureWhatsAppMessage = ({
    fullName,
    phoneNumber,
    email,
    fullAddress,
    mainDish,
    mainDishAmount,
    sideDish,
    sideDishAmount,
}) => `
Order ID: ${generateOrderID({ fullName, phoneNumber })}

Name: ${fullName}

Phone Number: ${phoneNumber}

Email: ${email}

Address: ${fullAddress}

Main Dish: ${mainDish}
Main Dish Amount: ${mainDishAmount} Naira

Side Dish: ${sideDish}
Side Dish Amount: ${sideDishAmount} Naira
`;

export {
    grabFirstPart,
    repeat,
    capitalize,
    structureWhatsAppMessage,
    generateOrderID,
};
