var idNummer = 0;

function addItem() {
    //get input value
    var textTask = document.getElementById('textInput')

    if (textTask.value.trim() != "") {
        idNummer++;

        //create li element and add its attributes
        var li = document.createElement("li");

        li.setAttribute('class', 'list-group-item list-group-item-ligh justify-content-between text-dark d-flex  align-items-center mt-1')
        li.setAttribute('id', 'li' + idNummer)

        //creat input and insert inside li element
        var liInput = document.createElement("input");
        liInput.setAttribute('class', 'form-check-input me-1')
        liInput.setAttribute('id', 'input' + idNummer)
        liInput.setAttribute('type', 'checkbox')
        liInput.setAttribute('onclick', `clickCheckbox(${idNummer})`)
        li.appendChild(liInput);


        var inputText = document.createTextNode(textTask.value);
        li.appendChild(inputText)

        //create button element and insert inside li element
        var liButton = document.createElement("button");
        liButton.setAttribute('type', 'button')
        liButton.setAttribute('class', 'btn-close')
        liButton.setAttribute('aria-label', 'Close')
        liButton.setAttribute('onclick', `deleteItem(${idNummer})`)

        li.appendChild(liButton);

        //insert li element with button inside ul element
        document.getElementById("ulActive").appendChild(li);

        textTask.value = "";
    }
}

function deleteItem(itemId) {
    var item = document.getElementById("li" + itemId);
    item.remove();
}

//Add Item with Enter
var enterKey = document.getElementById("textInput");
enterKey.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        addItem()
    }
});


function clickCheckbox(idnummer) {
    var item = document.getElementById("input" + idnummer);
    var listItem = document.getElementById("li" + idnummer);

    if (item.checked) {
        listItem.style.backgroundColor = "#ff9c9c";

        document.getElementById("ulPassive").appendChild(listItem);

    } else {
        listItem.style.backgroundColor = "#fff";

        document.getElementById("ulActive").appendChild(listItem);
    }
}