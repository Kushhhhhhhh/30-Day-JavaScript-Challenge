// Activity 1 - Sorting Algorithms

// Task 1
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log("Bubble Sort: ", bubbleSort([5, 3, 8, 2, 9, 1]));

// Task 2
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log("Selection Sort: ", selectionSort([5, 3, 8, 2, 9, 1]));

// Task 3
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
console.log("Quick Sort: ", quickSort([5, 3, 8, 2, 9, 1]));

// Activity 2 - Searching Algorithms

// Task 4
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log("Linear Search: ", linearSearch([1, 2, 3, 4, 5], 3));

// Task 5
function binarySearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    } else {
        let mid = Math.floor(arr.length / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            return binarySearch(arr.slice(0, mid), target);
        } else {
            return (
                binarySearch(arr.slice(mid + 1, arr.length), target) + mid + 1
            );
        }
    }
}
console.log("Binary Search: ", binarySearch([1, 2, 3, 4, 5], 3));

// Activity 3 - String Algorithms

// Task 6
function countOccurrences() {
    const charCounts = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }

    console.log(charCounts);
}

const str = "hello world";
countOccurrences(str);

// Task 7
function longestSubstringWithoutRepeatingChars(str) {
    let maxLen = 0;
    let maxSubstring = "";

    for (let i = 0; i < str.length; i++) {
        let seenChars = {};
        let currentLen = 0;
        let currentSubstring = "";

        for (let j = i; j < str.length; j++) {
            const char = str[j];
            if (seenChars[char]) {
                break;
            }
            seenChars[char] = true;
            currentLen++;
            currentSubstring += char;
        }

        if (currentLen > maxLen) {
            maxLen = currentLen;
            maxSubstring = currentSubstring;
        }
    }

    console.log(`Longest substring without repeating characters: ${maxSubstring} (${maxLen} characters)`);
}

// Example usage:
longestSubstringWithoutRepeatingChars("abcabcbb");

// Acitivity 4 - Array Algorithms

// Task 8
function rotateArray(arr, k) {
    k = k % arr.length; 
    return arr.slice(-k).concat(arr.slice(0, -k));
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Original array: " + arr);
console.log("Rotated array: " + rotateArray(arr, k));

// Task 9
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("Merged arrays: " + mergeArrays(arr1, arr2));

// Activity 5 - Dynamic Programming

// Task 10
function fibonacci(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Example usage:
console.log("Fibonacci sequence: " + fibonacci(10));

// Task 11
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = new Array(n + 1).fill().map(() => new Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            dp[i][j] = dp[i - 1][j];
            if (weights[i - 1] <= j) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            }
        }
    }
    return dp[n][capacity];
}

// Example usage:
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;
console.log("Knapsack problem: " + knapsack(weights, values, capacity));