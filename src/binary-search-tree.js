const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  root() {
    if (this.root == null)
    return null;
    return this.root;
  }

  add(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.recursionInsert(this.root, newNode);
    }
  }

  has(data) {}

  find(input) {}

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  recursionInsert(existed_node, new_node) {
    if (new_node.data <= existed_node.data) {
      if (!existed_node.left) {
        existed_node.left = new_node;
      } else {
        this.recursionInsert(existed_node.left, new_node);
      }
    } else {
      if (!existed_node.right) {
        existed_node.right = new_node;
      } else {
        this.recursionInsert(existed_node.right, new_node);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
