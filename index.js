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
        listItem.appendChild(removeButton);
        removeButton.addEventListener("click", (event) => {
            const listItem = event.target.parentNode;
            inputList.removeChild(listItem);
        });

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.setAttribute('class', 'edit-button');
        listItem.appendChild(editButton);
        editButton.addEventListener('click', (event) => {
            const listItem = event.target.parentNode;
            const currentInput = listItem.firstChild.textContent;
            let newInput = prompt('Edit the item:', currentInput);
            if (newInput !== null) {
                listItem.firstChild.textContent = newInput;
            }
        });
    } else {
        alert("enter valid string");
    }
    input.value = '';
}



