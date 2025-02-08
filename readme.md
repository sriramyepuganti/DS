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

## Trees

A tree is a hierarchical data structure consisting of nodes, with a single node designated as the root. Each node can have zero or more child nodes, and nodes with no children are called leaves. Trees are widely used in computer science for representing hierarchical data and enabling efficient searching and sorting operations.

### Types of Binary Trees

1. **Full Binary Tree**: A binary tree in which every node has either 0 or 2 children. No node has only one child.
2. **Perfect Binary Tree**: A binary tree in which all the internal nodes have exactly two children, and all the leaf nodes are at the same level.
3. **Complete Binary Tree**: A binary tree in which all levels are completely filled except possibly the last level, which is filled from left to right.

Understanding these types of binary trees helps in analyzing and implementing various tree-based algorithms efficiently.

### Types of Trees

1. **Binary Tree**: Each node has at most two children, referred to as the left child and the right child.
2. **Binary Search Tree (BST)**: A binary tree where the left child contains values less than the parent node, and the right child contains values greater than the parent node.
3. **Balanced Tree**: A tree where the height difference between the left and right subtrees of any node is minimal, ensuring efficient operations.
4. **AVL Tree**: A self-balancing binary search tree where the height difference between the left and right subtrees of any node is at most one.
5. **Red-Black Tree**: A self-balancing binary search tree with an additional property that ensures the tree remains balanced during insertions and deletions.
6. **B-Tree**: A self-balancing search tree commonly used in databases and file systems, where nodes can have multiple children.

### Operations on Trees

- **Insertion**: Adding a new node to the tree.
 - Time Complexity: O(log n) for balanced trees, O(n) for unbalanced trees.
- **Deletion**: Removing a node from the tree.
 - Time Complexity: O(log n) for balanced trees, O(n) for unbalanced trees.
- **Traversal**: Accessing each node in the tree.
 - Time Complexity: O(n)
 - Types of Traversal:
  - **In-order**: Left subtree, root, right subtree.
  - **Pre-order**: Root, left subtree, right subtree.
  - **Post-order**: Left subtree, right subtree, root.
  - **Level-order**: Nodes are visited level by level from top to bottom.
- **Search**: Finding a node with a specific value.
 - Time Complexity: O(log n) for balanced trees, O(n) for unbalanced trees.

### Applications of Trees

- **Hierarchical Data Representation**: Used in representing hierarchical data such as file systems and organizational structures.
- **Searching and Sorting**: Used in implementing efficient searching and sorting algorithms.
- **Expression Parsing**: Used in parsing and evaluating mathematical expressions.
- **Databases**: Used in indexing and managing hierarchical data in databases.

Understanding trees is fundamental for solving problems that require hierarchical data representation and efficient searching and sorting operations.

## Hash Tables

A hash table is a data structure that maps keys to values for efficient lookup. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

### Hash Function

A hash function takes an input (or key) and returns an integer, which is used as an index to store the associated value in the hash table. A good hash function distributes keys uniformly across the array to minimize collisions.

### Handling Collisions

Collisions occur when two keys hash to the same index. There are several methods to handle collisions:

1. **Chaining**: Each bucket contains a linked list of entries that hash to the same index.
2. **Open Addressing**: All elements are stored in the array itself, and a collision is resolved by probing (searching) for the next empty slot.
  - **Linear Probing**: Check the next slot sequentially.
  - **Quadratic Probing**: Check slots at increasing intervals.
  - **Double Hashing**: Use a second hash function to determine the interval between probes.

### Operations on Hash Tables

- **Insertion**: Add a key-value pair to the hash table.
  - Average Time Complexity: O(1)
- **Deletion**: Remove a key-value pair from the hash table.
  - Average Time Complexity: O(1)
- **Search**: Find the value associated with a given key.
  - Average Time Complexity: O(1)

### Applications of Hash Tables

- **Database Indexing**: Efficiently retrieve records from a database.
- **Caching**: Store and retrieve frequently accessed data quickly.
- **Symbol Tables**: Used in compilers to store information about variables and functions.
- **Sets**: Implementing a set data structure to check for membership efficiently.

Understanding hash tables is crucial for designing efficient algorithms that require fast data retrieval and storage.

## Graphs

A graph is a data structure consisting of a set of nodes (vertices) and a set of edges that connect pairs of nodes. Graphs are used to represent relationships between objects and are widely used in computer science for modeling networks, social connections, and various other structures.

