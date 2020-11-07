import Swipe from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
import testimonials from '../admin/updateTestimonials.js';
import DOMElems from './DOMElems.js';
import { classAction, insertHtml, select, selectAll } from './DOMFuncs.js';
import { testimonyBody, testimonyCont } from './htmlBoilerPlate.js';
const { testimonialsCont, sliderIndicator } = DOMElems;

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

const implementStarRating = ({ star: filledStars, testifierId }) => {
    const emptyStars = 5 - filledStars;
    for (let j = 0; j < filledStars; j++) {
        insertHtml(select(`#test-star-testifier-${testifierId}`), 'beforeend', '<i class="fas fa-star"></i>');
    }
    for (let k = 0; k < emptyStars; k++) {
        insertHtml(select(`#test-star-testifier-${testifierId}`), 'beforeend', '<i class="far fa-star"></i>');
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
        for (let i = 0; i < Math.round(testimonials.length / 2); i++) {
            insertHtml(sliderIndicator, 'beforeend', '<span></span>');
        }
        const swiper = new Swipe('.swiper-container');
        classAction([...selectAll('.caro-nav span')][swiper.activeIndex], 'add', 'active');
        swiper.on('slideChange', function change() {
            for (const ind of selectAll('.caro-nav span')) {
                classAction(ind, 'remove', 'active');
            }
            classAction([...selectAll('.caro-nav span')][this.activeIndex], 'add', 'active');
        });
        return;
    }

    testimonials.forEach((testim, i) => {
        insertHtml(testimonialsCont, 'beforeend', testimonyCont(i + 1));
        insertHtml(select(`#testimonial-${i + 1}`), 'beforeend', testimonyBody(testim));
        implementStarRating(testim);
    });
    for (let k = 0; k < testimonials.length; k++) {
        insertHtml(sliderIndicator, 'beforeend', '<span></span>');
    }
    const swiper = new Swipe('.swiper-container');
    classAction([...selectAll('.caro-nav span')][swiper.activeIndex], 'add', 'active');
    swiper.on('slideChange', function change() {
        for (const ind of selectAll('.caro-nav span')) {
            classAction(ind, 'remove', 'active');
        }
        classAction([...selectAll('.caro-nav span')][this.activeIndex], 'add', 'active');
    });
};

export default implementTestimonials;
