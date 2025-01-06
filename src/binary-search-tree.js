const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  root() {
      if (this.rootNode === undefined)
          return null;
      return this.rootNode;
  }

  add(data) {
      const newNode = new Node(data);

      if (!this.rootNode) {
          this.rootNode = newNode;
          return;
      }

      let currentNode = this.rootNode;
      while (true) {
          if (data < currentNode.data) {
              if (!currentNode.left) {
                  currentNode.left = newNode;
                  return;
              }
              currentNode = currentNode.left;
          } else {
              if (!currentNode.right) {
                  currentNode.right = newNode;
                  return;
              }
              currentNode = currentNode.right;
          }
      }
  }

  has(data) {
      let currentNode = this.rootNode;
      while (currentNode) {
          if (data === currentNode.data) {
              return true;
          } else if (data < currentNode.data) {
              currentNode = currentNode.left;
          } else {
              currentNode = currentNode.right;
          }
      }
      return false;
  }

  find(data) {
      let currentNode = this.rootNode;
      while (currentNode) {
          if (data === currentNode.data) {
              return currentNode;
          } else if (data < currentNode.data) {
              currentNode = currentNode.left;
          } else {
              currentNode = currentNode.right;
          }
      }
      return null;
  }

  remove(data) {
      this.rootNode = this.removeNode(this.rootNode, data);
  }

  min() {
      if (!this.rootNode) {
          return null;
      }
      let currentNode = this.rootNode;
      while (currentNode.left) {
          currentNode = currentNode.left;
      }
      return currentNode.data;
  }

  max() {
      if (!this.rootNode)
          return null;
      let currentNode = this.rootNode;
      while (currentNode.right)
          currentNode = currentNode.right;
      return currentNode.data;
  }

    removeNode(node, data) {
        if (!node)
            return null;

        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right)
                return null;
            if (!node.left)
                return node.right;
            if (!node.right)
                return node.left;

            const minRightNode = this.findMinNode(node.right);
            node.data = minRightNode.data;
            node.right = this.removeNode(node.right, minRightNode.data);
            return node;
        }
    }

    findMinNode(node) {
        while (node.left)
            node = node.left;
        return node;
    }
}

module.exports = {
  BinarySearchTree,
};
