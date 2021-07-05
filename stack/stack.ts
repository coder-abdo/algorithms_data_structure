/***
 *@class
 */
type TList = {
  [key: string]: number;
};
class Stack {
  /***
   * @private list -> Map
   * @private max size -> number
   */

  private list: TList;
  private _size: number;
  /**
   *@constructor
   * */
  constructor() {
    this.list = {};
    this._size = 0;
  }
  /**
   * @property size
   * @returns number
   * */
  get size(): number {
    return this._size;
  }
  /**
   *@method @param number 
   @returns number
   * */
  push(item: any): number {
    this._size++;
    this.list[this._size] = item;
    return this.size;
  }
  /**
   *@method 
   @returns item || null
   * */
  pop(): any | null {
    if (this.size) {
      const lastItem = this.list[this.size];
      delete this.list[this.size];
      this._size--;
      return lastItem;
    }
    return null;
  }
  /**
   *@method
   @returns item || null 
   * */
  peak(): any | null {
    return this.list[this.size] || null;
  }
  /**
   *@method
   @returns void 
   * */
  clear() {
    this.list = {};
  }
  /**
   *@method
   @returns void 
   * */
  print() {
    console.log(this.list);
  }
}
const stack = new Stack();
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
