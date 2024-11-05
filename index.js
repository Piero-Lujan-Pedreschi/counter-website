let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');
let counterReset = document.querySelector('.counter-reset')

let count = 0;
updateDisplay();

counterMinus.addEventListener("click", () => {
    count--;
    updateDisplay();
});

counterPlus.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterReset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    counterDisplay.innerHTML = count;
}