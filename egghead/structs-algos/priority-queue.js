/**
 * Very similar to a non-priority queue with the difference of having the ability to add queue items with a higher ranked priority.
 * Implemented by having 2 internal queues, high priority and non-high priority.
 */
function createPriorityQueue() {
  let highPriority = [];
  let midPriority = [];

  return {
    enqueue(item, isHighPriority) {
      if (isHighPriority) {
        return highPriority.unshift(item);
      } else {
        return midPriority.unshift(item);
      }
    },
    dequeue() {
      if (highPriority.length > 0) {
        return highPriority.pop();
      } else if (midPriority.length > 0) {
        return midPriority.pop();
      } else {
        return null;
      }
    },
    peek() {
      if (highPriority.length > 0) {
        return highPriority[highPriority.length - 1];
      } else if (midPriority.length > 0) {
        return midPriority[midPriority.length - 1];
      } else {
        return null;
      }
    },
    getLength() {
      return highPriority.length + midPriority.length;
    },
    isEmpty() {
      return this.getLength() === 0;
    }
  }
  
}

module.exports = {
  createPriorityQueue
}