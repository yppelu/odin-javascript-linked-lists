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
}