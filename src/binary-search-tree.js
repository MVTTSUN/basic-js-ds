const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = newNode(this.rootNode, data);

    function newNode(el, data) {
      if(!el) {
        return new Node(data);
      } else if(el.data === data) {
        return el;
      } else {
        if(data < el.data) {
          el.left = newNode(el.left, data)
        } else {
          el.right = newNode(el.right, data)
        }
  
        return el;
      }
    }
  }

  has(data) {
    return hasData(this.rootNode, data);

    function hasData(el, data) {
      if(!el) {
        return false
      } else if(el.data === data) {
        return true;
      } else if(data < el.data) {
        return hasData(el.left, data);
      } else {
        return hasData(el.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootNode, data);

    function findData(el, data){
      if(!el) {
        return null;
      } else if(el.data === data) {
        return el;
      } else if(data < el.data) {
        return findData(el.left, data);
      } else {
        return findData(el.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(el, data) {
      if(!el) {
        return null;
      } else if(data < el.data) {
        el.left = removeNode(el.left, data);
        return el;
      } else if(el.data < data) {
        el.right = removeNode(el.right, data);
        return el;
      } else if(!el.left && !el.right) {
        return null
      } else if(!el.left) {
        el = el.right;
        return el;
      } else if(!el.right) {
        el = el.left;
        return el;
      } else {
        let min = el.right;
        while(min.left) {
          min = min.left
        }
        el.data = min.data;
        el.right = removeNode(el.right, min.data)
        return el;
      }
    }
  }

  min() {
    if(!this.rootNode) {
      return;
    } else {
      let min = this.rootNode;
      while(min.left) {
        min = min.left;
      }
      return min.data;
    }
  }

  max() {
    if(!this.rootNode) {
      return;
    } else {
      let max = this.rootNode;
      while(max.right) {
        max = max.right;
      }
      return max.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};