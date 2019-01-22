const assert = require('assert');
const {createPriorityQueue} = require('../priority-queue');

describe('priority queue', function() {
  let q = createPriorityQueue()

  it('enqueue', function() {
    assert.equal(q.enqueue('First high', true), 1)
    assert.equal(q.enqueue('First mid', false), 1)
    assert.equal(q.enqueue('Second high', true), 2)
  })

  it('dequeue', function() {
    let item = q.dequeue()
    assert.equal('First high', item)
  })

  it('peek', function() {
    let item = q.peek()
    assert.equal('Second high', item)
  })

  it('getLength', function() {
    assert.equal(q.getLength(), 2)
    q.dequeue()
    assert.equal(q.getLength(), 1)
  })

  it('enqueue', function() {
    q.dequeue()
    assert.equal(q.isEmpty(), true)
  })
})
