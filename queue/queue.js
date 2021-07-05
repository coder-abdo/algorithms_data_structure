var Queue = /** @class */ (function () {
    /**
     *@constructor
     * */
    function Queue() {
        this.head = 0;
        this.tail = 0;
        this.storage = {};
    }
    Object.defineProperty(Queue.prototype, "list", {
        /**
         *@access
         *@readonly
         *@returns list -> TStorag
         *  */
        get: function () {
            return this.storage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@method
     *@param elm -> any
     *@returns void
     * */
    Queue.prototype.enqueue = function (elm) {
        this.storage[this.tail] = elm;
        this.tail++;
    };
    /**
     *@method
     *@returns elm -> any
     * */
    Queue.prototype.dequeue = function () {
        var removedItem = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removedItem;
    };
    return Queue;
}());
var queue = new Queue();
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
