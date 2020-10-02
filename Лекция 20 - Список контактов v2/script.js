const CONTACTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';
const DELETE_BTN_CLASS = 'del-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const ROW_TEMPLATE_CLASS = 'row-template';

const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const phoneInputEl = document.getElementById('phoneInput');
const contactListTableEl = document.getElementById('contactListTable');
const saveContactEl = document.getElementById('saveContactItem');

let contactsList = [];
let contactToEdit = {};


init();

saveContactEl.addEventListener('click', onSaveContactClick);
contactListTableEl.addEventListener('click', onContactActionClick);

function init() {
    getList();
}

function onContactActionClick(e){
    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS): 
            deleteContact(e.target.closest('.'+ ROW_TEMPLATE_CLASS).dataset.contactId);
            break;
        case e.target.classList.contains(EDIT_BTN_CLASS): 
            editContact(e.target.closest('.'+ ROW_TEMPLATE_CLASS).dataset.contactId);
            break;
    }
}

function onSaveContactClick(e) {
    e.preventDefault();
    if (contactToEdit) {
        deleteContact(contactToEdit.id);
    }
    submitContact();
    clearInputs();
}

function getList() {
    return fetch(CONTACTS_URL)
        .then((res) => res.json())
        .then((data) => (contactsList = data))
        .then(renderContacts);
}

function renderContacts(contactsList) {
    contactListTableEl.innerHTML = contactsList
        .map(
            (contact) =>
            `<tr class="row-template" data-contact-id="${contact.id}">
                <td>${contact.name}</td>
                <td>${contact.surname}</td>
                <td>${contact.phone}</td>
                <td class="d-flex justify-content-between"><div class="edit-btn"></div><div class="del-btn"></div></td>
            </tr>`
        )
        .join('');
}

function submitContact() {
    const contact = {
        name: nameInputEl.value,
        surname: surnameInputEl.value,
        phone: phoneInputEl.value,
    };

    addContact(contact).then(getList);
}

function addContact(contact){
    console.log(contact);

    return fetch(CONTACTS_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

function editContact(id){
    contactToEdit = contactsList.find((item) => item.id === id);

    fillInputForms(contactToEdit);
}

function fillInputForms(contact){
    nameInputEl.value = contact.name;
    surnameInputEl.value = contact.surname;
    phoneInputEl.value = contact.phone;
}


function deleteContact(id){
    fetch(CONTACTS_URL + id, {
        method: 'DELETE',
    }).then(getList);
}

function clearInputs(){
    nameInputEl.value = '';
    surnameInputEl.value = '';
    phoneInputEl.value = '';
}
