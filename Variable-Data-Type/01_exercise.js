// Easy

// Create 3 variables: city, population, isCapital. Assign appropriate values. Print them.
// Make a variable price with value 100. Change it to 150 using let. Try the same with const. What happens?

let city = "Patna";
let population = 200000;
let isCapital = true;

console.log('Patna: ' + city);
console.log('Population: ' + population);
console.log('isCapital: ' + isCapital);

// Medium

// Make an array called marks with values [80, 90, 70]. Print the second element.
// Create an object car with keys: brand, model, year. Assign values and log them.
// Use typeof to check the type of "123", 123, true, and null.

let marks = [80, 90, 70]
console.log('Marks[2]: '+ marks[1]);

let car = {
    brand: 'BMW',
    model: 'M4',
    year: '2022'
}
console.log(car.brand);

console.log(
 typeof "123",
 typeof [1,2,3],
 typeof "Vishal",
 typeof true,
 typeof null,
 typeof 123,

);


// Create variables for a "student profile":
// name (string),
// age (number),
// subjects (array),
// isGraduated (boolean),
// address (object with city and pin).
// Then print them in a readable sentence like:
// "Vishal is 20 years old, lives in Patna (800001), studies [Math, CS, Physics], and graduation status is false."

const vishal = {
    name: "Vishal",
    age: 20,
    subjects: ["Math", "CS", "Physics"],
    isGraduated: false,
    address: {
        city: "Patna",
        Pin: 802158,
    },
};

console.log(`Vishal is ${vishal.age}  years old, lives in ${vishal.address.city} (${vishal.address.Pin}),studies ${vishal.subjects}, and graduation status is ${vishal.isGraduated}`);
