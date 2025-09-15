// Easy
// Create an array cities with 3 city names. Print the first and last.
// Create an array marks = [45, 67, 89]. Add 100 at the end and remove the first element. Print the array.

let cities = ["Delhi", "Jaipur", "Patna"]
console.log(cities[0], cities[cities.length-1]);

let marks = [45, 67, 89]
marks.push(100)
marks.shift()
console.log(marks);



// Medium
// Make an array numbers = [5, 10, 15, 20, 25].
// Use a loop to print each element.
// Use map() to create an array of doubled values.
// Create an array fruits = ["Apple", "Mango", "Orange", "Banana"].
// Filter only fruits with more than 5 letters.


let numbers = [5, 10, 15, 20, 25]

for(let number of numbers){
    console.log(number);
    
};

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
    
}

numbers.forEach(number => console.log(number))


const squaredNumbers = numbers.map(n => n*n)
console.log(squaredNumbers);

let fruits = ["Apple", "Mango", "Orange", "Banana"];

let longFruits = fruits.filter(fruit => fruit.length > 5);

console.log(longFruits);



// Create an array of objects students like this:
// Print all names using forEach.
// Filter students older than 18.
// Use map() to create an array of only student names.

let students = [
  { name: "Vishal", age: 20 },
  { name: "Aman", age: 19 },
  { name: "Raj", age: 18 },
];

students.forEach(element => {
    console.log(element.name)
});

let studentOlderThan18 = students.filter(student => student.age > 18)
console.log(studentOlderThan18);

let studentName = students.map(student => student.name)

console.log(studentName);






