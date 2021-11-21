// linked list
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    console.log(newNode);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    // this.tail = this.head;
    let second = first.next;
    let count = 0;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;

      count++;
    }

    this.head.next = null;

    this.head = first;

    return this.printList();
  }
}
const mylist = new LinkedList(5);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const newNode = new Node();
console.log("new node", newNode);

// stack
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {}
  push(value) {}
  pop() {}
  //isEmpty
}

const myStack = new Stack();

// queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
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
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

// implement queue using stacks
// queue first in first out
// stack last in first out, redo
// store queue like stack
// push and pop also follow stack rule but looks like enqueue dequeue
// assume 2 secenarios
// one: store like a stack and delete based on stack rules
// eg, 1,2,3,4,5, to store it in stack, has to be 5,4,3,2,1 so that 1 can be pop directly, meet queue and stack rules

// lets store it like stack first
// using 2 stack container to hold it

// need to set an class first

class QueueOne {
  constructor() {
    // use 2 stacks
    this.stackOne = [];
    this.stackTwo = [];
  }
  enqueue(x) {
    // x is the inserting element

    // first senario, no ele
    let stackOne = this.stackOne;
    let stackTwo = this.stackTwo;
    if (stackOne.length === 0) {
      stackOne.push(x);
      return x;
    }

    // already has stored ele in order in stack one,[4,3,2,1] in stack structure last in first out, queue, first in first out
    // in queue has to be stored like [x,4,3,2,1],so that can be used as pop later

    while (stackOne.length) {
      stackTwo.push(stackOne.pop());
      //stackTwo become[1,2,3,4]
    }
    stackTwo.push(x);
    //stackTwo become[1,2,3,4,x]

    // need to store the structure back to meet the pop rules of queue,first in, first out

    while (stackTwo.length) {
      stackOne.push(stackTwo.pop());
    }
    //stackOne[x,4,3,2,1]
  }

  dequeue() {
    let stackOne = this.stackOne;
    stackOne.pop();
  }
}
