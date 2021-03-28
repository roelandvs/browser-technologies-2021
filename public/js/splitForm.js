const nextButtons = document.querySelectorAll('.next-button');
const fieldsets = document.body.getElementsByTagName('fieldset');

let activeFieldset = 0;

function splitForm() {
    const root = document.documentElement;
    root.style.setProperty('--display-fieldset', 'none');

    fieldsets[0].style.display = 'block';
    nextButtons[0].style.display = 'block';
};

function nextPage() {
    activeFieldset += 1;

    if (activeFieldset >= 3) {
        activeFieldset = 3;
        nextButtons[activeFieldset -1].style.display = 'block';
        fieldsets[activeFieldset].style.display = 'block';
    } else {
        nextButtons[activeFieldset].style.display = 'block';
        fieldsets[activeFieldset].style.display = 'block';
    };
};

for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', nextPage);
};

splitForm();