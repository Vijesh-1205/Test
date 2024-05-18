document.getElementById('submit').addEventListener("click", () => {
    var NameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('mail').value;
    var categorySelect = document.getElementById('select');
    var selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;

    var newValues = {
        name: NameValue,
        email: emailValue,
        category:selectedCategory
    };

    let storage = JSON.parse(localStorage.getItem("contacts")) || [];
    storage.push(newValues);
    localStorage.setItem("contacts", JSON.stringify(storage));

    addTask(newValues);

    NameValue = document.getElementById('name').value=''
    emailValue = document.getElementById('mail').value=''

    document.querySelector('#filter').style.display="block"
});

function addTask(value) {
    var newAdd = document.createElement('div');
    newAdd.classList.add('add-contact');

    var newLeft = document.createElement('div');
    newLeft.classList.add('left');

    var newName = document.createElement('h5');
    newName.textContent = value.name;

    var newEmail = document.createElement('p');
    newEmail.textContent = value.email;

    var newRight = document.createElement('div');
    newRight.classList.add('right');

    var newButton = document.createElement('button');
    newButton.classList.add('delete');
    newButton.textContent = "delete";
    newButton.addEventListener('click', () => {
        newAdd.remove();
        removeFromStorage(value.name);
    });

    newRight.appendChild(newButton);
    newLeft.appendChild(newName);
    newLeft.appendChild(newEmail);
    
    newAdd.appendChild(newLeft);
    newAdd.appendChild(newRight);

    document.querySelector('.parent').appendChild(newAdd);



}

function removeFromStorage(name) {
    let storage = JSON.parse(localStorage.getItem("contacts")) || [];
    storage = storage.filter(contact => contact.name !== name);
    localStorage.setItem("contacts", JSON.stringify(storage));
}

document.addEventListener('DOMContentLoaded',()=>{
    let storage=JSON.parse(localStorage.getItem("contacts"))
    storage.forEach(contact =>addTask(contact))
    localStorage.setItem("contacts",JSON.stringify(storage))     
});




function filter(value){
    let storage=JSON.parse(localStorage.getItem("contacts"))
    storage=storage.filter(Element => Element.category===value)
    localStorage.setItem("contacts",JSON.stringify(storage))
}



