
class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
 }
}

class DoubleLinkedList {
 constructor(value) {
  const newNode = new Node(value);
  this.head = newNode;
  this.tail = newNode;
  this.length = 1;
 }

 push(value) {
  const newNode = new Node(value);
  if (!this.head) {
   this.head = newNode;
   this.tail = newNode;
  } else {
   this.tail.next = newNode;
   newNode.prev = this.tail;
   this.tail = newNode;
  }
  this.length++;
  return this;
 }

 pop() {
  let temp = this.tail;
  if (!this.head) return null;
  else if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.tail = temp.prev;
   this.tail.next = null;
   temp.prev = null;
  }
  this.length--;
  return temp;
 }

 unshift(value) {
  const newNode = new Node(value);
  if (!this.head) {
   this.head = newNode;
   this.tail = newNode;
  } else {
   newNode.next = this.head;
   this.head.prev = newNode;
   this.head = newNode;
  }
  this.length++;
  return this;
 }

 shift() {
  if (!this.head) return null;
  let temp = this.head;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.head = this.head.next;
   this.head.prev = null;
   temp.next = null;
  }
  this.length--;
  return temp;
 }

 get(index) {
  if (index < 0 || index >= this.length) return null;
  let temp = this.head;
  if (index < this.length/2) {
   for(let i = 0; i < index; i++) {
    temp = temp.next;
   }
  } else {
   temp = this.tail;
   for(let i = this.length-1; i > index; i--) {
    temp = temp.prev;
   }
  }
  return temp;
 }

 set(index, value) {
  const element = this.get(index);
  if (element) {
   element.value = value;
   return true;
  }
  return false;
 }

 insert(index, value) {
  if (index === 0) return this.unshift(value);
  if (index === this.length) return this.push(value);
  if (index < 0 || index > this.length) return false;
  const newNode = new Node(value);
  let before = this.get(index-1);
  let after = before.next;
  before.next = newNode;
  newNode.prev = before;
  newNode.next = after;
  after.prev = newNode;
  this.length++;
  return true;
 }

 remove(index) {
  if (index === 0) return this.shift();
  if (index === this.length-1) return this.pop();
  if (index < 0 || index >= this.length) return null;

  const temp = this.get(index);
  temp.prev.next = temp.next;
  temp.next.prev = temp.prev;
  temp.next = null;
  temp.prev = null;
  this.length--;
  return temp;

 }
}

let el = new DoubleLinkedList(11);
el.push(12);
el.push(13);
el.push(14);
el.remove(0);

console.log(el);