class Graph {
 constructor() {
   this.adjacencyList = {};
 }

 addVertex(vertex) {
   if (!this.adjacencyList[vertex]) {
     this.adjacencyList[vertex] = [];
     return true;
   }
   return false;
 }

 removeVertex(vertex) {
   if (this.adjacencyList[vertex]) {
     while (this.adjacencyList[vertex].length) {
       const adjacentVertex = this.adjacencyList[vertex].pop();
       this.removeEdge(vertex, adjacentVertex);
     }
     delete this.adjacencyList[vertex];
     return true;
   }
   return false;
 }

 addEdge(vertex1, vertex2) {
   if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
     this.adjacencyList[vertex1].push(vertex2);
     this.adjacencyList[vertex2].push(vertex1);
     return true;
   }
   return false;
 }

 removeEdge(vertex1, vertex2) {
   if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
     return true;
   }
   return false;
 }

}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");

g.removeVertex("C");
console.log(g.adjacencyList);