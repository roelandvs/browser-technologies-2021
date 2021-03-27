const form = document.querySelector('form');
const inputs = document.querySelectorAll('form input');

function addInputs() {
    inputs.forEach(input => {
        const storedInput = localStorage.getItem(`${form.id}-${input.name}`);

        if(storedInput) {
            if(input.type === 'radio' && input.value === storedInput) {
                input.checked = true;
                // console.log(input.value)
            } else if(input.type !== 'radio') {
                input.value = storedInput;
            };
        };
    });
};

//maybe event focusout is better for performance?
form.addEventListener('focusout', function (event) {
    localStorage.setItem(`${form.id}-${event.target.name}`, event.target.value)
}, true);

window.addEventListener('load', addInputs)