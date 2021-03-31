import { checkFieldset } from "./checkFieldset.js";
import { updateProgressBar } from "./updateProgressBar.js";
import { addButtons } from "./addButtons.js";
import { lsTest } from "./localStorage.js";

const fieldsets = document.body.getElementsByTagName("fieldset");
const form = document.querySelector("form");

//remember on which field if LS
export let activeFieldset = lsTest()
	? localStorage.getItem(`${form.id}-activeFieldset`)
		? +localStorage.getItem(`${form.id}-activeFieldset`)
		: 0
	: 0;

//self invoking expression
if (form.id !== 'login') {
	(function () {
		const root = document.documentElement;
		root.style.setProperty("--display-fieldset", "none");
		root.style.setProperty("--display-buttons", "block");

		fieldsets[0].id = 'visible';

		addButtons();
		showFieldset();
		updateProgressBar(activeFieldset, "refresh");
	})();
};

export function minActiveFieldset() {
	activeFieldset += -1;
	updateProgressBar(activeFieldset, "back");
	showFieldset();
}

export function addActiveFieldset() {
	if (checkFieldset(fieldsets, activeFieldset) === true) {
		activeFieldset += 1;

		if (activeFieldset >= 3) {
			activeFieldset = 3;
		}

		updateProgressBar(activeFieldset, "next");
		showFieldset();
	}
}

function showFieldset() {
	for (let i = 0; i < fieldsets.length; i++) {
		if (i === activeFieldset) {
			fieldsets[i].id = 'visible';
		} else {
			fieldsets[i].id = '';
		}
	}
}