const userActionEl = document.getElementById('actionInput');
const userInputEl = document.getElementById('addButton');
const toDoListEl = document.getElementById('toDoList');


userInputEl.addEventListener('click', onAddActionClick);


function onAddActionClick(){
    if (userActionEl.value) {
        toDoListEl.innerHTML +='<li>' + userActionEl.value + '</li>';
        userActionEl.value = '';
    }
}


