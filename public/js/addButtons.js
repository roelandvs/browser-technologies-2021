import { 
    addActiveFieldset,
    minActiveFieldset
 } from "./splitForm.js";

export function addButtons() {
    const buttonContainer = document.querySelectorAll('.button-container');

    for (let i = 0; i < buttonContainer.length; i++) {
        const backButton = document.createElement('button');
        const nextButton = document.createElement('button');

        backButton.classList.add('back-button');
        nextButton.classList.add('next-button');

        backButton.setAttribute('type', 'button');
        nextButton.setAttribute('type', 'button');

        backButton.innerHTML = '<img src="/img/arrow.svg" alt="back">';
        nextButton.innerHTML = 'Next';

        if (i === 0) {
            buttonContainer[i].appendChild(nextButton);
        } else if (i === 3) {
            buttonContainer[i].appendChild(backButton);
        } else {
            buttonContainer[i].appendChild(backButton);
            buttonContainer[i].appendChild(nextButton);
        }

	    nextButton.addEventListener("click", addActiveFieldset);
	    backButton.addEventListener("click", minActiveFieldset);
    }
};