const DELETE_BTN_CLASS = 'del-btn';

const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const addContactItem = document.getElementById('addContactItem');
const contactListTable = document.getElementById('contactListTable');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

let contactList = [];

addContactItem.addEventListener('click', onAddContactClick);
contactListTable.addEventListener('click', onRemoveButtonClick);

init();

function onAddContactClick(event){
    event.preventDefault();
    submitContact();
}

function onRemoveButtonClick(event) {
    if (event.target.classList.contains(DELETE_BTN_CLASS)){
        deleteContact(event.target.parentElement.parentElement);
        saveData();
    }
}

function init(){
    restoreData();
    renderContactList();
}

function submitContact(){
    if (validateInput()) {
        alert('Please fill all the fields!');        
    } else {
        const contactItem = {
            id: Date.now(),
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
        }
        addContact(contactItem);
        clearInput();
    }  
}

function validateInput(){
    return !(nameInput.value && phoneInput.value && emailInput.value);
}

function deleteContact(el) {
    const contactId = +el.dataset.contactId;
    contactList = contactList.filter((item) => item.id !== contactId);
    el.remove();
}

function addContact(contactItem) {
    contactList.push(contactItem);
    saveData();
    renderContact(contactItem); 
}

function clearInput(){
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
}

function restoreData(){
    const data = localStorage.getItem('contactList');
    contactList = data ? JSON.parse(data) : [];
}

function renderContactList() {
    contactList.forEach((contactItem) => renderContact(contactItem));
}

function renderContact(contactItem) {
    const html = contactTemplate
                .replace('{{id}}', contactItem.id)
                .replace('{{name}}', contactItem.name)
                .replace('{{phone}}', contactItem.phone)
                .replace('{{email}}', contactItem.email);
    contactListTable.insertAdjacentHTML('beforeend', html);
}

function saveData(){
    localStorage.setItem('contactList', JSON.stringify(contactList));
}