### Types of Graphs

1. **Undirected Graph**: A graph where edges have no direction. The edge (u, v) is the same as (v, u).
2. **Directed Graph (Digraph)**: A graph where edges have a direction. The edge (u, v) is different from (v, u).
3. **Weighted Graph**: A graph where edges have weights or costs associated with them.
4. **Unweighted Graph**: A graph where edges do not have weights.
5. **Cyclic Graph**: A graph that contains at least one cycle.
6. **Acyclic Graph**: A graph that does not contain any cycles.
7. **Connected Graph**: A graph where there is a path between every pair of vertices.
8. **Disconnected Graph**: A graph where at least one pair of vertices does not have a path between them.

### Graph Representation

1. **Adjacency Matrix**: A 2D array where the element at row i and column j indicates the presence (and possibly the weight) of an edge between vertices i and j.
2. **Adjacency List**: An array of lists where the ith list contains all the vertices adjacent to the ith vertex.

### Operations on Graphs

- **Traversal**: Visiting all the vertices and edges in a graph.
 - **Depth-First Search (DFS)**: Explores as far as possible along each branch before backtracking.
 - **Breadth-First Search (BFS)**: Explores all neighbors at the present depth before moving on to nodes at the next depth level.
- **Shortest Path**: Finding the shortest path between two vertices.
 - **Dijkstra's Algorithm**: Finds the shortest path from a source vertex to all other vertices in a weighted graph.
 - **Bellman-Ford Algorithm**: Finds the shortest path from a source vertex to all other vertices, handling negative weights.
 - **Floyd-Warshall Algorithm**: Finds shortest paths between all pairs of vertices.
- **Minimum Spanning Tree (MST)**: Finding a subset of edges that connects all vertices with the minimum total edge weight.
 - **Kruskal's Algorithm**: Builds the MST by adding edges in increasing order of weight.
 - **Prim's Algorithm**: Builds the MST by starting from a vertex and adding the smallest edge that connects a vertex in the MST to a vertex outside the MST.
- **Cycle Detection**: Determining if a graph contains any cycles.
 - **Union-Find Algorithm**: Used for cycle detection in undirected graphs.
 - **DFS**: Used for cycle detection in directed graphs.

### Applications of Graphs

- **Social Networks**: Modeling relationships and interactions between users.
- **Navigation Systems**: Finding the shortest path between locations.
- **Network Routing**: Optimizing data transfer paths in computer networks.
- **Dependency Resolution**: Managing dependencies in software packages and build systems.
- **Recommendation Systems**: Suggesting products or content based on user interactions.

Understanding graphs is essential for solving problems that involve relationships and connections between entities, enabling efficient algorithms for traversal, pathfinding, and network analysis.

## Heaps

A heap is a specialized tree-based data structure that satisfies the heap property. Heaps are commonly used to implement priority queues and for efficient sorting algorithms like Heap Sort.

### Types of Heaps

1. **Max Heap**: In a max heap, the value of each node is greater than or equal to the values of its children. The largest value is at the root.
2. **Min Heap**: In a min heap, the value of each node is less than or equal to the values of its children. The smallest value is at the root.

### Properties of Heaps

- **Complete Binary Tree**: Heaps are complete binary trees, meaning all levels are fully filled except possibly the last level, which is filled from left to right.
- **Heap Property**: In a max heap, each parent node is greater than or equal to its children. In a min heap, each parent node is less than or equal to its children.

### Operations on Heaps

- **Insertion**: Adding a new element to the heap while maintaining the heap property.
  - Time Complexity: O(log n)
- **Deletion**: Removing the root element (maximum in max heap, minimum in min heap) and maintaining the heap property.
  - Time Complexity: O(log n)
- **Peek**: Accessing the root element without removing it.
  - Time Complexity: O(1)
- **Heapify**: Converting an arbitrary array into a heap.
  - Time Complexity: O(n)

### Applications of Heaps

- **Priority Queues**: Implementing priority queues where elements are processed based on their priority.
- **Heap Sort**: An efficient comparison-based sorting algorithm with a time complexity of O(n log n).
- **Graph Algorithms**: Used in algorithms like Dijkstra's and Prim's for finding the shortest path and minimum spanning tree, respectively.
- **Order Statistics**: Finding the k-th smallest (or largest) element in an array.

Understanding heaps is crucial for designing efficient algorithms that require dynamic ordering and quick access to the largest or smallest elements.
