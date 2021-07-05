var Stack = /** @class */ (function () {
    /**
     *@constructor
     * */
    function Stack() {
        this.list = {};
        this._size = 0;
    }
    Object.defineProperty(Stack.prototype, "size", {
        /**
         * @property size
         * @returns number
         * */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@method @param number
     @returns number
     * */
    Stack.prototype.push = function (item) {
        this._size++;
        this.list[this._size] = item;
        return this.size;
    };
    /**
     *@method
     @returns item || null
     * */
    Stack.prototype.pop = function () {
        if (this.size) {
            var lastItem = this.list[this.size];
            delete this.list[this.size];
            this._size--;
            return lastItem;
        }
        return null;
    };
    /**
     *@method
     @returns item || null
     * */
    Stack.prototype.peak = function () {
        return this.list[this.size] || null;
    };
    /**
     *@method
     @returns void
     * */
    Stack.prototype.clear = function () {
        this.list = {};
    };
    /**
     *@method
     @returns void
     * */
    Stack.prototype.print = function () {
        console.log(this.list);
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
console.log(stack.size);
stack.push("hello");
console.log(stack.size);
stack.push({ first: "jon", last: "doe" });
console.log(stack.size);
stack.push(true);
console.log(stack.size);
stack.print();
stack.pop();
console.log(stack.size);
stack.print();
stack.pop();
console.log(stack.size);
stack.print();
console.log(stack.peak());
