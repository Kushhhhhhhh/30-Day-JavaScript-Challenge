// Activity 1 - Basic Error Handling with Try-Catch

// Task 1
function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    return a + b;
}

try {
    addNumbers("kush", "sharma");
} catch (error) {
    console.error('Error: ', error.message);
}

// Task 2
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

try {
    divideNumbers(10, 0);
} catch (error) {
    console.error('Error: ', error.message);
}

// Activity 2 - Finally Block

// Task 3
try {
    console.log("Entering try block...");
    throw new Error("Something went wrong!");
    console.log("Leaving try block..."); // never executed
} catch (error) {
    console.log("Entering catch block...");
    console.error("Error caught: ", error.message);
    console.log("Leaving catch block...");
} finally {
    console.log("Entering finally block...");
    console.log("This block always executes, regardless of errors!");
    console.log("Leaving finally block...");
}

// Activity 3 - Custom Error Objects

// Task 4
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyError("oho kuch toh gadbad hai");
} catch (error) {
    console.error(error.name + ": " + error.message);
}

// Task 5
function checkInput(input) {
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }
    if (input.trim() === "") {
        throw new Error("Input cannot be empty");
    }
    return input;
}

try {
    checkInput("Kush");
} catch (error) {
    console.error(error.name + ": " + error.message);
}

// Activity 4 - Error Handling in Promises

// Task 6
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
        console.log("Hello");
    }, 2000);
}).catch((error) => console.log("Error resolving promise:", error));
console.log(promise);

// Task 7
async function getRandomPromise() {
    return new Promise((resolve, reject) => {
      const randomBoolean = Math.random() < 0.5;
      if (randomBoolean) {
        resolve("Promise resolved!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    });
  }
  
  async function main() {
    try {
      const result = await getRandomPromise();
      console.log(result);
    } catch (error) {
      console.error("Error caught: ", error.message);
    }
  }
  
  main();

// Activity 5 - Graceful Error Handling in Fetch

// Task 8
const newPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/userss/1')
      .then(response => {
        if (!response.ok) {
          reject(new Error(`Error fetching data: ${response.status}`));
        } else {
          return response.json();
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  
// Task 9
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/userss/1');

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchData();