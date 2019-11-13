class BinaryTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  //insertion
  insert(key, value, root = true) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinaryTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinaryTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin;
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  //preorder
//process, step left, step right


  preOrder() { 
    // console.log('Tree is running');
    console.log(this.key);
  
  
    if(this.left) { 
      this.left.preOrder(); 
    } 
    if(this.right) {
      this.right.preOrder(); 
      } 
    }

//in order 
//step left, proces, step right
inOrder() {
  if(this.left) {
    this.left.inOrder();
  }
  console.log(this.key)
  if(this.right) {
    this.right.inOrder();
  }
}
//post order
//step left, step right, process
postOrder() {
  if(this.left) {
    this.left.postOrder();
  }
  if(this.right) {
    this.right.postOrder();
  }
  console.log(this.value)
  }
}
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const node = new _Node(value);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

const list = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

function main() {
  const Tree = new BinaryTree();

    list.forEach(item => Tree.insert(item))
    console.log(Tree)
    Tree.preOrder();
    Tree.postOrder();
    Tree.inOrder();
};

main()

function BF(Tree, values=[]) {
  const chars = new Queue();
  const node = Tree;

  chars.enqueue(node)
    while(chars.first) {
      const node = chars.dequeue();
      values.push(node.value)
      if(node.left){
        chars.enqueue(node.left)
      }
      if(node.right){
        chars.enqueue(node.right)
      }
    }
    return values;
}

//PostOrder
function StarTrek() {
  const trek = new BinaryTree();
  trek.insert(5, 'Captain Picard');
  trek.insert(3, 'Commander Riker');
  trek.insert(6, 'Commander Data');
  trek.insert(2, 'Lt. Commander Worf');
  trek.insert(4, 'Lt.Commander LaForge');
  trek.insert(1, 'Lt. Sec. Officer');
  trek.insert(8, 'Lt. Commander Crusher');
  trek.insert(7, 'Lt. Selar');
  console.log(BF(trek, values=[]))
}
StarTrek();