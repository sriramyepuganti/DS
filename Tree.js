class Node {
 constructor(value) {
 this.value = value;
 this.left = null;
 this.right = null;
 }
}

class BinarySearchTree {
 constructor() {
 this.root = null;
 }

 insert(value) {
 const newNode = new Node(value);
 if (this.root === null) {
  this.root = newNode;
  return this;
 }
 let temp = this.root;
 while (true) {
  if (value < temp.value) {
  if (temp.left === null) {
   temp.left = newNode;
   return this;
  }
  temp = temp.left;
  } else if (value > temp.value) {
  if (temp.right === null) {
   temp.right = newNode;
   return this;
  }
  temp = temp.right;
  } else {
  // value is equal to temp.value, do not insert
  return this;
  }
 }
 }

 contains(value) {
  if (this.root === null) return false;
  let temp = this.root;
  while (temp) {
    if (value < temp.value) {
      temp = temp.left;
    } else if (value > temp.value) {
      temp = temp.right;
    } else {
      return true;
    }
  }
  return false;
 }
}

const el = new BinarySearchTree();
el.insert(10);
el.insert(5);
el.insert(15);
el.insert(20);
el.insert(8);
el.insert(3);
console.log(el.contains(13)); // true
