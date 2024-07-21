// Activity 1 - Array Creation and Access

// Task 1
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
const arr2 = [10, 20, 30, 40, 50];
console.log(arr2[0], arr2[4]);

// Acvtivity 2 - Array Methods - [Basics]

// Task 3
const arr3 = [1, 2, 3, 4, 5];
arr3.push(6);
console.log(arr3);

// Task 4
const arr4 = [10, 20, 30, 40, 50];
arr4.pop();
console.log(arr4);

// Task 5
const arr5 = [1, 2, 3, 4, 5];
arr5.unshift(0);
console.log(arr5);

// Task 6
const arr6 = [10, 20, 30, 40, 50];
arr6.shift();
console.log(arr6);

// Activity 3 - Array Methods - [Intermediate]

// Task 7
const arr7 = [12, 32, 63, 24, 45];
const newArr = arr7.map(x => x * 2);
console.log(newArr);

// Task 8
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr2 = arr8.filter(x => x % 2 === 0);
console.log(newArr2);

// Task 9
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr3 = arr9.reduce((a, b) => a + b);
console.log(newArr3);

// Activity 4 - Array Iteration

// Task 10
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr10.forEach(x => console.log(x));

// Task 11
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr11.length; i++) {
    console.log(arr11[i]);
}

// Activity 5 - Multi-dimensional Arrays

// Task 12
const arr12 = [
    [1, 2],
    [3, 4]
];
console.log(arr12);

// Task 13
console.log(arr12[0][0], arr12[0][1], arr12[1][0], arr12[1][1]);