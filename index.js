const input = document.querySelector('#string-input');
const submitButton = document.querySelector('.submit-input');
const inputList = document.querySelector('.input-list-dynamic');


input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        appendNewItem();
    }
});

function appendNewItem() {
    let newString = input.value.trim(); 

    if (newString) {
        let listItem = document.createElement('li');
        listItem.textContent = newString;
        listItem.setAttribute('class', 'list-item');
        inputList.appendChild(listItem);

        let removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.setAttribute('class', 'remove-button');
        listItem.appendChild(removeButton);


        var removeButtons = document.getElementsByClassName('remove-button');
        for (var i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener("click", function (event) {
                let listItem = event.target.parentNode;
                removeItem(listItem);
            });
        }
    } else {
        alert("enter valid string");
    }
    input.value = '';
}

function removeItem(item) {
    inputList.removeChild(item);
}


