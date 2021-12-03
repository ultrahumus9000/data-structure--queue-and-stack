// build a node first
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// build linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //add at begining
  append(value) {
    let temp = this.head;
    this.head = {
      value,
      next: temp,
    };
    this.length++;
  }

  prepend(value) {
    if (!this.head) {
      this.head = {
        value,
        next: null,
      };
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = {
        value,
        next: null,
      };
      this.length++;
      console.log("this head", this.head);
      return this.head;
    }
  }

  lookup(value) {}

  insert(index, value) {}

  remove() {}

  reverse() {}

  print() {
    let current = this.head;
    if (!this.head) {
      console.log(null);
    }
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const newLinkList = new LinkedList();
newLinkList.append(100);
newLinkList.append(90);
newLinkList.append(80);
newLinkList.append(70);

newLinkList.print();
newLinkList.prepend(60);
newLinkList.print();
console.log(newLinkList);
// build stack

// build queue

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    console.log(item);
    this.queue.push(item);
  }
  dequeue() {
    this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

// build a graph

class Graph {
  constructor() {
    this.vertice = [];
    this.adjList = {};
  }

  addVertice(num) {
    this.vertice.push(num);
    this.adjList[num] = [];
  }
  addEdge(a, b) {
    this.adjList[a] = b;
    this.adjList[b] = a;
  }

  breathFirstSearch() {}

  depthFirstSearch() {}

  test() {
    let queue = new Queue();

    console.log("queue", queue);
    console.log("graph", graph);
    queue.enqueue(graph);
    while (!queue.isEmpty()) {
      let now = queue.dequeue();
      let edge = this.adjList[now];
      console.log("current node", now, "edge", edge);
    }
  }
}

let graph = new Graph();
