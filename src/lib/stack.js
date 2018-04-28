'use strict';

const LinkedList = require('./linked-list');
const Node = require('./node');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  // space: O(1)  time: O(1)
  push(value) {
    const node = new Node(value);
    if (this._storage.head) {
      node.next = this._storage.head;
    }
    this._storage.head = node;
    return this;
  }

  // space: O(1)  time: O(1)
  pop() {
    if (this._storage.head) {
      const node = this._storage.head;
      this._storage.head = this._storage.head.next;
      node.next = null;
      return node;
    }
    return null;
  }

  // space: O(1)  time: O(1)
  peek() {
    if (this._storage.head) {
      return this._storage.head.value;
    }
    return null;
  }

  // space: O(1)  time: O(1)
  isEmpty() {
    if (this._storage.head) {
      return false;
    }
    return true;
  }
};
