const assert = require('assert');
const { createStack } = require('../stack');

describe('Test stack', () => {
  let stack = createStack();

  it('push', () => {
    assert.equal(stack.push('bottom cookie'), 1);
    assert.equal(stack.push('ice cream'), 2);
    assert.equal(stack.push('top cookie'), 3);
  });
  it('pop', () => {
    assert.equal(stack.pop(), 'top cookie');
  });
  it('peek', () => {
    assert.equal(stack.peek(), 'ice cream');
  });
  it('length', () => {
    assert.equal(stack.length, 2);
    stack.pop();
    assert.equal(stack.length, 1);
    stack.pop();
  });
  it('isEmpty', () => {
    assert.equal(stack.isEmpty(), true);
  });
});
