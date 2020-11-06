import DOMElems from './DOMElems.js';
import { classAction, event, setProp } from './DOMFuncs.js';
const { starRating, starRatingInputValue } = DOMElems;
const implementStarRating = () => {
    for (const star of starRating) {
        event(star, 'click', (ev) => {
            [...starRating].map((st) => classAction(st, 'remove', 'picked'));
            const starNum = Number(ev.target.id.slice(-1));
            setProp(starRatingInputValue, 'value', starNum);
            for (let i = 0; i < starNum; i++) {
                classAction([...starRating][i], 'add', 'picked');
            }
        });
    }
};

export default implementStarRating;
