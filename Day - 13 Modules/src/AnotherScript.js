// Activity 1 - Importing and Exporting Modules

// Task 1
import { add } from "../Script.js";
console.log(add(5, 6));

// Task 2
import { obj1 } from "../Script.js";
console.log(obj1.greeting("kush"));

// Task 3
import { multipleFunc } from "../Script.js";
const { add2, sub, mul, div } = multipleFunc();
console.log(add2(5, 6));
console.log(sub(5, 6));
console.log(mul(5, 6));
console.log(div(5, 6));

// Task 4
import { default as myAdd } from '../Script.js';
console.log(myAdd(2, 3)); 

// Task 5
import { obj2 } from "../Script.js";
console.log(obj2.stdAge);
console.log(obj2.stdMarks());
console.log(obj2.stdSub[0], obj2.stdSub[1]);

// Task 6
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const chunkedArray = _.chunk(array, 2);
console.log(chunkedArray); 

// Task 7
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    });