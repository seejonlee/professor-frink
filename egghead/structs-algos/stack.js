function createStack() {
  const stack = [];

  return {
    push(data) {
      return stack.push(data);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length -1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  };
}

module.exports = {
  createStack
}