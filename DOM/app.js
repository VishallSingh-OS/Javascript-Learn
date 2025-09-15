const title = document.getElementById("title")
title.innerText = "Hello DOM";

let  body = document.getElementsByTagName("body")
document.body.style.backgroundColor = "lightblue"

const list = document.getElementById("list")

let newList = document.createElement("li")
newList.textContent = "New Item"

list.appendChild(newList)





