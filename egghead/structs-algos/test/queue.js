const assert = require('assert');
const {createQueue} = require('../queue');

let q = createQueue();
describe('Queue', function() {
  it('enqueue', function() {
    assert.equal(q.enqueue('First'), 1);
    assert.equal(q.enqueue('Second'), 2);
  });
});