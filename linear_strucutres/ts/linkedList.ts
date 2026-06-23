// 1. Using a Generic Interface for complete flexibility
interface NodeIItype<T> {
  value: T;
  next: NodeII<T> | null;
}

// 2. Class fields must be declared at the top level
class NodeII<T> implements NodeIItype<T> {
  public value: T;
  public next: NodeII<T> | null = null; // Explicitly declared and initialized

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedListII<T> {
  // Explicitly declare class properties and their types
  private head: NodeII<T> | null;
  private length: number;

  constructor() {
    this.head = null;  // Removed double parentheses and comma operator
    this.length = 0;
  }

  public append(value: T): void {
    const newNode = new NodeII(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      // Type safety ensures 'next' exists during the traversal loop
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
}
