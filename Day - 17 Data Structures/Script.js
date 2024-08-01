// Activity 1 - Linked List

// Task 1
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end
    addToEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node from the end
    removeFromEnd() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
    }

    // Method to display all nodes
    displayAllNodes() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);
list.displayAllNodes(); // Output: 1, 2, 3

list.removeFromEnd();
list.displayAllNodes(); // Output: 1, 2

list.removeFromEnd();
list.displayAllNodes(); // Output: 1

list.removeFromEnd();
list.displayAllNodes(); // Output: "The list is empty."

// Activity 2 - Stack

// Task 3
class Stack {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the stack
    pushMethod(item) {
        this.items.push(item);
    }

    // Method to remove and return the top item from the stack
    popMethod() {
        if (this.items.length === 0) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items.pop();
    }

    // Method to return the top item without removing it
    peekMethod() {
        if (this.items.length === 0) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Method to display all items in the stack
    displayAllItems() {
        if (this.items.length === 0) {
            console.log("Stack is empty.");
            return;
        }
        console.log(this.items);
    }
}

// Example usage:
const stack = new Stack();
stack.pushMethod(1);
stack.pushMethod(2);
stack.pushMethod(3);
stack.displayAllItems(); // Output: [1, 2, 3]

console.log(stack.peekMethod()); // Output: 3

console.log(stack.popMethod()); // Output: 3
stack.displayAllItems(); // Output: [1, 2]

console.log(stack.popMethod()); // Output: 2
stack.displayAllItems(); // Output: [1]

console.log(stack.popMethod()); // Output: 1
stack.displayAllItems(); // Output: Stack is empty.

// Task 4
function reverseString(inputString) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (let char of inputString) {
        stack.pushMethod(char);
    }

    // Pop all characters from the stack and build the reversed string
    let reversedString = '';
    while (stack.items.length > 0) {
        reversedString += stack.popMethod();
    }

    return reversedString;
}

// Example usage:
const inputString = "Hello, World!";
const reversed = reverseString(inputString);
console.log("Original String:", inputString); // Output: Hello, World!
console.log("Reversed String:", reversed);    // Output: !dlroW ,olleH

// Activity 3 - Queue

// Task 5
class Queue {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the queue
    enqueue(item) {
        this.items.push(item);
    }

    // Method to remove and return the first item from the queue
    dequeue() {
        if (this.items.length === 0) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();
    }

    // Method to return the first item without removing it
    front() {
        if (this.items.length === 0) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];
    }

    // Method to display all items in the queue
    displayAllItems() {
        if (this.items.length === 0) {
            console.log("Queue is empty.");
            return;
        }
        console.log(this.items);
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.displayAllItems(); // Output: [1, 2, 3]

console.log(queue.front()); // Output: 1

console.log(queue.dequeue()); // Output: 1
queue.displayAllItems(); // Output: [2, 3]

console.log(queue.dequeue()); // Output: 2
queue.displayAllItems(); // Output: [3]

console.log(queue.dequeue()); // Output: 3
queue.displayAllItems(); // Output: Queue is empty.

// Task 6
function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue();

    // Add print jobs to the queue
    for (let job of jobs) {
        printerQueue.enqueue(job);
    }

    // Process each job in the queue
    console.log("Processing print jobs:");
    while (!printerQueue.isEmpty()) {
        const job = printerQueue.dequeue();
        console.log(`Printing job: ${job}`);
    }
}

// Example usage:
const printJobs = [
    "Print document 1",
    "Print document 2",
    "Print document 3",
    "Print document 4"
];

simulatePrinterQueue(printJobs);

// Activity 4 - Binary Tree

// Task 7
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Task 8
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertRecursively(this.root, newNode);
        }
    }

    // Helper method for inserting a node recursively
    _insertRecursively(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertRecursively(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertRecursively(node.right, newNode);
            }
        }
    }

    // Method to perform in-order traversal and display nodes
    inOrderTraversal() {
        const result = [];
        this._inOrderTraversalRecursively(this.root, result);
        console.log(result.join(' -> '));
    }

    // Helper method for in-order traversal recursively
    _inOrderTraversalRecursively(node, result) {
        if (node !== null) {
            this._inOrderTraversalRecursively(node.left, result);
            result.push(node.value);
            this._inOrderTraversalRecursively(node.right, result);
        }
    }

}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(21);
tree.insert(36);
tree.insert(32);
tree.insert(20);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(28);

console.log("In-order Traversal:");
tree.inOrderTraversal(); // Output: 2, 5, 7, 10, 12, 15, 20, 21, 28, 32, 36

// Activity 5 - Graph

// Task 9 & 10
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Method to add an edge to the graph
    addEdge(from, to) {
        if (!this.adjacencyList[from]) {
            this.adjacencyList[from] = [];
        }
        this.adjacencyList[from].push(to);

        // If it's an undirected graph, add the edge in the other direction too
        if (!this.adjacencyList[to]) {
            this.adjacencyList[to] = [];
        }
        this.adjacencyList[to].push(from);
    }

    // Method to add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Breadth-First Search (BFS) method
    bfs(start) {
        const visited = new Set();
        const queue = [];
        const result = [];

        queue.push(start);
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift(); // Remove the first vertex from the queue
            result.push(vertex);

            // Add all unvisited neighbors to the queue
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // Method to find the shortest path between two nodes using BFS
    shortestPath(start, end) {
        if (start === end) return [start];

        const visited = new Set();
        const queue = [[start]];
        const paths = {};

        visited.add(start);
        paths[start] = [start];

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (vertex === end) {
                return path;
            }

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                    paths[neighbor] = newPath;
                }
            }
        }

        return []; // Return an empty array if no path is found
    }
}

// Task 9 Example Usage

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log("BFS starting from vertex 'A':", graph.bfs('A'));
// Output: BFS starting from vertex 'A': [ 'A', 'B', 'C', 'D', 'E' ]

// Task 10 Example Usage

// Example usage:
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log("Shortest path from 'A' to 'E':", graph.shortestPath('A', 'E'));
// Output: Shortest path from 'A' to 'E': [ 'A', 'C', 'E' ]