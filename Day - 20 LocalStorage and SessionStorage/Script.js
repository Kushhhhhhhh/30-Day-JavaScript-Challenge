// Activity 1 - Understanding LocalStorage 

// Task 1
localStorage.setItem("name", "kush");
console.log(localStorage.getItem("name"));

// Task 2
const obj2 = {
    name: "kush",
    age: 20
}
localStorage.setItem("obj", JSON.stringify(obj2));
console.log(JSON.parse(localStorage.getItem("obj")));

// Activity 2 - Using LocalStorage

// Task 3
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;

    console.log("Email:", email);
    console.log("Password:", password);
});

// Task 4
document.getElementById("logout-btn").addEventListener("click", function () {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
})
console.log(localStorage.getItem("email"), localStorage.getItem("password"));

// Activity 3 - Understanding SessionStorage

// Task 5
sessionStorage.setItem("name", "kush");
console.log(sessionStorage.getItem("name"));

// Task 6
const obj3 = {
    name: "kush",
    age: 20
}
sessionStorage.setItem("obj", JSON.stringify(obj3));
console.log(JSON.parse(sessionStorage.getItem("obj")));

// Activity 4 - Using SessionStorage

// Task 7
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name-field").value;

    console.log("Name:", name);
})

// Task 8
document.getElementById("logout-btn2").addEventListener("click", function () {
    sessionStorage.removeItem("name");
})

// Activity 5 - Comparing LocalStorage and SessionStorage

// Task 9
function storeData(key, val) {
    localStorage.setItem(key, val);
    sessionStorage.setItem(key, val);
}
console.log(localStorage.getItem("name"), sessionStorage.getItem("name"));
storeData("name", "kush");

// Task 10
function removeData(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
}
removeData("name");
console.log(localStorage.getItem("name"), sessionStorage.getItem("name"));