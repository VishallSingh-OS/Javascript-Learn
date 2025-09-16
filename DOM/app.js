const title = document.getElementById("title")
title.innerText = "Hello DOM";

let  body = document.getElementsByTagName("body")
document.body.style.backgroundColor = "lightblue"

const list = document.getElementById("list")

let newList = document.createElement("li")
newList.textContent = "New Item"

list.appendChild(newList)

let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    document.body.style.backgroundColor = "red"
})



let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let counter = document.getElementById("counter")


let number = 0;
increase.addEventListener("click", function () {
    number++;
    counter.textContent = ` Count ${number}`;
})

decrease.addEventListener("click", function () {
    number--;
    counter.textContent = ` Count ${number}`;
})







