// Activity 1 - Basic Event Handling

// Task 1
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", () => {
        const para = document.getElementById("text-task1");
        para.textContent = "Hello Kush";
    });

    // Task 2
    const img = document.getElementById("img");
    img.addEventListener("dblclick", () => {
        img.style.opacity = 0.5;
    });
});


// Activity 2 - Mouse Events

// Task 3
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    heading.addEventListener("mouseover", () => {
        heading.style.backgroundColor = "yellow";
    });
})

// Task 4
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    heading.addEventListener("mouseout", () => {
        heading.style.backgroundColor = "";
    });
})

// Activity 3 - Keyboard Events

// Task 5
const inputField = document.getElementById("input-field");
    inputField.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
});

// Task 6
const inputField2 = document.getElementById("input-field");
    inputField2.addEventListener("keyup", (event) => {
        console.log(`Key released: ${event.key}`);
});

// Activity 4 - Form Events

// Task 7
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#task7 form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData);
        for (const [key, value] of formData) {
            console.log(`${key}: ${value}`);
        }
    });
})

// Task 8
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("mySelect");
    const paragraph = document.getElementById("selected-value");

    select.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        paragraph.textContent = `You selected: ${selectedValue}`;
    });
})

// Activity 5 - Event Delegation

// Task 9
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("myList");

    list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            console.log(`You clicked: ${event.target.textContent}`);
        }
    });
})

// Task 10
document.addEventListener("DOMContentLoaded", () => {
    const parent = document.getElementById("parent");

    if (parent) {
        parent.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                console.log(`You clicked: ${event.target.textContent}`);
            }
        });

        // dynamically add child elements
        for (let i = 0; i < 5; i++) {
            const button = document.createElement("button");
            button.textContent = `Button ${i + 1}`;
            parent.appendChild(button);
        }
    } else {
        console.error("Element with id 'parent' not found.");
    }
});