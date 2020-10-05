const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
const DELETE_BTN_CLASS = 'del-btn';
const SAVE_BTN_CLASS = 'save-btn';
const NOTE_CARD_CLASS = 'card';
const FORM_CLASS = 'form-control';

const notePadEl = document.getElementById('notePad');
const noteTemplateEl = document.getElementById('noteTemplate').innerHTML;
const addNoteEl = document.getElementById('addNote');
const deleteNoteEl = document.getElementById('deleteBtn');


let notesList = [];


addNoteEl.addEventListener('click', onAddNoteBtnClick);
notePadEl.addEventListener('focusout', onNoteLostFocus);
notePadEl.addEventListener('click', onDeleteBtnClick);

init();


function onAddNoteBtnClick(){
    addNote();
}

function onNoteLostFocus(e) {  
    if (e.target.classList.contains(FORM_CLASS)) {
        const note = getFormData(e.target);
        if (isNoteChanged(note)){
            updateNote(note);
        }        
    }
}

function onDeleteBtnClick(e){
    if (e.target.classList.contains(DELETE_BTN_CLASS)){
        deleteNote(getElementId(e.target));
    }    
}

function init() {
    getNotesList();
}

function getNotesList() {
    fetch(URL)
        .then((res) => res.json())
        .then(setData)
        .then(renderNotesList);
}

function setData(data) {
    return (notesList = data);
}

function renderNotesList(data) {
    notePadEl.innerHTML = data.map(getNoteElementHtml).join('');
}

function getNoteElementHtml(note) {
    return noteTemplateEl
        .replace('{{id}}', note.id)
        .replace('{{description}}', note.description);
}

function updateNote(item) {
    fetch(`${URL}/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    }).catch(() => getNotesList());

    notesList = notesList.map((el) => (el.id != item.id ? el : item));

    renderNotesList(notesList);
}

function isNoteChanged(note) {
    if (note.description !== notesList
                         .find((item) => item.id === note.id)
                         .description
                         ) {
        return true;
    }
    return false;
}

function getFormData(el) {
    return {
        id: getElementId(el),
        description: el.value,
    };
}

function getElementId(element) {
    return element.closest('.card').dataset.id;
}

function addNote() {
    const blankNote = {
        description: '',
    }
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blankNote),
    })
        .then((res) => res.json())
        .then((data) => {
            notesList.push(data);
            renderNotesList(notesList);
        });
}

function deleteNote(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

    notesList = notesList.filter((item) => item.id !== id);

    renderNotesList(notesList);
}