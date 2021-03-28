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

form.addEventListener('focusout', function(event) {
    if(event.target.type !== 'submit' && event.target.type !== 'button') {
        //adds course name to begin of input name in LS
        localStorage.setItem(`${form.id}-${event.target.name}`, event.target.value);
    }
}, true);

window.addEventListener('load', addInputs);