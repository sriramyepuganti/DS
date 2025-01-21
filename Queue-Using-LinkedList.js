class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Queue {
 constructor(value) {
  const newNode = new Node(value);
  this.first = newNode;
  this.last = newNode;
  this.length = 1;
 }

 enqueue(value) {
  const newNode = new Node(value);
  if (!this.first) {
   this.first = newNode;
   this.last = newNode;
  } else {
   this.last.next = newNode;
   this.last = newNode;
  }
  this.length++;
  return this;
 }

 dequeue() {
  if (!this.first) return undefined;
  const temp = this.first;
  if (this.length === 1) {
   this.first = null;
   this.last = null;
  } else {
   this.first = this.first.next;
   temp.next = null;
  } 
  this.length--;
  return temp;
 }

 peek() {
  if (this.isEmpty()) return null;
  return this.first;
}

 isEmpty() {
  return this.length === 0;
 }

 size() {
  return this.length;
 }
}

const myQueue = new Queue(0);

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
