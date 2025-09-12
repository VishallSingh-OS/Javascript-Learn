// Easy
// Write a function sayHello that prints "Hello, World!".
// Write a function double(num) that returns twice the number.

function sayHello() {
    console.log("Hello, World!");
    
};

sayHello();

function double(num) {
    return 2 * num
};

console.log(double(3));


// Medium
// Write a function getFullName(firstName, lastName) that returns "firstName lastName".
// Write a function calculateArea(length, width) that returns the area of a rectangle.


function getFullName(firstname="John", lastname="Doe") {
    return `${firstname} ${lastname}`;
};

console.log(getFullName());
console.log(getFullName("vishal", "singh"));

function calculateArea(length, width) {
    let area = length * width;
    return area;
};

console.log(calculateArea(4,5));


// Challenging
// Write a function getStudentInfo(student) that accepts an object like:
// { name: "Vishal", age: 20, subjects: ["Math", "CS"] }
// and returns:
// "Vishal is 20 years old and studies Math, CS."

let student = { name: "Vishal", age: 20, subjects: ["Math", "CS"] }
  

function getStudentInfo(student) {
    return `Vishal is ${student.age} years old and studies ${student.subjects.join(", ")}.`;
};

console.log(getStudentInfo(student));












