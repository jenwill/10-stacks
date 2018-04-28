'use strict';

const Stack = require('../lib/stack');

describe('stack.js', () => {
  test('#constructor', () => {
    const stack = new Stack();
    expect(stack._storage.head).toBeNull();
  });
  test('#push', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.push(8);
    expect(stack._storage.head.value).toEqual(8);
    expect(stack._storage.head.next.value).toEqual(7);
    expect(stack._storage.head.next.next.value).toEqual(6);
    expect(stack._storage.head.next.next.next.value).toEqual(5);
  });
  test('#pop', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.push(8);
    expect(stack.pop().value).toEqual(8);
    expect(stack.pop().value).toEqual(7);
    expect(stack.pop().value).toEqual(6);
    expect(stack.pop().value).toEqual(5);
    expect(stack.pop()).toBeNull();
  });
  test('#peek', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    expect(stack.peek()).toEqual(6);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBeNull();
  });
  test('#isEmpty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push(5);
    expect(stack.isEmpty()).toEqual(false);
  });
});
