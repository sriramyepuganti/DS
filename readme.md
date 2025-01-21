# Big O Notation

Big O Notation shows how the time or space needed by an algorithm grows as the input size increases, especially in the worst-case scenario.

## Common Big O Notations

- **O(1)**: Constant time - The algorithm's speed does not change with the input size.
- **O(log n)**: Logarithmic time - The algorithm's speed grows slowly as the input size increases.
- **O(n)**: Linear time - The algorithm's speed grows directly with the input size.
- **O(n log n)**: Linearithmic time - The algorithm's speed grows faster than linear time but slower than quadratic time.
- **O(n^2)**: Quadratic time - The algorithm's speed grows with the square of the input size.
- **O(2^n)**: Exponential time - The algorithm's speed doubles with each additional input.
- **O(n!)**: Factorial time - The algorithm's speed grows very fast with the input size.

Understanding Big O Notation helps us know if an algorithm can handle large inputs well.

## Time Complexity

Time complexity describes the number of operations an algorithm takes to complete, commonly expressed using Big O Notation. It helps in understanding the efficiency of an algorithm and predicting its performance.

### Types of Time Complexity

1. **Best Case**: The minimum time required for an algorithm to complete.
2. **Average Case**: The average time required for an algorithm to complete, considering all possible inputs.
3. **Worst Case**: The maximum time required for an algorithm to complete.

### Examples

- **Linear Search**: 
 - Best Case: O(1) - The element is found at the first position.
 - Average Case: O(n) - The element is found somewhere in the middle.
 - Worst Case: O(n) - The element is found at the last position or not found at all.

- **Binary Search**:
 - Best Case: O(1) - The element is found at the middle position.
 - Average Case: O(log n) - The element is found after several comparisons.
 - Worst Case: O(log n) - The element is found after several comparisons or not found at all.

Understanding time complexity is crucial for writing efficient algorithms that can handle large datasets well.

## Space Complexity

Space complexity describes the amount of memory an algorithm needs to run to completion. It is also commonly expressed using Big O Notation. Space complexity helps in understanding the memory requirements of an algorithm and predicting its performance in terms of memory usage.

### Types of Space Complexity

1. **Auxiliary Space**: The extra space or temporary space used by an algorithm, not including the space taken by the inputs.
2. **Total Space**: The total space used by an algorithm, including the space taken by the inputs.

### Examples

- **Array Sorting**:
 - Auxiliary Space: O(1) - Sorting algorithms like Bubble Sort use a constant amount of extra space.
 - Total Space: O(n) - The space required to store the input array.

- **Recursive Algorithms**:
 - Auxiliary Space: O(n) - Recursive algorithms like Quick Sort use additional space for the call stack.
 - Total Space: O(n) - The space required to store the input and the call stack.

Understanding space complexity is essential for writing algorithms that can handle large datasets without running out of memory.

## Big Omega (Ω) Notation

Big Omega Notation (Ω) provides a lower bound on the time complexity of an algorithm. It represents the best-case scenario, where the algorithm performs the minimum number of operations.

- **Ω(1)**: Constant time - The algorithm always takes the same amount of time, regardless of input size.
- **Ω(log n)**: Logarithmic time - The algorithm's time grows slowly as the input size increases.
- **Ω(n)**: Linear time - The algorithm's time grows directly with the input size.

## Big Theta (Θ) Notation

Big Theta Notation (Θ) provides a tight bound on the time complexity of an algorithm. It represents both the upper and lower bounds, meaning the algorithm's time complexity is sandwiched between the best and worst-case scenarios.

- **Θ(1)**: Constant time - The algorithm always takes the same amount of time.
- **Θ(log n)**: Logarithmic time - The algorithm's time grows slowly as the input size increases.
- **Θ(n)**: Linear time - The algorithm's time grows directly with the input size.

## Big O (O) Notation

Big O Notation (O) provides an upper bound on the time complexity of an algorithm. It represents the worst-case scenario, where the algorithm performs the maximum number of operations.

- **O(1)**: Constant time - The algorithm's speed does not change with the input size.
- **O(log n)**: Logarithmic time - The algorithm's speed grows slowly as the input size increases.
- **O(n)**: Linear time - The algorithm's speed grows directly with the input size.

Understanding these notations helps in analyzing and comparing the efficiency of different algorithms in various scenarios.


## Drop Constants and Non-Dominant Terms

When analyzing the time complexity of an algorithm, we often drop constant factors and non-dominant terms to simplify the Big O notation. This is because Big O notation focuses on the growth rate of an algorithm as the input size increases, and constant factors and non-dominant terms become insignificant for large inputs.

### Example

Consider an algorithm with a time complexity of `O(2n + 3)`. As the input size `n` grows, the constant factors `2` and `3` become less significant. Therefore, we simplify the time complexity to `O(n)`.

Similarly, for an algorithm with a time complexity of `O(n^2 + n)`, the term `n` becomes insignificant compared to `n^2` as `n` grows larger. Thus, we simplify the time complexity to `O(n^2)`.

