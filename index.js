class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this._size) this._head = newNode;
    else this._tail.nextNode = newNode;
    this._tail = newNode;

    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this._size) this._tail = newNode;
    else newNode.nextNode = this._head;
    this._head = newNode;

    this._size++;
  }

  head() { return this._head }
  tail() { return this._tail }
  size() { return this._size }
}