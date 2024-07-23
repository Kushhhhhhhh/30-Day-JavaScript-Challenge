// Activity 1 - Template Literals

// Task 1
let name = "kush";
let age = 20;
console.log(`Hello I'm ${name} and my age is ${age}.`);

// Task 2
let str = ` Hello , 
How are you?
How you doing?
`
console.log(str);

// Activity 2 - Destructuring

// Task 3
let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(first, second);

// Task 4
let book = {
    author: "Robert Greene",
    title: "I Know Why the Caged Bird Sings",
};
let {author, title} = book;
console.log(`${author} wrote ${title}.`);

// Activity 3 - Spread and Rest Operator

// Task 5
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [6, 7, 8, 9, 10];
let arr4 = [...arr2, ...arr3];
console.log(arr4);

// Task 6
function sum(...nums){
    return nums.reduce((a, b) => a + b);
}
let arr5 = [1, 2, 3, 4, 5];
let result = sum(...arr5);
console.log(result);

// Activity 4 - Default Parameters

// Task 7
function defaultParams(b = 1){
    return a * b;
}
let result2 = defaultParams(a = 10);
let result3 = defaultParams();
console.log(result2);
console.log(result3);

// Activity 5 - Enhanced Object Literals

// Task 8
const myName = "Kush";
const myAge = 20;
const myDetails = {
    myName,
    myAge,
    greet(){
        console.log(`Hello, I'm ${this.myName} and my age is ${this.myAge}.`);
    },
    incrementAge(years = 1){
       this.myAge+= years
       console.log(`New age is ${this.myAge}.`);
    },
}
myDetails.greet();
myDetails.incrementAge();
myDetails.incrementAge(5);

// Task 9
const propName1 = "firstName"
const propName2 = "lastName";
const propName3 = "passion";
const person = {
    [propName1]: "Kush",
    [propName2]: "Singh",
    [propName3]: "JavaScript",
    [`get${propName1.charAt(0).toUpperCase() + propName1.slice(1)}`](){
        return this[propName1];
    }
}

console.log(person);
console.log(person.getFirstName());