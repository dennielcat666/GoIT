function Human (){
    this.name = 'Jon';
    this.age = 28;
    this.gender = 'm';
    this.height = 190;
    this.weight = 81;
}


function Worker (){
    this.placeOfWork = 'Mac';
    this.salary = 1000000
}

function Student (){
    this.placeOfStudy = 'Garvard';
    this.scholarship = 500
}

Worker.prototype = new Human();
Student.prototype = new Human();

var newWorker = new Worker();
var newStudent = new Student();

console.log('newWorker', newWorker.name);

