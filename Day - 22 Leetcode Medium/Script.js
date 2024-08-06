// Activity 1 - Add two numbers

// Task 1
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
}

function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Test case 1: (2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result1 = addTwoNumbers(l1, l2);
printLinkedList(result1); // Should print: [7, 0, 8]

// Test case 2: (0) + (0)
let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);
let result2 = addTwoNumbers(l3, l4);
printLinkedList(result2); // Should print: [0]

// Test case 3: (9 -> 9) + (1)
let l5 = createLinkedList([9, 9]);
let l6 = createLinkedList([1]);
let result3 = addTwoNumbers(l5, l6);
printLinkedList(result3); // Should print: [0, 0, 1]

// Activity 2 - Longest Substring Without Repeating Characters

// Task 2
function lengthOfLongestSubstring(s) {
    let charMap = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        if (charMap[char] !== undefined) {
            left = Math.max(left, charMap[char] + 1);
        }
        charMap[char] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Should log: 3
console.log(lengthOfLongestSubstring("abcde")); // Should log: 5
console.log(lengthOfLongestSubstring("bbbbb")); // Should log: 1
console.log(lengthOfLongestSubstring(" a!@#$%^&*()_+")); // Should log: 13
console.log(lengthOfLongestSubstring("")); // Should log: 0
console.log(lengthOfLongestSubstring("aab")); // Should log: 2
console.log(lengthOfLongestSubstring("pwwkew")); // Should log: 3

// Activity 3 - Container With Most Water

// Task 3
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
        let currentArea = Math.min(height[left], height[right]) * width;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([5, 5, 5, 5, 5]));
console.log(maxArea([1, 2, 3, 4, 5]));
console.log(maxArea([5, 4, 3, 2, 1]));
console.log(maxArea([1, 1]));
console.log(maxArea([1]));
console.log(maxArea([])); 

// Activity 4 - 3Sum

// Task 4
function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
            }
            if (sum <= 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([-2, 0, 0, 2, 2]));

// Activity 5 - Group Anagrams

// Task 5
function groupAnagrams(strs) {
    let result = {};
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("").sort().join("");
        if (result[sorted]) {
            result[sorted].push(strs[i]);
        } else {
            result[sorted] = [strs[i]];
        }
    }
    return Object.values(result);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([]));