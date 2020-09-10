function Student(name, marksArray) {
    this.name = name;
    this.marksArray = marksArray;
}


Student.prototype.averageMark = function() {
    this.meanMark = this.marksArray.reduce((accum, curValue) => accum + curValue) / this.marksArray.length;
    return `${this.name} - ${this.meanMark}`;
}


const john = new Student('John', [10, 9, 10, 9]);
const anna = new Student('Anna', [10, 8, 7, 9]);

alert(john.averageMark());
alert(anna.averageMark());
