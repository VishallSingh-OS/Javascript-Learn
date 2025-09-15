// Easy
// Write a program that checks if a number is positive, negative, or zero using if-else.
// Print numbers from 1 to 10 using a for loop.


let number = 5;

if (number == 0) {
  console.log("zero");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}

for ( let i = 1; i<=10; i++){
    console.log(i);
    
}

// Medium
// Print the multiplication table of 5 using a loop.
// Write a program that checks if a given year is a leap year (divisible by 4, not by 100 unless divisible by 400).

for (let i = 1; i <= 10; i++) {
    let number = 5;
    console.log(number*i);
    
}

let  year = 2004;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
    
} else {
    console.log(`${year} is not a leap year`);
    
}


// Challenging
// Create an array of numbers [12, 7, 9, 20, 5, 30].
// Use a loop to print only even numbers.
// Use if inside loop to count how many numbers are greater than 10.
// Print the count at the end.



let numbers = [12, 7, 9, 20, 5, 30]
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
    
}


let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        count++;
    }
}
console.log(count);






