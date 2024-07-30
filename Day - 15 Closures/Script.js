// Activity 1 - Understanding Closures

// Task 1
function outerFunction(x) {
    function innerFunction() {
        return x;
    }
    return innerFunction;
}

const func = outerFunction(10);
const result = func();
console.log(result);

// Task 2
function counter() {
    let count = 0;

    function increment() {
        count++;
    }

    function currentValue() {
        return count;
    }

    return {
        increment: increment,
        currentValue: currentValue
    };
}

const counterInstance = counter();

console.log(counterInstance.currentValue());  // Output: 0

counterInstance.increment();
counterInstance.increment();

console.log(counterInstance.currentValue());  // Output: 2

// Activity 2 - Practical Closures

// Task 3
function generateUniqueId() {
    let id = 0;
    return function () {
        return id++;
    };
}

const generateId = generateUniqueId();

console.log(generateId());  // Output: 0
console.log(generateId());  // Output: 1
console.log(generateId());  // Output: 2

// Task 4
function greetFactory(userName) {
    return function () {
        console.log(`Hello, ${userName}!`);
    };
}

const greetKush = greetFactory('Kush');
greetKush();  // Output: "Hello, Kush!"

// Activity 3 - Closures in Loops

// Task 5
const functions = [];

for (let i = 0; i < 5; i++) {
    functions.push((function (index) {
        return function () {
            console.log(`Function at index ${index} called`);
        };
    })(i));
}

functions[0]();  // Output: Function at index 0 called
functions[1]();  // Output: Function at index 1 called

// Activity 4 - Module Patterns

// Task 6
function itemManager() {
    let items = [];

    function add(item) {
        items.push(item);
    }

    function remove(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    function list() {
        return items.slice();
    }

    return {
        add: add,
        remove: remove,
        list: list
    };
}

const manager = itemManager();

manager.add('Item 1');
manager.add('Item 2');
manager.add('Item 3');

console.log(manager.list());
manager.remove('Item 2');
console.log(manager.list());

// Activity 5 - Memoization

// Task 7
function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));

// Task 8
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n-1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(10)); 