class Heap {
 #heap = [];

 #leftChildIndex = (parentIndex) => 2 * parentIndex + 1;

 #rightChildIndex = (parentIndex) => 2 * parentIndex + 2;

 #parentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

 #swap = (index1, index2) => {
  const temp = this.#heap[index1];
  this.#heap[index1] = this.#heap[index2];
  this.#heap[index2] = temp;
 };

 getHeap = () => [...this.#heap];

 insert = (value) => {
  this.#heap.push(value);
  let temp = this.#heap.length - 1;
  while (true) {
   const parentIndex = this.#parentIndex(temp);
   if (parentIndex < 0 || this.#heap[temp] <= this.#heap[parentIndex]) {
    break;
   }
   this.#swap(temp, parentIndex);
   temp = parentIndex;
  }
 };

 #sinkDown = (index) => {
  let temp = index;
  const leftChildIndex = this.#leftChildIndex(temp);
  const rightChildIndex = this.#rightChildIndex(temp);
  if (this.#heap[leftChildIndex] > this.#heap[temp] || this.#heap[rightChildIndex] > this.#heap[temp]) {
   if (this.#heap[leftChildIndex] > this.#heap[rightChildIndex]) {
    this.#swap(temp, leftChildIndex);
    this.#sinkDown(leftChildIndex);
   } else {
    this.#swap(temp, rightChildIndex);
    this.#sinkDown(rightChildIndex);
   }
  }
 };

 remove = () => {
  if (this.#heap.length === 0) {
   return null;
  }
  if (this.#heap.length === 1) {
   return this.#heap.pop();
  }
  const max = this.#heap[0];
  this.#heap[0] = this.#heap.pop();
  this.#sinkDown(0);
  return max;
 };
}