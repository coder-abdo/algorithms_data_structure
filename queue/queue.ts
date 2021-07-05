/**
 *@class Queue 
 @classdesc implement queue data structure
 * */
type TStorag = {
  [key: string]: any;
};
class Queue {
  /**
   * @private head -> number
   * @private tail -> number
   * @private storag -> TStorag
   */
  private head: number;
  private tail: number;
  private storage: TStorag;
  /**
   *@constructor
   * */
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }
  /**
   *@access
   *@readonly
   *@returns list -> TStorag
   *  */
  get list() {
    return this.storage;
  }
  /**
   *@method
   *@param elm -> any
   *@returns void
   * */

  enqueue(elm: any) {
    this.storage[this.tail] = elm;
    this.tail++;
  }
  /**
   *@method
   *@returns elm -> any
   * */
  dequeue() {
    let removedItem = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removedItem;
  }
}
const queue = new Queue();
queue.enqueue("john");
queue.enqueue(12);
queue.enqueue(true);
queue.enqueue([1, 2, 3]);
console.log(queue.list);
queue.dequeue();
console.log(queue.list);
queue.dequeue();
console.log(queue.list);
queue.dequeue();
console.log(queue.list);
