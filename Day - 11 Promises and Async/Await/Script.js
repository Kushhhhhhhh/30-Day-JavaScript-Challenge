// Activity 1 - Understanding Promises

// Task 1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
        console.log("Hello");
    }, 2000);
});
console.log(promise);

// Task 2
let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected Promise");
    }, 2000);
}).catch((error) => {
    console.error("Error in Promise2 :", error);
});
console.log(newPromise);

// Activity 2 - Chaining Promises

// Task 3
function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data fetched from ${url}`);
        }, 2000);
    });
}

fetchDataFromServer('https://example.com/data1')
    .then((data) => {
        console.log(`Received data: ${data}`);
        return fetchDataFromServer('https://example.com/data2');
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });

// Activity 3 - Using Async Await

// Task 4
async function Task4() {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
            console.log("Hello I am resolved");
        }, 2000);
    });
}
Task4()

// Task 5
async function Task5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("You are rejected");
            console.log("I am rejected");
        }, 2000);
    });
}

async function executeTask() {
    try {
        await Task5();
    } catch (error) {
        console.error("Task5 was rejected with error:", error);
    }
}
executeTask();

// Activity 4 - Fetching Data from an API

// Task 6
function fetchApi2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
fetchApi2();

// Task 7
async function fetchApi(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}
fetchApi()

// Activity 5 - Concurrent Promises

// Task 8
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000);
});
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error);
    });

// Task 9
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 4 resolved");
    }, 1000);
});
Promise.race([promise4])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    })