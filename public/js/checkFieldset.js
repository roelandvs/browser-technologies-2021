export function checkFieldset(fieldsets, activeFieldset) {
    const input = fieldsets[activeFieldset].getElementsByTagName('input');
    let valid = true;
    // console.log('gaat door funtcie');

    for (let i = 0; i < input.length; i++) {
        switch (input[i].getAttribute("name")) {
            case "docent":
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    // document.getElementById('error-name').innerHTML = '';
                }
                break;

            case "name":
                if (input[i].value.length < 2) {
                    input[i].classList.add('invalid');
                    valid = false;
                } else if (input[i].classList.contains('invalid')) {
                    input[i].classList.remove('invalid');
                    // document.getElementById('error-name').innerHTML = '';
                }
                break;
        };
    };

    return valid;
};