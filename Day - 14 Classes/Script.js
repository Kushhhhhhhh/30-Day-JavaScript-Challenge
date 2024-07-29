// Crash Course on Class
// In JavaScript, a class is a blueprint for creating objects. It's a way to define a custom data type that can contain properties (data) and methods (functions) that operate on that data.

// Activity 1 - Class Definition

// Task 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log("Hello, I'm " + this.name + " and my age is " + this.age + ".");
    }
}

const myPerson = new Person("kush", 20);
myPerson.greeting();

// Task 2
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log("Hello, I'm " + this.name + " and my age is " + this.age + ".");
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const myPerson2 = new Person2("kush", 20);
myPerson2.updateAge(21);
myPerson2.greeting();

// Activity 2 - Class Inheritance

// Task 3
class Student extends Person2 {
    constructor(studentId){
        super("kush", 20);
        this.studentId = studentId;
    }
}

const myStudent = new Student(1429);
console.log(myStudent.studentId);

// Task 4
class Student2 extends Person2 {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

   greeting() {
        console.log("Hello, I'm " + this.name + " and my age is " + this.age + " and my student id is " + this.studentId + ".");
    }
}

const myStudent2 = new Student2("kush", 20, 1429);
myStudent2.greeting();

// Activity 3 - Static Methods and Properties

// Task 5
class Person3 {

    static genericGreeting() {
        return "Hello, I'm person 3";
    }
}

console.log(Person3.genericGreeting());

// Task 6
class Student3 extends Person2 {
    static totalStudents = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student3.totalStudents++;
        console.log(`Total students: ${Student3.totalStudents}`);
    }
}

const myStudent3 = new Student3("kush", 20, 1429);
const myStudent4 = new Student3("kushey", 22, 1430);

// Activity 4 - Getters and Setters

// Task 7 & 8
class Person4 {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get name() {
        return this._firstName + " " + this._lastName;
    }

    set name(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

const myPerson4 = new Person4("kush", "sharma");
console.log(myPerson4.name);
myPerson4.name = "Payal Sharma";
console.log(myPerson4.name);

// Activity 5 - Private Fields

// Task 9 & 10
class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return true;
        } else {
            console.error("Invalid deposit amount");
            return false;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return true;
        } else {
            console.error("Invalid withdrawal amount");
            return false;
        }
    }
}

const myAccount = new Account(1000);
console.log(myAccount.getBalance()); 
console.log(myAccount.withdraw(1200));
console.log(myAccount.deposit(2000));
console.log(myAccount.getBalance());