// Activity 1 - Basic Recursion

// Task 1
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));

// Task 2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(10));

// Activity 2 - Recursion with Arrays

// Task 3
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}
console.log(sumArray([1, 2, 3, 4, 5]));

// Task 4
function maxElement(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return Math.max(arr[0], maxElement(arr.slice(1)));
    }
}
console.log(maxElement([1, 22, 3, 4, 5]));

// Activity 3 - String Manipulation with Recursion

// Task 5
function reverseString(str) {
    if (str.length === 0) {
        return "";
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
}
console.log(reverseString("hello"));

// Task 6
function Palindrome(str) {
    if (str.length === 0) {
        return true;
    } else {
        return (
            str[0] === str[str.length - 1] &&
            Palindrome(str.slice(1, str.length - 1))
        );
    }
}
console.log(Palindrome("hello"));

// Activity 4 - Recursive Search

// Task 7
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
console.log(binarySearch([1, 2, 3, 4, 5], 3));

// Task 8
function occurences(arr, target) {
    if (arr.length === 0) {
        return 0;
    } else {
        if (arr[0] === target) {
            return 1 + occurences(arr.slice(1), target);
        } else {
            return occurences(arr.slice(1), target);
        }
    }
}
console.log(occurences([1, 2, 1, 3, 4, 1, 5], 1));

// Activity 5 - Tree Traversal

// Task 9
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    // Visit the left subtree
    inOrderTraversal(node.left);

    // Visit the root node
    console.log(node.value);

    // Visit the right subtree
    inOrderTraversal(node.right);
}

// Example usage:
// Creating a binary tree
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

inOrderTraversal(root);

// Task 10
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function calculateDepth(node) {
    if (node === null) {
      return 0; // Base case: the depth of an empty tree is 0
    }
  
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
  
    // The depth of the current node is 1 plus the maximum depth of the left and right subtrees
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Example usage:
  // Creating a binary tree
  //       1
  //      / \
  //     2   3
  //    / \   \
  //   4   5   6
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(6);
  
  // Calculating and logging the depth of the binary tree
  console.log(calculateDepth(root)); // Output will be: 3
  
  // Additional test case:
  // Creating another binary tree
  //       1
  //      / 
  //     2   
  //    / 
  //   3   
  
  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.left.left = new TreeNode(3);
  
  console.log(calculateDepth(root2)); // Output will be: 3
  
  // Another test case with a single node tree
  const root3 = new TreeNode(1);
  
  console.log(calculateDepth(root3)); // Output will be: 1
  
  // Another test case with an empty tree
  const root4 = null;
  
  console.log(calculateDepth(root4)); // Output will be: 0  