'use strict';

const Node = require('/node')

module.exports = class {

constructor() {
  this.front = null
}

enqueue(val) {

  let node = new Node(val)
  let backNode

  if(!this.front) {
    this.front = node
    return this.front
  }

  _findBack(this.next)
  backNode.next = node
  return node

  function _findBack(node) {
    if(!node) return
    backNode = node
    _findBack(node.next)

  }

}

dequeue() {

}
}
