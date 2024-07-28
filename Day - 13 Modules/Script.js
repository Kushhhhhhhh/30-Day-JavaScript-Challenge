// Activity 1 - Creating and Exporting Modules

// Task 1
export const add = (a, b) => a + b;

// Task 2
export const obj1 = {
    name: 'kush',
    age: 20,
    greeting: (name) => `Hello ${name}`
}

// Activity 2 - Named and Default Exports

// Task 3
export const multipleFunc = () => {
    const add2 = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add2,
        sub,
        mul,
        div
    }
}

// Task 4
export default (a, b) => a + b

// Activity 3 - Importing Enitire Modules

// Task 5
export const obj2 = {
    stdName: 'Kush Sharma',
    stdAge: 20,
    stdCourse: "BCA",
    stdMarks : () => {
        return [74, 58, 88, 67];
    },
    stdSub: ["OS", "DSA", "DBMS", "OOP"],
}

// Activity 4 - Using third party modules

// Task 6
// In AnotherScript File

// Task 7
// In AnotherScript File

// Activity 5 - Module Bundling

// Task 8
// Tried and Configured properly I guess [check dist folder]