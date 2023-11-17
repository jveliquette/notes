const student = {
    name: "Alice",
    grade: 5,
    hoursStudied: 12,
    study: function () {
        return `${student.name} studied for ${studnt.hoursStudied}`;
    },
};

const student2 = {
    name: "Bob",
    grade: 12
    hoursStudied: 5,
    study: function () {
        return `${student.name} studied for ${student.hoursStudied}`;
    },
};


console.log("Student", student);

console.log("Study function: ", student.study());

console.log("Student2", student2);

console.log("Study function: for student2 ", student.study());

function createStudent(name, grade, hoursStudied) {
    return {
        name: name,

    }
}
