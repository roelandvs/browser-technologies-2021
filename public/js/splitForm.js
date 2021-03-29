import { checkFieldset } from './checkFieldset.js';
import { updateProgressBar } from './updateProgressBar.js';

const nextButtons = document.querySelectorAll('.next-button');
const backButtons = document.querySelectorAll('.back-button');
const fieldsets = document.body.getElementsByTagName('fieldset');

let activeFieldset = 0;

//self invoking expression
(function () {
    const root = document.documentElement;
    root.style.setProperty('--display-fieldset', 'none');
    root.style.setProperty('--display-buttons', 'block');

    fieldsets[0].style.display = 'block';
})();

function minActiveFieldset() {
    activeFieldset += -1;
    updateProgressBar(activeFieldset, 'back');
    showFieldset();
};

function addActiveFieldset() {
    if (checkFieldset(fieldsets, activeFieldset) === true) {
        activeFieldset += 1;

        if (activeFieldset >= 3) {
            activeFieldset = 3;
        };

        updateProgressBar(activeFieldset, 'next');
        showFieldset();
    };
};

function showFieldset() {
    for (let i = 0; i < fieldsets.length; i++) {
        if (i === activeFieldset) {
            //use toggle
            fieldsets[i].style.display = 'block';
        } else {
            fieldsets[i].style.display = 'none';
        };
    };
};

for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', addActiveFieldset);
};

for (let i = 0; i < backButtons.length; i++) {
    backButtons[i].addEventListener('click', minActiveFieldset);
};