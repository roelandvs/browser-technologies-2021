import { activeFieldset } from './splitForm.js'

const form = document.querySelector('form');

function addInputs() {
    const inputs = document.querySelectorAll('form input');

    inputs.forEach(input => {
        const storedInput = localStorage.getItem(`${form.id}-${input.name}`);

        if(storedInput) {
            if(input.type === 'radio' && input.value === storedInput) {
                input.checked = true;
            } else if(input.type !== 'radio') {
                input.value = storedInput;
            };
        };
    });
};

//test if localeStorage is available
export function lsTest(){
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
};

//if localStorage is available add inputs on focusout event
if(lsTest() === true) {
    form.addEventListener('focusout', function(event) {
        if(event.target.type !== 'submit' && event.target.type !== 'button') {
            //adds course name to begin of input name in LS
            localStorage.setItem(`${form.id}-${event.target.name}`, event.target.value);
            localStorage.setItem(`${form.id}-activeFieldset`, activeFieldset);
        }
    }, true);
    
    window.addEventListener('load', addInputs);
} else {
    console.log('no local storage')
};

