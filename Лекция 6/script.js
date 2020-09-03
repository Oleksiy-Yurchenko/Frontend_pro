const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

alert(averageStudentMark(students[3])); 


alert(averageGroupMark(students));


function averageStudentMark(student) {
    return student.marks.reduce((markOne, markTwo) => (markOne + markTwo)) / student.marks.length;
}


function averageGroupMark(studentsArray){
    const groupMarks = studentsArray.flatMap((studentMarks) => studentMarks.marks);
    return groupMarks.reduce((markOne, markTwo) => (markOne + markTwo)) / groupMarks.length;     
}
