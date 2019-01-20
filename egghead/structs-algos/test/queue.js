const assert = require('assert');
const {createQueue} = require('../queue');

let q = createQueue();
describe('Queue', function() {
  describe('enqueue', function() {
    it('should return 1', function() {
      assert.equal(q.enqueue('First'), 1);
    });

    it('should return 2', function() {
      assert.equal(q.enqueue('Second'), 2);
    });

  });
});