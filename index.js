const input = document.querySelector('#string-input');
const submitButton = document.querySelector('.submit-input');
const inputList = document.querySelector('.input-list-dynamic');


function appendNewItem() {
    let newString = input.value.trim(); 

    if (newString) {
        let listItem = document.createElement('li');
        listItem.textContent = newString;
        inputList.appendChild(listItem);

        let removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.setAttribute('class', 'remove-button');
        listItem.appendChild(removeButton);

        console.log(inputList);

        console.log("test1");
        var removeButtons = document.getElementsByClassName('remove-button');
        for (var i = 0; i < removeButtons.length; i++) {
            console.log("test2");
            removeButtons[i].addEventListener("click", function (event) {
                let listItem = event.target.parentNode;
                console.log("about to remove");
                removeItem(listItem);
            });
        }
    } else {
        alert("enter valid string");
    }
    console.log("input Value");
    input.value = '';
}

function removeItem(item) {
    console.log("item removed");
    inputList.removeChild(item);
}


