const taskInputEl = document.getElementById('taskInput');
const addTaskEl = document.getElementById('addButton');
const taskListEl = document.getElementById('taskList');


addTaskEl.addEventListener('click', onAddTaskClick);
taskListEl.addEventListener('click', onTaskClick);


function onAddTaskClick(e){
    addNewTask(taskInputEl.value);

    clearInput();
}


function onTaskClick(e) {
    onChangeTaskStatus(e);
    
    onRemoveButtonClick(e);
}


function addNewTask(taskInput){
    const li = document.createElement('li');
    if (taskInput) {
        li.textContent = taskInput;
        li.className = 'to-do';
        taskListEl.append(li);
    }
    addRemoveButton(li);
}


function addRemoveButton(element){
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Task';
    removeButton.className = 'remove-button';
    element.append(removeButton);
}


function clearInput(){
    taskInputEl.value = '';
}


function onChangeTaskStatus(e) {
    if (e.target.classList.contains('to-do')){
        e.target.classList.toggle('done');
    } 
}


function onRemoveButtonClick(e) {
    if (e.target.classList.contains('remove-button')){
        e.target.parentElement.remove();
    }
}