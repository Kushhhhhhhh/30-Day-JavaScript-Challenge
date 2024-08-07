// Activity 1 - Median of Two Sorted Arrays

// Task 1
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;
        const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minRightX = (partitionX === x) ? Infinity : nums1[partitionX];
        const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minRightY = (partitionY === y) ? Infinity : nums2[partitionY];
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    throw new Error('Input arrays are not sorted');
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

// Activity 2 - Merge k Sorted Lists

// Task 2
function mergeKLists(lists) {
    const queue = lists.map(list => ({ value: list[0], index: 0, list: list })).filter(item => item.value !== undefined);
    queue.sort((a, b) => a.value - b.value);
    const result = [];
    while (queue.length > 0) {
        const { value, index, list } = queue.shift();
        result.push(value);
        if (index + 1 < list.length) {
            const newIndex = index + 1;
            const newValue = list[newIndex];
            const newItem = { value: newValue, index: newIndex, list: list };
            let i = 0;
            while (i < queue.length && queue[i].value < newValue) {
                i++;
            }
            queue.splice(i, 0, newItem);
        }
    }
    return result;
}

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]));
console.log(mergeKLists([]));

// Activity 3 - Trapping Rain Water

// Task 3
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));

// Activity 4 - N-Queens

// Task 4
function solveNQueens(n) {
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    const result = [];
    backtrack(board, 0, result);
    return result.map(row => row.map((col, i) => col === 'Q' ? i : -1));
}

function backtrack(board, row, result) {
    if (row === board.length) {
        result.push(board.map((row) => row.join('')).join('\n'));
        return;
    }
    for (let col = 0; col < board.length; col++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            backtrack(board, row + 1, result);
            board[row][col] = '.';
        }
    }
}

function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
            return false;
        }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }
    return true;
}

console.log(solveNQueens(4));
console.log(solveNQueens(1));
console.log(solveNQueens(3));

// Activity 5 - Word Ladder

// Task 5
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    const queue = [beginWord];
    let level = 1;
    while (queue.length) {
        for (let i = queue.length - 1; i >= 0; i--) {
            const word = queue.shift();
            for (let j = 0; j < word.length; j++) {
                for (let c = 'a'; c <= 'z'; c++) {
                    const newWord = word.slice(0, j) + c + word.slice(j + 1);
                    if (newWord === endWord) {
                        return level + 1;
                    }
                    if (wordSet.has(newWord)) {
                        queue.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        level++;
    }
    return 0;
}

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));