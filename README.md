# JavaScript & TypeScript: Data Structures & Algorithms (DSA) Mastery Guide

> **Production-Grade Reference Documentation** — Master the language-agnostic principles of computer science through JavaScript and TypeScript. Decouple **syntax** from **semantics** to unlock algorithmic thinking that transcends any single language.

---

## 📑 Quick Navigation

- [Core Architectural Vocabulary](#core-architectural-vocabulary)
- [Language-Agnostic Roadmap](#language-agnostic-roadmap)
- [Complete Syllabus](#complete-syllabus)
- [Implementation Reference](#implementation-reference)
- [Execution & Mastery Protocol](#execution--mastery-protocol)
- [Big O Complexity Cheatsheet](#big-o-complexity-cheatsheet)

---

## 🎯 Core Architectural Vocabulary

Master these **semantic units** to communicate and think like an elite engineer. These terms are language-agnostic and form the foundation of all DSA discourse:

| Term | Definition | Context |
|------|-----------|---------|
| **Node** | A fundamental unit of data structure containing data payload and references to adjacent nodes | Building block of Linked Lists, Trees, Graphs |
| **Pointer / Reference** | A variable holding the **memory address** of another object rather than a scalar value | Core to non-contiguous memory structures |
| **Contiguous Memory** | Sequential, unbroken memory slots arranged linearly in RAM | Arrays; $O(1)$ index lookup, expensive resizing |
| **Non-Contiguous Memory** | Scattered memory slots linked via pointers/references | Linked Lists; dynamic sizing, $O(1)$ insertions at boundaries |
| **Traversal** | Systematic movement of a pointer from node to node to inspect or mutate structure | Array iteration, List walking, Tree/Graph DFS/BFS |
| **Time Complexity** ($O$-notation) | Theoretical measure of algorithm execution time relative to input size $N$ | Determines scalability and performance at scale |
| **Space Complexity** ($O$-notation) | Theoretical measure of additional memory allocated by algorithm relative to input size $N$ | Determines memory footprint and system constraints |

---

## 🗺️ Language-Agnostic Roadmap

The progression below represents the **cognitive architecture** required to master DSA. Each phase builds upon the previous:

```
┌─────────────────────────────────────────────────────────────────────┐
│                      DSA MASTERY PROGRESSION                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Phase 1              Phase 2              Phase 3          Phase 4    │
│  FOUNDATIONS          LINEAR DSA           NON-LINEAR       PATTERNS   │
│                                                                         │
│  • Memory Mgmt        • Linked Lists       • Trees (BST)    • 2 Ptr    │
│  • Big O Notation     • Stacks & Queues    • Graphs         • Sliding  │
│  • Reference Model    • Hash Tables        • Heaps            Window   │
│  • Value vs Ref       • Array Searching    • Graph Traversal• Recursion │
│                       • Array Sorting      • Trie Structures• Backtrack │
│                                                                         │
└─────────────────────────────────────────────────────────────────────┘
```

**Progression Principle:** Do not skip phases. Phase 1 mastery unlocks Phase 2 intuition. Phase 3 becomes trivial only after Phase 2 is internalized.

---

## 📚 Complete Syllabus

### Phase 1: Algorithmic Foundations & Memory Model

#### 1.1 Big O Complexity Analysis

Complexity hierarchy from fastest to slowest:

```
O(1) < O(log N) < O(N) < O(N log N) < O(N²) < O(N³) < O(2ⁿ) < O(N!)
 ↑       ↑          ↑        ↑          ↑        ↑       ↑       ↑
Const  Logarithm  Linear  Linearithm Quadratic Cubic  Exponential Factorial
```

**Practical Thresholds:**
- For $N = 10^6$: $O(N)$ completes in milliseconds; $O(N^2)$ takes hours
- For $N = 100$: $O(2^N)$ becomes infeasible

#### 1.2 The Reference Model (Value vs. Reference)

JavaScript/TypeScript handles memory assignment differently based on type:

```javascript
// PRIMITIVES: Passed by VALUE
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — unchanged, separate copy in memory

// OBJECTS/ARRAYS: Passed by REFERENCE
let obj1 = { name: 'Alice' };
let obj2 = obj1;
obj2.name = 'Bob';
console.log(obj1.name); // 'Bob' — both point to same memory address
```

**Mental Model:** Think of primitives as **actual values** and objects as **remote controls pointing to the same TV**.

---

### Phase 2: Linear Data Structures

#### 2.1 Singly Linked Lists

A **dynamic, non-contiguous** collection where each node contains a value and a reference to the next node.

**Memory Advantage:** No pre-allocation; grow/shrink organically.  
**Trade-off:** No $O(1)$ index access; requires sequential traversal.

**Core Operations:**

| Operation | Time Complexity | Space | Notes |
|-----------|-----------------|-------|-------|
| Access by index | $O(N)$ | $O(1)$ | Must traverse from head |
| Insert at head | $O(1)$ | $O(1)$ | Direct pointer update |
| Insert at tail | $O(N)$ | $O(1)$ | Requires traversal to end |
| Delete from head | $O(1)$ | $O(1)$ | Head pointer reassignment |
| Delete from middle | $O(N)$ | $O(1)$ | Find predecessor first |
| Search | $O(N)$ | $O(1)$ | Linear scan required |

#### 2.2 Stacks (LIFO)

A **Last-In, First-Out** constrained structure. Think of a stack of plates: you add and remove from the top.

**Real-World Applications:**
- Browser back button (navigation history)
- Undo/Redo functionality
- Expression evaluation (infix to postfix conversion)
- Depth-First Search (DFS) traversal

**Core Operations:**
- `push(value)` — Add to top, $O(1)$
- `pop()` — Remove from top, $O(1)$
- `peek()` — Inspect top without removing, $O(1)$
- `isEmpty()` — Check if empty, $O(1)$

#### 2.3 Queues (FIFO)

A **First-In, First-Out** constrained structure. Think of a checkout line: first person in is first person out.

**Real-World Applications:**
- Task scheduling and job queues
- Breadth-First Search (BFS) traversal
- Message passing systems
- Print queue management

**Core Operations:**
- `enqueue(value)` — Add to rear, $O(1)$
- `dequeue()` — Remove from front, $O(1)$
- `peek()` — Inspect front without removing, $O(1)$
- `isEmpty()` — Check if empty, $O(1)$

#### 2.4 Hash Tables (Maps/Objects)

Key-value storage using a **hash function** to map keys to memory addresses, enabling $O(1)$ average-case lookups.

**Under the Hood:**
1. Key is passed through hash function
2. Function returns an index/bucket address
3. Value is stored at that address
4. Collision resolution (chaining or open addressing) handles duplicates

**Performance Characteristics:**
- Best case: $O(1)$ lookup, insert, delete
- Worst case: $O(N)$ (all keys hash to same bucket)
- Average case: $O(1)$ with proper load factor management

**Real-World Use Cases:**
- Caching and memoization
- Counting frequencies
- Two-sum and other lookup problems
- Deduplication

---

### Phase 3: Non-Linear & Hierarchical Data Structures

#### 3.1 Trees & Binary Search Trees (BST)

A **hierarchical** structure where each node has a parent and zero or more children.

**Binary Search Tree Invariant:**
```
For every node:
  • All values in LEFT subtree < node value
  • All values in RIGHT subtree > node value
```

**Advantages:**
- $O(\log N)$ search, insert, delete (when balanced)
- In-order traversal yields sorted sequence
- Foundation for advanced structures (AVL, Red-Black, B-Trees)

**Disadvantages:**
- Unbalanced tree degenerates to $O(N)$ operations
- Requires rebalancing in production systems

**Tree Traversal Patterns:**

| Type | Order | Use Case |
|------|-------|----------|
| **In-Order** (Left → Node → Right) | Sorted sequence | BST validation, sorted iteration |
| **Pre-Order** (Node → Left → Right) | Parent before children | Tree cloning, expression trees |
| **Post-Order** (Left → Right → Node) | Children before parent | Tree deletion, postfix evaluation |
| **Level-Order** (BFS) | Layer by layer | Tree serialization, shortest path |

#### 3.2 Graphs

A **network** of nodes (vertices) connected by relationships (edges). Generalizes trees by allowing cycles and multiple parent relationships.

**Graph Representations:**

1. **Adjacency List** (Preferred for sparse graphs)
   ```javascript
   const graph = {
     A: ['B', 'C'],
     B: ['A', 'D'],
     C: ['A', 'D'],
     D: ['B', 'C']
   };
   ```

2. **Adjacency Matrix** (Preferred for dense graphs)
   ```javascript
   const graph = [
     [0, 1, 1, 0],  // A
     [1, 0, 0, 1],  // B
     [1, 0, 0, 1],  // C
     [0, 1, 1, 0]   // D
   ];
   ```

**Graph Traversal Algorithms:**

| Algorithm | Data Structure | Complexity | Use Case |
|-----------|----------------|-----------|----------|
| **DFS** (Depth-First Search) | Stack (Recursion) | $O(V + E)$ | Topological sort, cycle detection |
| **BFS** (Breadth-First Search) | Queue | $O(V + E)$ | Shortest path (unweighted), level order |
| **Dijkstra's** | Priority Queue | $O(E \log V)$ | Shortest path (weighted, non-negative) |

#### 3.3 Heaps

A **specialized binary tree** satisfying the **heap property**:

- **Max Heap:** Parent ≥ Children (root is maximum)
- **Min Heap:** Parent ≤ Children (root is minimum)

**Key Properties:**
- Complete binary tree (filled level-by-level, left to right)
- Often stored in an array for cache efficiency
- Root at index 0; children of node $i$ at indices $2i+1$ and $2i+2$

**Core Operations:**
- `heapify-up()` — Restore heap property after insertion, $O(\log N)$
- `heapify-down()` — Restore heap property after deletion, $O(\log N)$
- `peek()` — View root, $O(1)$
- `extract()` — Remove root, $O(\log N)$

**Applications:**
- Priority queues
- Heap sort algorithm ($O(N \log N)$ guaranteed)
- Finding K largest/smallest elements
- Median finding

---

### Phase 4: Algorithmic Coding Patterns

#### 4.1 Two Pointers

Deploy **two index trackers** moving at different speeds or directions to solve problems in $O(N)$ instead of nested loops ($O(N^2)$).

**Pattern Variants:**

1. **Opposite Directions** (inward)
   ```javascript
   // Sorted array problem: two sum
   let left = 0, right = array.length - 1;
   while (left < right) {
     const sum = array[left] + array[right];
     if (sum === target) return [left, right];
     sum < target ? left++ : right--;
   }
   ```

2. **Same Direction** (chasing)
   ```javascript
   // Linked list: detect cycle
   let slow = head, fast = head;
   while (fast && fast.next) {
     slow = slow.next;
     fast = fast.next.next;
     if (slow === fast) return true; // Cycle detected
   }
   ```

3. **Synchronous** (sliding window derivative)
   ```javascript
   // Container with most water
   let left = 0, right = array.length - 1;
   let maxArea = 0;
   while (left < right) {
     maxArea = Math.max(maxArea, (right - left) * Math.min(array[left], array[right]));
     array[left] < array[right] ? left++ : right--;
   }
   ```

#### 4.2 Sliding Window

Maintain a **contiguous subarray/subset** and dynamically expand/contract it to reduce complexity from $O(N^2)$ to $O(N)$.

**Pattern Structure:**
```javascript
let left = 0;
let windowState = {}; // Track content: char frequency, count, etc.

for (let right = 0; right < input.length; right++) {
  // Expand: add right element to window
  windowState[input[right]] = (windowState[input[right]] || 0) + 1;
  
  // Contract: shrink while condition fails
  while (/* condition */) {
    windowState[input[left]]--;
    if (windowState[input[left]] === 0) delete windowState[input[left]];
    left++;
  }
  
  // Process: current window is valid
  result = Math.max(result, right - left + 1);
}
```

**Common Problems:**
- Longest substring without repeating characters
- Minimum window substring
- Maximum average subarray
- Permutation in string

#### 4.3 Recursion & Backtracking

Functions that **invoke themselves** to break problems into sub-problems. **Backtracking** pairs recursion with **state restoration** to explore all possible combinations.

**Recursion Template:**
```javascript
function recursiveFunction(input) {
  // BASE CASE: When to stop recursing
  if (/* termination condition */) {
    return /* base result */;
  }
  
  // RECURSIVE CASE: Break problem into smaller sub-problem
  const subResult = recursiveFunction(/* smaller input */);
  
  // COMBINE: Merge sub-result into current result
  return /* combine(subResult) */;
}
```

**Backtracking Template:**
```javascript
function backtrack(currentPath, candidates, constraints) {
  // BASE CASE: Found a valid solution
  if (isCompleteSolution(currentPath, constraints)) {
    results.push([...currentPath]);
    return;
  }
  
  // RECURSIVE CASE: Explore all possibilities
  for (const candidate of candidates) {
    // Pruning: Skip invalid branches
    if (!isValid(currentPath, candidate, constraints)) continue;
    
    // CHOOSE: Add candidate to current path
    currentPath.push(candidate);
    
    // EXPLORE: Recurse with updated path
    backtrack(currentPath, /* remaining candidates */, constraints);
    
    // UNCHOOSE: Remove candidate (state restoration)
    currentPath.pop();
  }
}
```

**Classic Problems:**
- N-Queens placement
- Permutations and combinations
- Maze solving
- Word search in grid
- Sudoku solver

---

## 🔧 Implementation Reference

### Reference Implementation 1: The Node Blueprint

```javascript
/**
 * Represents a single operational unit in a data structure.
 * Serves as the building block for Linked Lists, Trees, and Graphs.
 * 
 * @template T
 */
class Node<T> {
  value: T;
  next: Node<T> | null;
  
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
```

---

### Reference Implementation 2: Singly Linked List

```typescript
/**
 * A dynamic, non-contiguous linear data structure.
 * Optimized for $O(1)$ insertions/deletions at boundaries.
 * 
 * Time Complexity Summary:
 *   - Access: O(N)
 *   - Prepend: O(1)
 *   - Append: O(N) [can be O(1) with tail pointer]
 *   - Insert at position: O(N)
 *   - Delete: O(N)
 * 
 * Space Complexity: O(N) for N elements
 * 
 * @template T
 */
class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  /**
   * Prepends a new node to the start of the list.
   * Constant time: only modifies head pointer.
   * 
   * @time O(1)
   * @space O(1)
   */
  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /**
   * Appends a new node to the end of the list.
   * Linear time: requires traversal to locate tail.
   * 
   * @time O(N)
   * @space O(1)
   */
  append(value: T): void {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.length++;
  }

  /**
   * Inserts a new node at a specific index.
   * Prerequisite: index must be valid (0 ≤ index ≤ length).
   * 
   * @time O(N)
   * @space O(1)
   */
  insertAt(value: T, index: number): boolean {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    const newNode = new Node(value);
    let current = this.head!;
    let previous: Node<T>;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next!;
      count++;
    }

    newNode.next = current;
    previous!.next = newNode;
    this.length++;
    return true;
  }

  /**
   * Retrieves the value at a specific index.
   * Returns null if index is out of bounds.
   * 
   * @time O(N)
   * @space O(1)
   */
  getAt(index: number): T | null {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current!.next;
      count++;
    }

    return current!.value;
  }

  /**
   * Removes a node at a specific index.
   * Returns the removed value or null if index is invalid.
   * 
   * @time O(N)
   * @space O(1)
   */
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.length) return null;

    let current = this.head!;

    if (index === 0) {
      this.head = current.next;
    } else {
      let previous: Node<T>;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next!;
        count++;
      }

      previous!.next = current.next;
    }

    this.length--;
    return current.value;
  }

  /**
   * Complete traversal: Serializes all list values into an array.
   * Useful for testing and visualization.
   * 
   * @time O(N)
   * @space O(N)
   */
  toArray(): T[] {
    const values: T[] = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  /**
   * Returns the number of elements in the list.
   * 
   * @time O(1)
   * @space O(1)
   */
  getLength(): number {
    return this.length;
  }

  /**
   * Checks if the list is empty.
   * 
   * @time O(1)
   * @space O(1)
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Clears all nodes from the list.
   * 
   * @time O(1)
   * @space O(1)
   */
  clear(): void {
    this.head = null;
    this.length = 0;
  }
}
```

---

### Reference Implementation 3: Stack (LIFO)

```typescript
/**
 * A Last-In, First-Out (LIFO) constrained data structure.
 * All operations (push, pop, peek) occur at the top in constant time.
 * 
 * Time Complexity:
 *   - Push: O(1)
 *   - Pop: O(1)
 *   - Peek: O(1)
 *   - isEmpty: O(1)
 * 
 * Space Complexity: O(N)
 * 
 * @template T
 */
class Stack<T> {
  private items: T[] = [];

  /**
   * Adds an element to the top of the stack.
   * 
   * @time O(1)
   */
  push(value: T): void {
    this.items.push(value);
  }

  /**
   * Removes and returns the top element.
   * Returns undefined if stack is empty.
   * 
   * @time O(1)
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Inspects the top element without removing it.
   * Returns undefined if stack is empty.
   * 
   * @time O(1)
   */
  peek(): T | undefined {
    if (this.items.length === 0) return undefined;
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * 
   * @time O(1)
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * 
   * @time O(1)
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clears all elements from the stack.
   * 
   * @time O(1)
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Returns all stack elements as an array (top at end).
   * 
   * @time O(N)
   * @space O(N)
   */
  toArray(): T[] {
    return [...this.items];
  }
}
```

---

### Reference Implementation 4: Queue (FIFO)

```typescript
/**
 * A First-In, First-Out (FIFO) constrained data structure.
 * Elements are added at the rear and removed from the front.
 * 
 * Time Complexity:
 *   - Enqueue: O(1)
 *   - Dequeue: O(1)
 *   - Peek: O(1)
 *   - isEmpty: O(1)
 * 
 * Space Complexity: O(N)
 * 
 * @template T
 */
class Queue<T> {
  private items: T[] = [];

  /**
   * Adds an element to the rear of the queue.
   * 
   * @time O(1)
   */
  enqueue(value: T): void {
    this.items.push(value);
  }

  /**
   * Removes and returns the front element.
   * Returns undefined if queue is empty.
   * 
   * @time O(N) — Array.shift() is O(N), not O(1)
   * For production, use a circular buffer or linked list
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Inspects the front element without removing it.
   * Returns undefined if queue is empty.
   * 
   * @time O(1)
   */
  peek(): T | undefined {
    if (this.items.length === 0) return undefined;
    return this.items[0];
  }

  /**
   * Checks if the queue is empty.
   * 
   * @time O(1)
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of elements in the queue.
   * 
   * @time O(1)
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clears all elements from the queue.
   * 
   * @time O(1)
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Returns all queue elements as an array (front at start).
   * 
   * @time O(N)
   * @space O(N)
   */
  toArray(): T[] {
    return [...this.items];
  }
}
```

---

### Reference Implementation 5: Hash Map / Object

```typescript
/**
 * A key-value mapping using JavaScript's object or Map.
 * Provides $O(1)$ average-case lookup, insertion, and deletion.
 * 
 * Time Complexity (Average):
 *   - Get: O(1)
 *   - Set: O(1)
 *   - Delete: O(1)
 *   - Has: O(1)
 * 
 * Space Complexity: O(N) for N key-value pairs
 * 
 * @template K, V
 */
class HashMap<K extends string | number, V> {
  private map: Map<K, V> = new Map();

  /**
   * Stores a key-value pair.
   * Overwrites if key already exists.
   * 
   * @time O(1)
   */
  set(key: K, value: V): void {
    this.map.set(key, value);
  }

  /**
   * Retrieves the value for a given key.
   * Returns undefined if key doesn't exist.
   * 
   * @time O(1)
   */
  get(key: K): V | undefined {
    return this.map.get(key);
  }

  /**
   * Checks if a key exists in the map.
   * 
   * @time O(1)
   */
  has(key: K): boolean {
    return this.map.has(key);
  }

  /**
   * Removes a key-value pair.
   * Returns true if deletion was successful.
   * 
   * @time O(1)
   */
  delete(key: K): boolean {
    return this.map.delete(key);
  }

  /**
   * Returns the number of key-value pairs.
   * 
   * @time O(1)
   */
  size(): number {
    return this.map.size;
  }

  /**
   * Checks if the map is empty.
   * 
   * @time O(1)
   */
  isEmpty(): boolean {
    return this.map.size === 0;
  }

  /**
   * Clears all key-value pairs.
   * 
   * @time O(1)
   */
  clear(): void {
    this.map.clear();
  }

  /**
   * Returns all keys in the map.
   * 
   * @time O(N)
   * @space O(N)
   */
  keys(): K[] {
    return Array.from(this.map.keys());
  }

  /**
   * Returns all values in the map.
   * 
   * @time O(N)
   * @space O(N)
   */
  values(): V[] {
    return Array.from(this.map.values());
  }

  /**
   * Returns all key-value pairs as tuples.
   * 
   * @time O(N)
   * @space O(N)
   */
  entries(): [K, V][] {
    return Array.from(this.map.entries());
  }
}
```

---

### Reference Implementation 6: Binary Search Tree

```typescript
/**
 * A self-balancing binary search tree node.
 * Maintains the BST invariant: left < parent < right
 * 
 * @template T
 */
class TreeNode<T extends number | string> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * A Binary Search Tree implementation.
 * Provides O(log N) average-case search, insertion, and deletion.
 * Degrades to O(N) if unbalanced (mitigation: use AVL or Red-Black tree).
 * 
 * Time Complexity (Average):
 *   - Search: O(log N)
 *   - Insert: O(log N)
 *   - Delete: O(log N)
 * 
 * Time Complexity (Worst — Unbalanced):
 *   - All operations: O(N)
 * 
 * Space Complexity: O(N) for N nodes
 * 
 * @template T
 */
class BinarySearchTree<T extends number | string> {
  private root: TreeNode<T> | null = null;

  /**
   * Inserts a value into the BST.
   * Maintains invariant: all left descendants < node < all right descendants
   * 
   * @time O(log N) average, O(N) worst
   */
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return; // Duplicates ignored
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  /**
   * Searches for a value in the BST.
   * Returns true if found, false otherwise.
   * 
   * @time O(log N) average, O(N) worst
   */
  search(value: T): boolean {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  /**
   * In-order traversal: Left → Node → Right
   * Produces values in sorted order.
   * 
   * @time O(N)
   * @space O(N)
   */
  inOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
    if (node === null) return [];
    return [
      ...this.inOrderTraversal(node.left),
      node.value,
      ...this.inOrderTraversal(node.right)
    ];
  }

  /**
   * Pre-order traversal: Node → Left → Right
   * Useful for cloning or expression tree evaluation.
   * 
   * @time O(N)
   * @space O(N)
   */
  preOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
    if (node === null) return [];
    return [
      node.value,
      ...this.preOrderTraversal(node.left),
      ...this.preOrderTraversal(node.right)
    ];
  }

  /**
   * Post-order traversal: Left → Right → Node
   * Useful for tree deletion or postfix evaluation.
   * 
   * @time O(N)
   * @space O(N)
   */
  postOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
    if (node === null) return [];
    return [
      ...this.postOrderTraversal(node.left),
      ...this.postOrderTraversal(node.right),
      node.value
    ];
  }

  /**
   * Level-order (breadth-first) traversal.
   * Returns array of arrays, each sub-array is a tree level.
   * 
   * @time O(N)
   * @space O(N)
   */
  levelOrderTraversal(): T[][] {
    if (this.root === null) return [];

    const result: T[][] = [];
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel: T[] = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;
        currentLevel.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      result.push(currentLevel);
    }

    return result;
  }

  /**
   * Finds the minimum value in the tree.
   * Minimum is always the leftmost node.
   * 
   * @time O(log N) average, O(N) worst
   */
  findMin(node: TreeNode<T> | null = this.root): T | null {
    if (node === null) return null;

    while (node.left !== null) {
      node = node.left;
    }

    return node.value;
  }

  /**
   * Finds the maximum value in the tree.
   * Maximum is always the rightmost node.
   * 
   * @time O(log N) average, O(N) worst
   */
  findMax(node: TreeNode<T> | null = this.root): T | null {
    if (node === null) return null;

    while (node.right !== null) {
      node = node.right;
    }

    return node.value;
  }

  /**
   * Checks if the tree is a valid BST.
   * Validates the invariant across all nodes.
   * 
   * @time O(N)
   */
  isValidBST(): boolean {
    const validate = (
      node: TreeNode<T> | null,
      min: T | null,
      max: T | null
    ): boolean => {
      if (node === null) return true;

      if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
        return false;
      }

      return (
        validate(node.left, min, node.value) &&
        validate(node.right, node.value, max)
      );
    };

    return validate(this.root, null, null);
  }

  /**
   * Returns the height of the tree.
   * Height is the longest path from root to leaf.
   * 
   * @time O(N)
   */
  height(node: TreeNode<T> | null = this.root): number {
    if (node === null) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  /**
   * Returns the number of nodes in the tree.
   * 
   * @time O(N)
   */
  size(node: TreeNode<T> | null = this.root): number {
    if (node === null) return 0;
    return 1 + this.size(node.left) + this.size(node.right);
  }
}
```

---

## 📊 Big O Complexity Cheatsheet

### Array Operations

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Access by index | $O(1)$ | $O(1)$ | Direct memory lookup |
| Search (unsorted) | $O(N)$ | $O(1)$ | Linear scan required |
| Search (sorted) | $O(\log N)$ | $O(1)$ | Binary search |
| Insert at start | $O(N)$ | $O(N)$ | Shift all elements |
| Insert at end | $O(1)$ | $O(1)$ | Array has capacity |
| Insert at position | $O(N)$ | $O(N)$ | Shift elements |
| Delete from start | $O(N)$ | $O(N)$ | Shift all elements |
| Delete from end | $O(1)$ | $O(1)$ | Constant operation |
| Delete from position | $O(N)$ | $O(N)$ | Shift elements |

### Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable? |
|-----------|------|---------|-------|-------|---------|
| Bubble Sort | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | ✓ |
| Selection Sort | $O(N^2)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | ✗ |
| Insertion Sort | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | ✓ |
| Merge Sort | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | ✓ |
| Quick Sort | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ | ✗ |
| Heap Sort | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(1)$ | ✗ |

### Data Structure Operations

| Structure | Access | Search | Insert | Delete | Space |
|-----------|--------|--------|--------|--------|-------|
| Array | $O(1)$ | $O(N)$ | $O(N)$ | $O(N)$ | $O(N)$ |
| Linked List | $O(N)$ | $O(N)$ | $O(N)$ | $O(N)$ | $O(N)$ |
| Stack | $O(N)$ | $O(N)$ | $O(1)$ | $O(1)$ | $O(N)$ |
| Queue | $O(N)$ | $O(N)$ | $O(1)$ | $O(1)$ | $O(N)$ |
| Hash Table | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ | $O(N)$ |
| BST (balanced) | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ | $O(N)$ |
| BST (unbalanced) | $O(N)$ | $O(N)$ | $O(N)$ | $O(N)$ | $O(N)$ |
| Heap | $O(N)$ | $O(N)$ | $O(\log N)$ | $O(\log N)$ | $O(N)$ |

---

## ✅ Execution & Mastery Protocol

### Step 1: Read & Trace
For **every single method** you implement:
1. Read the code line-by-line
2. **Physically trace** variable assignments on paper
3. Use the **"Remote Control" mental model**: primitives are values; objects are remote controls pointing to the same TV
4. Verify pointer/reference updates at each step

### Step 2: Verify Complexity
For **every method**, explicitly document and verify:
1. **Time Complexity** — How many operations as a function of $N$?
2. **Space Complexity** — How much additional memory is allocated?
3. **Best/Average/Worst cases** — When does each apply?

### Step 3: Portability Checks
After implementing a pattern cleanly in JavaScript/TypeScript:
1. Write out the **pseudo-code logic** (language-agnostic)
2. Verify you could refactor it into Python, Go, C++, Rust, etc. in 5 minutes
3. If you can't, the logic isn't truly abstracted

### Step 4: Practice Problems
- **LeetCode / HackerRank**: Solve 3–5 problems per data structure
- **Implement from scratch**: No copy-paste; code each structure blindfolded
- **Explain out loud**: Teach the logic to a rubber duck or peer

---

## 🎓 Progression Milestones

| Milestone | Criteria |
|-----------|----------|
| **Phase 1 Complete** | Can explain Big O in your sleep; understand pointers vs. values deeply |
| **Phase 2 Complete** | Can implement Linked List, Stack, Queue, HashMap from memory without errors |
| **Phase 3 Complete** | Can code a balanced BST, run DFS/BFS, implement Dijkstra's without external references |
| **Phase 4 Complete** | Can solve medium LeetCode problems using two-pointers, sliding window, backtracking |
| **Master** | Can solve hard DSA problems and explain trade-offs between approaches |

---

## 📖 Further Study Resources

- **Books**: "Cracking the Coding Interview" (Laakman), "Introduction to Algorithms" (CLRS)
- **Online Judges**: LeetCode, HackerRank, Codeforces
- **Interactive Tools**: VisuAlgo (visualization engine), Big O Cheatsheet
- **Communities**: r/learnprogramming, Dev.to DSA series

---

## 📝 License & Attribution

This documentation is provided as **free reference material** for educational purposes.  
Adapt, customize, and distribute freely with attribution.

---

**Last Updated:** June 2026  
**Status:** Production-Ready Reference  
**Audience:** Intermediate to Advanced JavaScript/TypeScript Developers
