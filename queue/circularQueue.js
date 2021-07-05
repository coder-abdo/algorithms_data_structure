/**
 *@class CircularQueue
 *@classdesc implement the circular queue with 5 members and 2 methods.
 *@private @member tail -> number.
 *@private @member head -> number.
 *@private @member storag -> collection of data with head and tail.
 *@private  @member size -> the size of queue.
 *@private @member capacity -> the capacity of the queue.
 *   */
var CircularQueue = /** @class */ (function () {
    /**
     *@constructor
     *@param capacity -> number
     *
     */
    function CircularQueue(capacity) {
        this.tail = 0;
        this.storag = {};
        this.head = 0;
        this.size = 0;
        this.capacity = capacity;
    }
    Object.defineProperty(CircularQueue.prototype, "isFull", {
        /**
         *@member isFull -> check if the capacity is fulled.
         *@returns boolean.
         */
        get: function () {
            return this.capacity === this.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@method enqueue -> add data to the end of the queue.
     *@param data -> T.
     *@returns void.
     *
     */
    CircularQueue.prototype.enqueue = function (val) {
        if (this.isFull) {
            throw new Error("the queue is full, can't add more");
        }
        this.storag[this.tail] = val;
        this.size++;
        this.tail = (this.tail + 1) % this.capacity;
    };
    /**
     *@method dequeue -> remove the first data of the queue.
     *@returns null | T | number.
     *
     */
    CircularQueue.prototype.dequeue = function () {
        if (this.size === 0) {
            return null;
        }
        var removedHead = this.storag[this.head];
        if (this.head === this.tail) {
            this.head = this.tail = 0;
        }
        this.head = (this.head + 1) % this.capacity;
        this.size--;
        return removedHead;
    };
    return CircularQueue;
}());
var circularQueue = new CircularQueue(5);
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
