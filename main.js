const input = document.querySelector('#string-input');
const submitButton = document.querySelector('.submit-input');
const inputList = document.querySelector('.input-list-dynamic');
input.placeholder = "Please enter an item";

input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        appendNewItem();
    }
});

function appendNewItem() {
    const newString = input.value.trim(); 

    // if (/\d/.test(newString)) {
    //     //test
    // } else 
    if (newString) {
        const listItem = document.createElement('li');
        listItem.textContent = newString;
        listItem.setAttribute('class', 'list-item');
        inputList.appendChild(listItem);

        listItem.appendChild(createRemoveButton());
        listItem.appendChild(createEditButton());
    } else {
        alert("Enter valid item");
    }
    submitButton.onclick = appendNewItem;
    input.value = '';
}

function createRemoveButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "X";
    removeButton.setAttribute('class', 'remove-button');
    removeButton.onclick = (event) => {
        const listItem = event.target.parentNode;
        inputList.removeChild(listItem);
    };
    return removeButton;
}

function createEditButton() {
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.setAttribute('class', 'edit-button');
    editButton.onclick = (event) => {
        const listItem = event.target.parentNode;
        const currentInput = listItem.firstChild.textContent;
        input.value = currentInput;
        submitButton.onclick = (item) => updateItem(listItem);
    }
    return editButton;
}

function updateItem(item) {
    // if(/\d/.test(input.value)) {
    //     //test
    // } else 
        item.firstChild.textContent = input.value.trim();
        submitButton.onclick = appendNewItem;
        input.value = ''; 
}
