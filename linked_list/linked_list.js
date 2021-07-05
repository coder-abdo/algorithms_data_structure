/**
 *@class Node
 *@classdesc a class for implementing node object
 *
 */
var Nodes = /** @class */ (function () {
    /**
     *@constructor
     * @param val -> any type of data
     *
     */
    function Nodes(val, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
    return Nodes;
}());
/**
 *@class Linked List
 *@classdesc a class for implementing linked list data structure
 *
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    /**
     *@method  append values to the linked list
     *@param value -> any type of data
     */
    LinkedList.prototype.append = function (val) {
        if (!this.tail) {
            this.head = this.tail = new Nodes(val);
        }
        else {
            var oldTail = this.tail;
            this.tail = new Nodes(val);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    };
    /**
     *@method  prepend values to the linked list
     * @param value -> any type of data
     */
    LinkedList.prototype.prepend = function (val) {
        if (!this.head) {
            this.head = this.tail = new Nodes(val);
        }
        else {
            var oldHead = this.head;
            this.head = new Nodes(val);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    };
    /**
     *@method  removeHead remove the head from the linked list
     * @returns the removed head or null
     */
    LinkedList.prototype.removeHead = function () {
        if (!this.head) {
            return null;
        }
        else {
            var oldHead = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return oldHead;
        }
    };
    /**
     *@method  removeTail remove the tail from the linked list
     * @returns the removed tail or null
     */
    LinkedList.prototype.deleteTail = function () {
        if (!this.tail) {
            return null;
        }
        else {
            var oldTail = this.tail;
            if (this.tail === this.head) {
                this.tail = this.head = null;
            }
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return oldTail;
        }
    };
    /**
     *@method  search search the value in the linked list
     *@param val -> any data type
     * @returns the node or null
     */
    LinkedList.prototype.search = function (val) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.val === val) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
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
