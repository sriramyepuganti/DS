class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Stack {

 constructor(value) {
  this.top = new Node(value);
  this.length = 1;
 }

 push(value) {
  const newNode = new Node(value);
  if (!this.top) {
   this.top = newNode;
  } else {
   newNode.next = this.top;
   this.top = newNode;
  }
  this.length++;
  return this;
 }

 pop() {
  if (!this.top) return undefined;
  const temp = this.top;
  this.top = this.top.next;
  temp.next = null;
  this.length--;
  return temp;
 }

 peek() {
  return this.top ?? null;
 }

 isEmpty() {
  return this.length === 0;
 }
}

const el = new Stack(10);
el.push(22);
el.pop();
el.pop();

console.log(el.isEmpty());

