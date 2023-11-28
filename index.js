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

  at(index) {
    let i = 0;
    let cursor = this._head;
    while (i !== index && cursor !== null) {
      cursor = cursor.nextNode;
      i++;
    }
    return cursor;
  }

  pop() {
    if (this._size) {
      if (this._size === 1) {
        this._head = null;
        this._tail = null;
      } else {
        let cursor = this._head;
        while (cursor.nextNode !== this._tail) cursor = cursor.nextNode;
        cursor.nextNode = null;
        this._tail = cursor;
      }
      this._size--;
    }
  }

  contains(value) {
    let cursor = this._head;
    while (cursor !== null) {
      if (cursor.value === value) return true;
      cursor = cursor.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let cursor = this._head;
    while (cursor !== null) {
      if (cursor.value === value) return index;
      cursor = cursor.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let string = '';
    let cursor = this._head;
    while (cursor !== null) {
      string += `( ${cursor.value} ) -> `;
      cursor = cursor.nextNode;
    }
    string += 'null';
    return string;
  }
}