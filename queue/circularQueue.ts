interface IStorag<T> {
  [key: string]: T;
}
/**
 *@class CircularQueue
 *@classdesc implement the circular queue with 5 members and 2 methods.
 *@private @member tail -> number.
 *@private @member head -> number.
 *@private @member storag -> collection of data with head and tail.
 *@private  @member size -> the size of queue.
 *@private @member capacity -> the capacity of the queue.
 *   */
class CircularQueue<T> {
  private tail = 0;
  private storag: IStorag<T> = {};
  private head = 0;
  private size = 0;
  private capacity: number;
  /**
   *@constructor
   *@param capacity -> number
   *
   */
  constructor(capacity: number) {
    this.capacity = capacity;
  }
  /**
   *@member isFull -> check if the capacity is fulled.
   *@returns boolean.
   */
  get isFull() {
    return this.capacity === this.size;
  }
  /**
   *@method enqueue -> add data to the end of the queue.
   *@param data -> T.
   *@returns void.
   *
   */
  enqueue(val: T) {
    if (this.isFull) {
      throw new Error("the queue is full, can't add more");
    }
    this.storag[this.tail] = val;
    this.size++;
    this.tail = (this.tail + 1) % this.capacity;
  }
  /**
   *@method dequeue -> remove the first data of the queue.
   *@returns null | T | number.
   *
   */
  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let removedHead = this.storag[this.head];
    if (this.head === this.tail) {
      this.head = this.tail = 0;
    }
    this.head++;
    this.size--;
    return removedHead;
  }
}
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue("hey");
circularQueue.enqueue(true);
circularQueue.enqueue([1, 2, 3]);
console.log(circularQueue);
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
console.log(circularQueue);
