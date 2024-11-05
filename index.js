// let counterDisplay = document.querySelector('.counter-display');
// let counterMinus = document.querySelector('.counter-minus');
// let counterPlus = document.querySelector('.counter-plus');
// let counterReset = document.querySelector('.counter-reset')

// let count = 0;
// updateDisplay();

// counterMinus.addEventListener("click", () => {
//     count--;
//     updateDisplay();
// });

// counterPlus.addEventListener("click", () => {
//     count++;
//     updateDisplay();
// });

// counterReset.addEventListener("click", () => {
//     count = 0;
//     updateDisplay();
// });

// function updateDisplay() {
//     counterDisplay.innerHTML = count;
// }


// const input = document.getElementById("input");
// const inputDisplay = document.getElementById('input-display');

// input.addEventListener("keyup", () => {
//     let inputLength = input.value.length;
//     inputDisplay.textContent = "Input Length: " + inputLength;
// });


const input = document.querySelector('#string-input');
const submitButton = document.querySelector('.submit-input')
const inputList = document.querySelector('.input-list-dynamic');

function appendNewString() {
    let newString = input.value.trim(); //trims excess spaces for a string

    if (newString !== "") {
        let listItem = document.createElement('li');
        listItem.textContent = newString;
        inputList.appendChild(listItem);
    } else {
        alert("enter valid string");
    }
}

submitButton.addEventListener("click", appendNewString);