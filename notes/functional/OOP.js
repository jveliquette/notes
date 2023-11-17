// const student = {
//     name: "Alice",
//     grade: 5,
//     hoursStudied: 12,
//     study: function () {
//         return `${student.name} studied for ${studnt.hoursStudied}`;
//     },
// };

// const student2 = {
//     name: "Bob",
//     grade: 12
//     hoursStudied: 5,
//     study: function () {
//         return `${student.name} studied for ${student.hoursStudied}`;
//     },
// };

//Blueprint
class Student {
    constructor(name, grade, hoursStudied) {
        this.name = name;
        this.grade = grade;
        this.hoursStudied = hoursStudied;
        console.log("this", this);
    }
}

const student = new Student(("Alice", 5, 12));

console.log("student before mutation", student);
console.log("student after mutation", student);

const student2 = new Student("Emma", 12, 8);

console.log("student2", student2.study());

// const students = [];
// for (let i = 0; i < 3; i++) {
//     const studentName = ["name1", "name2"];
//     const studentGrade = [5, 23];
//     const hoursStudied = [23, 45];
// const student = new Student(studentName[i], studentGrade[i], hoursStudied[i]);
// students.push(student);
// }

// class Array {
//     constructor() {
//         this.array = [];
//     }

//     push(value) {
//         this.array[this.array.length - 1] = value;
//     }
// }

// const number = newArray [];


const number = [];
console.log(typeof number);
number.push(2);
console.log("number", number);
console.log("typeof number", typeof number);
console.log(Array.isArray("string"));
