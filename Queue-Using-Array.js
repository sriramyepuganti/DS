class Queue {
 
 constructor() {
   this.queue = [];
 }

 enqueue(value) {
   this.queue.push(value);
   return this.queue;
 }

 dequeue() {
   if (this.isEmpty()) return null;
   return this.queue.shift();
 }

 peek() {
   if (this.isEmpty()) return null;
   return this.queue[0];
 }

 isEmpty() {
   return this.queue.length === 0;
 }

 size() {
   return this.queue.length;
 }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.queue);
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
