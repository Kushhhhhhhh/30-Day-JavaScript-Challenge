// Activity 1 - For Loop

// Task 1
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Task 2
for (let j = 1; j < 11; j++) {
    console.log(j * 5);
}

// Activity 2 - While Loop

// Task 3
let k = 1;
let sum = 0;
while (k <= 10) {
    console.log(sum += k);
    k++;
}

// Task 4
let  l = 10;
while(l >= 1) {
    console.log(l);
    l--;
}

// Activity 3 - Do While Loop

// Task 5
let m = 1;
do {
    console.log(m);
    m++;
} while (m <= 5)

// Task 6
let n = 1;
let factorial = 1;
do {
    factorial *= n;
    n++;
} while (n <= 5)
console.log(factorial)

// Activity 4 - Nested Loop

// Task 7

for(let i = 1; i <= 5; i++){
    let star = "*".repeat(i);
    console.log(star);
}

// Activity 5 - Loop Control Statements

// Task 8
for(let i = 1; i <= 10; i++){
    if(i === 5) continue;
    console.log(i);
}

// Task 9
for(let i = 1; i <= 10; i++){
    if(i === 5) break;
    console.log(i);
}