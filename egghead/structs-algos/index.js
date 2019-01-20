const {createQueue} = require('./queue');
// The above deconstructs createQueue from the exports object.
/* Alternatively, the below example is equivalent.
  const Queue = require('./queue');
  let q = Queue.createQueue();
*/

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