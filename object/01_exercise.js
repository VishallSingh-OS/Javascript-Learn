// Easy
// Create an object book with properties: title, author, year. Print them.
// Create an object user with keys username and email. Change the email to a new one and print it.



let book = {
    title: "Godan",
    author: "Prem",
    year: 1987,
};

console.log(book.title, book.author, book.year)

let user = {
    username: "Vishal",
    email: "vssfsdjf@gmail.com"
};

user.email = "sdfsdf@gmail.com";
console.log(user.email);


// Medium
// Make an object movie with title, director, year, and actors (array). Print the second actor.
// Create an object laptop with properties brand, model, specs (an object with ram and storage). Print the storage.

let movie = {
    title: "Fight Club",
    director: "David Finch",
    year: 2000,
    actor: ["brad pitt", "Robert"]
};

console.log(movie.actor[1]);

let laptop = {
    brand: "Lenovo",
    model: "LOQ",
    specs: {
        ram: 24,
        storage: 512,
    },
};

console.log(laptop.specs.storage);

// Challenging
// Create an object school with:
// name (string)
// location (object with city and pin)
// students (array of objects with name and age)
// Then print:
// "Our school NewGovtPolytechnic is in Patna (800001). The first student is Raj, 18 years old."


let school = {
    schoolName: "NGP Patna-13",
    location: {
        city: "Patna",
        pin: 802158,
    },
    student: [
        std1 = {
            stdName: "Raj",
            age: 18,
        },
        std2 = {
            stdName: "Ashish",
            age: 20,
        }
    ]
}
console.log(
  `Our school ${school.schoolName} is in ${school.location.city} (${school.location.pin}). The first student is ${school.student[0].stdName}, ${school.student[0].age} years old.`
);

