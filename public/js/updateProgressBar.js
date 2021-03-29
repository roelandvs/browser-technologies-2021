export function updateProgressBar(activeFieldset) {
    const root = document.documentElement;
    root.style.setProperty('--active-page', `${250 - (activeFieldset * 83.33)}`);
};