### Why Drop Constants and Non-Dominant Terms?

1. **Focus on Growth Rate**: Big O notation aims to describe how the algorithm's runtime grows with the input size, not the exact number of operations.
2. **Simplification**: Dropping constants and non-dominant terms makes it easier to compare the efficiency of different algorithms.
3. **Asymptotic Analysis**: For large inputs, constant factors and non-dominant terms have a negligible impact on the overall performance.

By dropping constants and non-dominant terms, we can better understand and compare the scalability of algorithms.

## Reference

For a quick reference on Big O Notation and common algorithm complexities, visit [Big O Cheat Sheet](https://www.bigocheatsheet.com/).

## Linked Lists

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation, making them more flexible for dynamic memory allocation.

### Types of Linked Lists

1. **Singly Linked List**: Each node points to the next node in the sequence.
2. **Doubly Linked List**: Each node points to both the next and the previous nodes.
3. **Circular Linked List**: The last node points back to the first node, forming a circle.

### Operations on Linked Lists

- **Insertion**: Adding a new node to the list.
 - Time Complexity: O(1) for insertion at the beginning, O(n) for insertion at the end or at a specific position.
- **Deletion**: Removing a node from the list.
 - Time Complexity: O(1) for deletion at the beginning, O(n) for deletion at the end or at a specific position.
- **Traversal**: Accessing each node in the list.
 - Time Complexity: O(n)
- **Search**: Finding a node with a specific value.
 - Time Complexity: O(n)

### Advantages of Linked Lists

- **Dynamic Size**: Linked lists can grow or shrink in size dynamically.
- **Efficient Insertions/Deletions**: Insertions and deletions are more efficient compared to arrays, especially at the beginning of the list.

### Disadvantages of Linked Lists

- **Memory Overhead**: Each node requires extra memory for storing the pointer to the next node.
- **Sequential Access**: Linked lists do not support random access, making them slower for accessing elements by index compared to arrays.

Understanding linked lists is fundamental for solving problems that require dynamic memory allocation and efficient insertions and deletions.


## Doubly Linked Lists

A doubly linked list is a type of linked list in which each node contains a reference to both the next node and the previous node. This allows for traversal in both directions, making certain operations more efficient.

### Structure of a Doubly Linked List Node

Each node in a doubly linked list contains three fields:
1. **Data**: The value stored in the node.
2. **Next**: A reference to the next node in the list.
3. **Previous**: A reference to the previous node in the list.

### Operations on Doubly Linked Lists

- **Insertion**: Adding a new node to the list.
 - Time Complexity: O(1) for insertion at the beginning or end, O(n) for insertion at a specific position.
- **Deletion**: Removing a node from the list.
 - Time Complexity: O(1) for deletion at the beginning or end, O(n) for deletion at a specific position.
- **Traversal**: Accessing each node in the list.
 - Time Complexity: O(n)
- **Search**: Finding a node with a specific value.
 - Time Complexity: O(n)

### Advantages of Doubly Linked Lists

- **Bidirectional Traversal**: Allows traversal in both forward and backward directions.
- **Efficient Deletions**: Deleting a node is more efficient since there is no need to traverse the list to find the previous node.

### Disadvantages of Doubly Linked Lists

- **Memory Overhead**: Each node requires extra memory for storing two pointers (next and previous).
- **Complexity**: More complex to implement compared to singly linked lists due to the need to manage two pointers.

Doubly linked lists are useful in scenarios where bidirectional traversal is required or when efficient deletions are needed.

## Stacks

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the same end, called the top of the stack.

### Operations on Stacks

- **Push**: Adding an element to the top of the stack.
 - Time Complexity: O(1)
- **Pop**: Removing the top element from the stack.
 - Time Complexity: O(1)
- **Peek**: Accessing the top element without removing it.
 - Time Complexity: O(1)
- **IsEmpty**: Checking if the stack is empty.
 - Time Complexity: O(1)

### Applications of Stacks

- **Function Call Management**: Used in managing function calls in recursion.
- **Expression Evaluation**: Used in evaluating expressions and syntax parsing.
- **Undo Mechanism**: Used in applications like text editors to implement undo functionality.

## Queues

A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front.

### Operations on Queues

- **Enqueue**: Adding an element to the rear of the queue.
 - Time Complexity: O(1)
- **Dequeue**: Removing the front element from the queue.
 - Time Complexity: O(1)
- **Front**: Accessing the front element without removing it.
 - Time Complexity: O(1)
- **IsEmpty**: Checking if the queue is empty.
 - Time Complexity: O(1)

### Applications of Queues

- **Task Scheduling**: Used in scheduling tasks in operating systems.
- **Breadth-First Search (BFS)**: Used in graph traversal algorithms.
- **Print Queue**: Used in managing print jobs in printers.

Understanding stacks and queues is essential for solving problems that require ordered data processing and efficient element management.