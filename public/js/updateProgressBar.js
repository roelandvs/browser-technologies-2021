export function updateProgressBar(activeFieldset, direction) {
    const root = document.documentElement;
    const circles = document.querySelectorAll('circle');
    root.style.setProperty('--active-page', `${250 - (activeFieldset * 83.33)}`);

    if (direction === 'back') {
        for (let i = 0; i < circles.length; i++) {
            if (i > activeFieldset) {
                circles[i].classList.remove('circle');
            };
        };
    } else {
        circles[activeFieldset].classList.add('circle');
    };
};