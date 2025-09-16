const btn = document.getElementById("click-me")
btn.addEventListener("click", function (event) {
    console.log("Button clicked")
})

btn.addEventListener('click', function(event){
    console.log(event.target, event.currentTarget);
    
})

let count = 0;
const span = document.getElementById("count")

document.getElementById("plus").addEventListener('click', () => span.textContent = ++count)
document.getElementById("minus").addEventListener('click', () => span.textContent = --count)



const list = document.getElementById("list")
const add = document.getElementById("add")


add.addEventListener("click", function(e) {
    const input = document.getElementById("inputText")
    const inputText = input.value.trim();

    // to avoid empty list
    if (inputText !== "") {
        const li = document.createElement('li'); 
        li.textContent = inputText;
        list.appendChild(li)

        input.value = "";
    }
    list.addEventListener('click', (e) => {
        if (e.target.tagName == "LI") {

            e.target.remove();
        }
    })
    
})


const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }

    
})
const password = document.getElementById("password")

password.addEventListener("input", function() {
    if(password.value.length < 6) {
        password.setCustomValidity("Password must be at least 6 character long")
    } else {
        password.setCustomValidity("")
    }
})



