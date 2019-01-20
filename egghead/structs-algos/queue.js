function createQueue() {
  const queue = [];
  return {
    // Add an item to the queue
    enqueue(data) {
      return queue.unshift(data);
    },
    // Remove an item from the queue
    dequeue() {
      return queue.pop();
    },
    // Preview the next item in the queue
    peek() {
      return queue[queue.length - 1];
    },
    // Get the length of the queue
    getLength() {
      return queue.length;
    },
    // Check if the queue is empty
    isEmpty() {
      return this.getLength() === 0;
    }
  }
}

module.exports = {
  createQueue
}