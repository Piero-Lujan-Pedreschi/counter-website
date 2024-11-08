const input = document.querySelector('#string-input');
const submitButton = document.querySelector('.submit-input');
const inputList = document.querySelector('.input-list-dynamic');


input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        appendNewItem();
    }
});

function appendNewItem() {
    const newString = input.value.trim(); 

    if (newString) {
        const listItem = document.createElement('li');
        listItem.textContent = newString;
        listItem.setAttribute('class', 'list-item');
        inputList.appendChild(listItem);

        const removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.setAttribute('class', 'remove-button');
        removeButton.addEventListener("click", (event) => {
            const listItem = event.target.parentNode;
            inputList.removeChild(listItem);
        })
        listItem.appendChild(removeButton);
    } else {
        alert("enter valid string");
    }
    input.value = '';
}



