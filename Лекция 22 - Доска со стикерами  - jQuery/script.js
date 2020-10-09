$(() => {
    const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
    const NOTE_CARD_CLASS = 'card';
    const DATA_ID = 'id';
    
    const $notePad = $('#notePad');
    const $noteTemplateEl = $('#noteTemplate');
    const $addNoteEl = $('#addNote');


    let notesList = [];

    
    $addNoteEl.on('click', onAddNoteBtnClick);             
    $notePad.on('change', 'textarea', onTextAreaChange);           
    $notePad.on('click', 'span', onDeleteBtnClick);              

    init();


    function onAddNoteBtnClick() {
        addNote();
    }

    function onTextAreaChange() { 
        const note = getFormData($(this));
        updateNote(note); 
        
    }

    function getFormData(el) {
        return {
            id: getElementId(el),
            description: el.val(),
        };
    }

    function getElementId(e) {
        return e.parents('.' + NOTE_CARD_CLASS).data(DATA_ID);
    }

    function onDeleteBtnClick(e) { 
        e.stopPropagation();
        deleteNote(getElementId(e));
     
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

    function renderNotesList(notesList) {
        notesList.forEach(renderNote);
    }

    function getNoteElementHtml(note) {
        return $noteTemplateEl.html()
            .replace('{{id}}', note.id)
            .replace('{{description}}', note.description);
    }

    function updateNote(item) {
        const note = notesList.find((el) => +el.id === item.id);

        note.description = item.description;

        fetch(`${URL}/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });             
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
            .then((note) => {
                notesList.push(note);
                renderNote(note);
            });
    }

    function deleteNote(id) {
        notesList = notesList.filter((item) => item.id !== id);

        deleteNoteElement(id);
        
        fetch(`${URL}/${id}`, {
            method: 'DELETE', 
        });
    }

    function deleteNoteElement(id) {
        const element = $(`[data-id="${id}"]`);

        element && element.remove();
    } 

    function renderNote(note) {
        $notePad.append(getNoteElementHtml(note));
    }
});