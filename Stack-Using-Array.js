class Stack {
 constructor() {
   this.stack = [];
 }

 push(value) {
   this.stack.push(value);
 }

 pop() {
   if (this.isEmpty()) return null;
   return this.stack.pop();
 }

 peek() {
   if (this.isEmpty()) return null;
   return this.stack[this.stack.length - 1];
 }

 isEmpty() {
   return this.stack.length === 0;
 }
}

const ele = new Stack();
ele.push(1);
ele.push(2);
ele.push(3);

console.log(ele.stack); // [1, 2, 3]
console.log(ele.pop()); // 3
console.log(ele.peek()); // 2
console.log(ele.isEmpty()); // false