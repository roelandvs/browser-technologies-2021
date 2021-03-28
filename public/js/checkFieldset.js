export function checkFieldset(fieldsets, activeFieldset) {
    const input = fieldsets[activeFieldset].getElementsByTagName('input');

    let radioCheck = {
        'algemeen-beoordeling': false,
        'moeilijkheidsgraad': false,
        'kwaliteit': false,
    };

    let valid = true;

    for (let i = 0; i < input.length; i++) {
        // console.log(input[i].getAttribute("name"))
        switch (input[i].getAttribute('name')) {
            case 'docent':
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    // document.getElementById('error-name').innerHTML = '';
                }
            break;

            case 'name':
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    // document.getElementById('error-name').innerHTML = '';
                }
            break;

            case 'begin':
            case 'einde':
                if (new Date(input[i].value) == 'Invalid Date') {
                    input[i].classList.add('invalid');
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    // document.getElementById('error-name').innerHTML = '';
                }
            break;

            case 'algemeen-beoordeling':
            case 'moeilijkheidsgraad':
            case 'kwaliteit':
                const parentContainer = document.getElementById(input[i].getAttribute('name'));

                if (input[i].checked === true) {
                    radioCheck[input[i].getAttribute('name')] = true;
                }

                if (radioCheck[input[i].getAttribute('name')] === false) {
                    parentContainer.classList.add('invalid');
                    valid = false;
                } else if (parentContainer.classList.contains('invalid')) {
                    parentContainer.classList.remove('invalid');
                    // document.getElementById('error-name').innerHTML = '';
                    valid = true;
                }
            break;
        };
    };

    return valid;
};