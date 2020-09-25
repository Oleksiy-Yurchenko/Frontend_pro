const DELETE_BTN_CLASS = 'del-btn';
const STORAGE_OBJ_KEY = 'studentsList';
const DIGITS_AFTER_DECIMAL = 3;
const LINE_TEMPLATE_CLASS = 'line-template';

const nameInputEl = document.getElementById('nameInput');
const marksInputEl = document.getElementById('marksInput');
const addStudentButtonEl = document.getElementById('addStudent');
const studentsTableEl = document.getElementById('studentsTable');
const groupAverageEl = document.getElementById('groupAverage');
const studentTemplate = document.getElementById('studentTemplate').innerHTML;
const groupAverageTemplate = document.getElementById('groupAverageTemplate').innerHTML;


let studentsList = [];


addStudentButtonEl.addEventListener('click', onAddStudentClick);
studentsTableEl.addEventListener('click', onRemoveButtonClick);

init(); 


function onAddStudentClick(){
    submitStudent();
    renderGroupAverage();
}

function onRemoveButtonClick(event) {
    if (event.target.classList.contains(DELETE_BTN_CLASS)){
        deleteStudent(event.target.closest('.' + LINE_TEMPLATE_CLASS));
        saveData();
        renderGroupAverage();
    }
}

function init(){
    restoreData();
    renderstudentsList();
    renderGroupAverage();
}

function submitStudent(){
    if (validateInput()) {
        const studentEntry = {
            id: Date.now(),
            name: nameInputEl.value,
            marksString: marksInputEl.value,
            marksArray: toDigitsArray(marksInputEl.value),
            averageMark: getAverageMark(toDigitsArray(marksInputEl.value))
                                        .toFixed(DIGITS_AFTER_DECIMAL),
        }
        addStudent(studentEntry);
        clearInput();
    } 
}

function addStudent(studentObj) {
    studentsList.push(studentObj);
    saveData();
    renderStudent(studentObj); 
}

function deleteStudent(el) {
    const studentId = +el.dataset.studentId;
    studentsList = studentsList.filter((item) => item.id !== studentId);
    el.remove();
}

function validateInput(){
    return validateNameInput(nameInputEl.value) && 
           validateMarksInput(marksInputEl.value);
}

function validateNameInput(nameInputEl){
    if (!nameInputEl.trim()) {
        alert("Please enter all fields!")
        return false;
    }
    return true;
}

function validateMarksInput(marksInputEl){
    const regexp = new RegExp(/^((([1-9]|10),)*([1-9]|10))$|^(([1-9]|10),)*$/, 'g');   //обратывает 2 формата 1,2,3 и 1,2,3,

    if (regexp.test(marksInputEl)) {
        return true;
    } 
    alert("Please enter student's marks separated by the comma!")
    return false;
}

function clearInput(){
    nameInputEl.value = '';
    marksInputEl.value = '';
}

function restoreData(){
    const data = localStorage.getItem(STORAGE_OBJ_KEY);
    studentsList = data ? JSON.parse(data) : [];
}

function renderstudentsList() {
    studentsList.forEach((studentEntry) => renderStudent(studentEntry));
}

function renderStudent(studentEntry) {
    const html = studentTemplate
                .replace('{{id}}', studentEntry.id)
                .replace('{{name}}', studentEntry.name)
                .replace('{{marksString}}', studentEntry.marksString)
                .replace('{{averageMark}}', studentEntry.averageMark);
    studentsTableEl.insertAdjacentHTML('beforeend', html);
}

function saveData(){
    localStorage.setItem(STORAGE_OBJ_KEY, JSON.stringify(studentsList));
} 

function getAverageMark(marksArray) {
    return marksArray.reduce(((result, currValue) => result + currValue),0) / marksArray.length;
}

function toDigitsArray(marksString) {
    return marksString.split(',').map((item) => Number(item));
}

function renderGroupAverage() {
    removeGroupAverageEl(groupAverageEl);

    const averageGroupMark = getGroupAverage(studentsList);
    const html = groupAverageTemplate.replace('{{groupAverageMark}}', averageGroupMark);

    if (!isNaN(averageGroupMark)) {
        groupAverageEl.insertAdjacentHTML('afterbegin', html);
    }
}

function removeGroupAverageEl(el){
    if (el.firstElementChild) {
        el.firstElementChild.remove();
    }
}

function getGroupAverage(studentsList){
    return getAverageMark(studentsList.flatMap((studentEntry) => studentEntry.marksArray))
                         .toFixed(DIGITS_AFTER_DECIMAL);
}


