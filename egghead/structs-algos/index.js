const {createQueue} = require('./queue');
// The above format deconstructs createQueue from the exports object.
/* Alternatively, the below example is equivalent.
  const Queue = require('./queue');
  let q = Queue.createQueue();
*/
const {createPriorityQueue} = require('./priority-queue');

console.log('Queue');
let q = createQueue();
console.log('True -> ', q.isEmpty());
console.log('1 -> ', q.enqueue('Me first'));
console.log('2 -> ', q.enqueue('Me second'));
console.log('3 -> ', q.enqueue('Me third'));
console.log('False -> ', q.isEmpty());
console.log('3 -> ', q.getLength());
console.log('Me first -> ', q.peek());
console.log('Me first -> ', q.dequeue());
console.log('2 -> ', q.getLength());
console.log('Me second -> ', q.peek());
console.log('Me second -> ', q.dequeue());
console.log('1 -> ', q.getLength());
console.log('Me third -> ', q.peek());
console.log('Me third -> ', q.dequeue());
console.log('0 -> ', q.getLength());
console.log('True -> ', q.isEmpty());

console.log('Priority Queue');
let pq = createPriorityQueue();
console.log('True -> ', pq.isEmpty());
console.log('1 -> ', pq.enqueue('Me first', true));
console.log('1 -> ', pq.enqueue('Me third', false));
console.log('2 -> ', pq.enqueue('Me second', true));
console.log('False -> ', pq.isEmpty());
console.log('3 -> ', pq.getLength());
console.log('Me first -> ', pq.peek());
console.log('Me first -> ', pq.dequeue());
console.log('2 -> ', pq.getLength());
console.log('Me second -> ', pq.peek());
console.log('Me second -> ', pq.dequeue());
console.log('1 -> ', pq.getLength());
console.log('Me third -> ', pq.peek());
console.log('Me third -> ', pq.dequeue());
console.log('0 -> ', pq.getLength());
console.log('True -> ', pq.isEmpty());
