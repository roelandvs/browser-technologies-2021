export function updateProgressBar(activeFieldset, direction) {
    const root = document.documentElement;
    const circles = document.querySelectorAll('circle');
    root.style.setProperty('--active-page', `${250 - (activeFieldset * 83.33)}`);

    if (direction === 'back') {
        for (let i = 0; i < circles.length; i++) {
            if (i > activeFieldset) {
                circles[i].classList.remove('active');
            };
        };
    } else if (direction === 'next') {
        circles[activeFieldset].classList.add('active');
    } else {
        for (let i = 0; i < circles.length; i++) {
            if (i <= activeFieldset) {
                circles[i].classList.add('active');
            };
        };
    };
};