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

        createRemoveButton(listItem);
        createEditButton(listItem);
    } else {
        input.placeholder = "Please enter an item";
    }
    input.value = '';
}

function createRemoveButton(item) {
    const removeButton = document.createElement('button');
    removeButton.textContent = "X";
    removeButton.setAttribute('class', 'remove-button');
    item.appendChild(removeButton);
    removeButton.onclick = function (event) {
        const listItem = event.target.parentNode;
        inputList.removeChild(listItem);
    };
}

function createEditButton(item) {
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.setAttribute('class', 'edit-button');
    item.appendChild(editButton);
    editButton.onclick = function(event) {
        const listItem = event.target.parentNode;
        const currentInput = listItem.firstChild.textContent;
        input.value = currentInput;
        console.log("read new input")
        submitButton.onclick = updateItem(listItem);
        console.log("item updated");
    }
    
}

function updateItem(item) {
    console.log("updating")
    item.firstChild.textContent = input.value.trim();
}