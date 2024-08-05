// Activity 1 - Two Sum

// Task 1
function findTwoSum(nums, target) {

    const numIndices = new Map(); // Map to store the number and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }
        
        numIndices.set(nums[i], i);
    }
    
    return []; 
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(findTwoSum(nums, target)); // Output: [0, 1]

// Activity 2 - Reverse Integer

// Task 2
function reverseInteger(x) {
    const reversed = x.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(x);
}
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21

// Activity 3 - Palindrome Number

// Task 3
function isPalindrome(x) {
    const reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed;
}
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

// Activity 4 - Merge Two Sorted Lists

// Task 4
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    let head = null;
    let current = null;

    for (const value of arr) {
        const newNode = new ListNode(value);
        if (!head) {
            head = newNode;
            current = head;
        } else {
            current.next = newNode;
            current = newNode;
        }
    }
    return head;
}

// Function to print a linked list 
function printList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
    const head = new ListNode(); 
    let current = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2; 
    return head.next;
}

const l1 = arrayToList([1, 2, 4]);
const l2 = arrayToList([1, 3, 4]);

const mergedList = mergeTwoLists(l1, l2);
printList(mergedList); 

// Activity 5 - Valid Parentheses

// Task 5
function isValidParentheses(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(brackets[s[i]]);
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}
console.log(isValidParentheses('()[]{}')); // Output: true
console.log(isValidParentheses('(]')); // Output: false
console.log(isValidParentheses('([)]')); // Output: false