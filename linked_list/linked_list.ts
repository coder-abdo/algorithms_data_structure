/**
 *@class Node
 *@classdesc a class for implementing node object
 *
 */
class Nodes<T> {
  val: T;
  next: Nodes<T> | null;
  prev: Nodes<T> | null;
  /**
   *@constructor
   * @param val -> any type of data
   *
   */
  constructor(
    val: T,
    next: Nodes<T> | null = null,
    prev: Nodes<T> | null = null
  ) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
/**
 *@class Linked List
 *@classdesc a class for implementing linked list data structure
 *
 */
class LinkedList<T> {
  /**
   *@private head -> Node
   * @private tail -> Node
   */
  private head: Nodes<T> | null;
  private tail: Nodes<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   *@method  append values to the linked list
   *@param value -> any type of data
   */
  append(val: T) {
    if (!this.tail) {
      this.head = this.tail = new Nodes(val);
    } else {
      let oldTail = this.tail;
      this.tail = new Nodes(val);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  /**
   *@method  prepend values to the linked list
   * @param value -> any type of data
   */
  prepend(val: T) {
    if (!this.head) {
      this.head = this.tail = new Nodes(val);
    } else {
      let oldHead = this.head;
      this.head = new Nodes(val);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  /**
   *@method  removeHead remove the head from the linked list
   * @returns the removed head or null
   */
  removeHead() {
    if (!this.head) {
      return null;
    } else {
      let oldHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head!.prev = null;
      }
      return oldHead;
    }
  }
  /**
   *@method  removeTail remove the tail from the linked list
   * @returns the removed tail or null
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let oldTail = this.tail;
      if (this.tail === this.head) {
        this.tail = this.head = null;
      } else {
        this.tail = this.tail.prev;
        this.tail!.next = null;
      }
      return oldTail;
    }
  }
  /**
   *@method  search search the value in the linked list
   *@param val -> any data type
   * @returns the node or null
   */
  search(val: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(0);
console.log(linkedList);
linkedList.removeHead();
console.log(linkedList);
linkedList.deleteTail();
console.log(linkedList);
console.log(linkedList.search(3));
console.log(linkedList.search(-1));
