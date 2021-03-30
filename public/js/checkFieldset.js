export function checkFieldset(fieldsets, activeFieldset) {
    const input = fieldsets[activeFieldset].getElementsByTagName('input');

    let radioCheck = {
        'algemeen-beoordeling': false,
        'moeilijkheidsgraad': false,
        'kwaliteit': false,
    };

    let valid = true;

    for (let i = 0; i < input.length; i++) {
        const errMsg = document.getElementById(`err-${input[i].getAttribute('name')}`);

        switch (input[i].getAttribute('name')) {
            case 'studentId':
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    errMsg.innerText = 'Dit veld is verplicht';
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    errMsg.innerText = '';
                }
            break;

            case 'docent':
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    errMsg.innerText = 'Dit veld is verplicht';
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    errMsg.innerText = '';
                }
            break;

            case 'name':
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    errMsg.innerText = 'Dit veld is verplicht';
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    errMsg.innerText = '';
                }
            break;

            case 'begin':
            case 'einde':
                if (new Date(input[i].value) == 'Invalid Date') {
                    input[i].classList.add('invalid');
                    errMsg.innerText = 'Deze datum is niet geldig';
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    errMsg.innerText = '';
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
                    errMsg.innerText = 'Dit veld is verplicht';
                    valid = false;
                } else if (parentContainer.classList.contains('invalid')) {
                    parentContainer.classList.remove('invalid');
                    errMsg.innerText = '';
                };

                if(Object.values(radioCheck).every(Boolean)) {
                    valid = true;
                };
            break;
        };
    };

    return valid;
};