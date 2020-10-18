$(() => {
    const CONTACTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';
    const DELETE_BTN_CLASS = 'del-btn';
    const EDIT_BTN_CLASS = 'edit-btn';
    const ROW_TEMPLATE_CLASS = 'row-template';
    const DATA_ID = 'id';
    const ADD_CONTACT_TITLE = 'Add New Contact';
    const EDIT_CONTACT_TITLE = 'Edit Contact';

    const $inputId = $('#contactId');
    const $nameInput = $('#nameInput');
    const $surnameInput = $('#surnameInput');
    const $phoneInput = $('#phoneInput');
    const $contactTemplate = $('#contactTemplate');
    const $dialog = $('#dialogForm')
                    .dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        resizable: false,
        close: () => resetInputs(),
        buttons: [
            {
                text: 'Save',
                'class': 'btn btn-light',
                click: () => {
                    const contact = getFormData();
                    if (contact.id) {
                        updateContact(contact);
                    } else {
                        addContact(contact);
                    }
                    $dialog.dialog('close');
                }
            },
            {   
                text: 'Cancel',
                'class': 'btn btn-light',
                click: () => {
                    $dialog.dialog('close')
                }
            },
        ],
    })
    const $addContact = $('#addContact')
                        .on('click', onAddBtnClick);
    const $contactListTable = $('#contactListTable')
                        .on('click', '.' + DELETE_BTN_CLASS, onDeleteBtnClick)
                        .on('click', '.' + EDIT_BTN_CLASS, onEditBtnClick);

    let contactsList = [];
    

    init();

    //===== init block =====

    function init() {
        getContactsList();
    }

    function getContactsList() {
        fetch(CONTACTS_URL)
            .then((res) => res.json())
            .then(setData)
            .then(renderContactsList);
    }

    function setData(data) {
        return (contactsList = data);
    }

    function renderContactsList(contactsList) {
        contactsList.forEach(renderContact);
    }

    function renderContact(contact) {
        $contactListTable.append(getContactElementHtml(contact));
    }

    function getContactElementHtml(contact) {
        return $contactTemplate.html()
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{surname}}', contact.surname)
            .replace('{{phone}}', contact.phone);
    }

    //===== Add Block =====

    function onAddBtnClick() {
        changeTitle(ADD_CONTACT_TITLE);
        openModal();
    }

    function addContact(contact) {
        delete contact.id;

        fetch(CONTACTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
            .then((res) => res.json())
            .then((contactItem) => {
                contactsList.push(contactItem);
                renderContact(contactItem);
            });
    }

    //===== Delete Block =====

    function onDeleteBtnClick(e) { 
        e.stopPropagation();
        deleteContact(getElementId($(this)));
    }

    function deleteContact(id) {
        contactsList = contactsList.filter((item) => item.id !== id);

        deleteContactElement(id);
        
        fetch(`${CONTACTS_URL}/${id}`, {
            method: 'DELETE', 
        });
    }

    function deleteContactElement(id) {
        const element = $(`[data-id="${id}"]`);

        element && element.remove();
    } 

    //===== Edit Block =====

    function onEditBtnClick(e) {
        fillDialogForm(getContactData($(this)));
        changeTitle(EDIT_CONTACT_TITLE);
        openModal();
    }
    
    function fillDialogForm(contact) {
        $inputId.val(contact.id);
        $nameInput.val(contact.name);
        $surnameInput.val(contact.surname);
        $phoneInput.val(contact.phone);
    }    

    function updateContact(item) {
        contactsList = contactsList.map((el) => el.id != item.id ? el : item);
        $contactListTable.html('');

        renderContactsList(contactsList);

        fetch(`${CONTACTS_URL}/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
    }

    function getContactData(e) {
        const contactId = getElementId(e);
        return contactsList.filter((item) => +item.id === contactId)[0];
    }

    function getElementId(e) {
        return e.parents('.' + ROW_TEMPLATE_CLASS).data(DATA_ID);
    }

    //===== Common Block =====

    function openModal() {
        $dialog.dialog('open');
    }

    function getFormData() {
        return {
            id: $inputId.val(),
            name:  $nameInput.val(),
            surname: $surnameInput.val(),
            phone: $phoneInput.val(),
        }
    }

    function changeTitle(title) {
        $dialog.dialog('option', 'title', title);
    }

    function resetInputs() {
        $inputId.val('');
        $nameInput.val('');
        $surnameInput.val('');
        $phoneInput.val('');
    }
})