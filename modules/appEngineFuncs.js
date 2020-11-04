const grabFirstPart = (string) => string.split('-')[0];

const repeat = (value, count) => {
    const res = [];
    for (let i = 0; i < count; i++) {
        res.push(value);
    }
    return res;
};

const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

export {
    grabFirstPart,
    repeat,
    capitalize,
};
