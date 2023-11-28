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
}