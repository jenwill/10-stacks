Lab 10: Stacks and Queues
======

**Author:** Jennifer Piper

This is an implementation of a stack data structure using a linked list for storage.

## Getting Started
In a node.js environment, from the root of this repo, enter these commands:

```
npm i
```

To run tests:
```
npm run test
```
## Methods

**push(value)**
Creates a new node containing the input value and adds it to the top of the stack.

**pop()**
Removes the node at the top of the stack and returns the entire node.
Returns `null` if stack is empty.

**peek()**
Returns the value of the node at the top of the stack. Does not change the the stack in any way.

**isEmpty()**
Returns `true` if stack contains no nodes, `false` if it contains one or more nodes.

## Examples using this data structure

Create a new instance of the Stack structure named `stack`:

```
    const stack = new Stack();  // stack._storage.head -> null
```

Add the value `5` to the stack:
```
stack.push(5);  // stack._storage.head -> 5 -> null
```

Add the value `6` to the stack:
```
stack.push(6);  // stack._storage.head -> 6 -> 5 -> null
```

Remove the top node:
```
stack.pop(); // returns Node { value: 6, next: null }
```

View the top value:
```
stack.peek(); // returns 5
```

Check to see if the stack is empty:
```
stack.isEmpty() // returns false
```

