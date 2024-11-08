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

        editItem(listItem);
        removeItem(listItem);
    } else {
        alert("enter valid string");
    }
    input.value = '';
}


function removeItem (item) {
    const removeButton = document.createElement('button');
    removeButton.textContent = "X";
    removeButton.setAttribute('class', 'remove-button');
    item.appendChild(removeButton);
    removeButton.addEventListener("click", (event) => {
        const listItem = event.target.parentNode;
        inputList.removeChild(listItem);
    });
}

function editItem (item) {
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.setAttribute('class', 'edit-button');
    item.appendChild(editButton);
    editButton.addEventListener('click', (event) => {
        const listItem = event.target.parentNode;
        const currentInput = listItem.firstChild.textContent;
        input.value = currentInput;
        if (input.value) {
            console.log("read new input")
            submitButton.onclick = function () {
                console.log("new Input");
                listItem.firstChild.textContent = input.value.trim();
                submitButton.onclick = appendNewItem();
            }
        }
    });
}