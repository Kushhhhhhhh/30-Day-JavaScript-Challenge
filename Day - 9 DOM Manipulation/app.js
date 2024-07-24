// Activity 1 - Select and Manipulate Elements

// Task 1
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector("#text");
    text.textContent = "Hey kush";
})

// Task 2
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".container");
    text.style.backgroundColor = "black";
})

// Activity 2 - Creating and Appending Elements

// Task 3
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".container");
    const h2 = document.createElement("h2");
    h2.textContent = "yo wassuupp";
    text.appendChild(h2);
})

// Task 4
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".container");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.textContent = "kush";
    li2.textContent = "john";
    li3.textContent = "tom";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    text.appendChild(ul);
})

// Activity 3 - Removing Elements

// Task 5
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".container");
    const h2 = document.querySelector("h2");
    text.removeChild(h2);
})

// Task 6
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const ul = container.querySelector("ul");
    
    if (ul) {
        const lastChild = ul.lastElementChild;
        if (lastChild) {
            ul.removeChild(lastChild);
        }
    }
})

// Activity 4 - Modifying Elements

// Task 7
document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector("#img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s"
})

// Task 8
document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector("#img");
    img.style.border = "5px solid black";
    const text = document.querySelector(".container");
    text.style.backgroundColor = "";
})

// Activity 5 - Event Handling

// Task 9
document.addEventListener("click", () => {
    const btn = document.querySelector("#btn");
    btn.textContent = "Text Changed";
})

// Task 10
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");
    btn.addEventListener("mouseover", () => {
        btn.textContent = "Text is changing! wow";
    })
})