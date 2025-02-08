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
}