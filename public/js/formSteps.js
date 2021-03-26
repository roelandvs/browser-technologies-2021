const form = document.querySelector('form');

form.addEventListener('focusout', function (event) {
    console.log(event.target.value);
    let testObject = { 'one': 1, 'two': 2, 'three': 3 };

    localStorage.setItem('testObject', JSON.stringify(testObject))
}, true);