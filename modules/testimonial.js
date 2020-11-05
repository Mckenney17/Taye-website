import testimonials from '../admin/updateTestimonials.js';
import DOMElems from './DOMElems.js';
import { insertHtml, select } from './DOMFuncs.js';
import { testimonyBody, testimonyCont } from './htmlBoilerPlate.js';
const { testimonialsCont } = DOMElems;

const chunk = (arr, amt) => {
    let ct = 0;
    return arr.reduce((acc, v) => {
        if (acc[ct].length >= amt) {
            acc.push([]);
            ct++;
            acc[ct].push(v);
        } else {
            acc[ct].push(v);
        }
        return acc;
    }, [[]]);
};

const implementStarRating = ({ star: filledStars, testifierName }) => {
    const emptyStars = 5 - filledStars;
    for (let j = 0; j < filledStars; j++) {
        insertHtml(select(`#${testifierName}-test-star`), 'beforeend', '<i class="fas fa-star"></i>');
    }
    for (let k = 0; k < emptyStars; k++) {
        insertHtml(select(`#${testifierName}-test-star`), 'beforeend', '<i class="far fa-star"></i>');
    }
};

const implementTestimonials = () => {
    if (window.screen.width > 576) {
        const testimArr = chunk(testimonials, 2);
        let ct = null;
        testimArr.forEach((testims, i) => {
            ct = i + 1;
            insertHtml(testimonialsCont, 'beforeend', testimonyCont(ct));
            testims.forEach((testim) => {
                insertHtml(select(`#testimonial-${ct}`), 'beforeend', testimonyBody(testim));
                implementStarRating(testim);
            });
        });
        return;
    }

    testimonials.forEach((testim, i) => {
        insertHtml(testimonialsCont, 'beforeend', testimonyCont(i + 1));
        insertHtml(select(`#testimonial-${i + 1}`), 'beforeend', testimonyBody(testim));
        implementStarRating(testim);
    });
};

export default implementTestimonials;
