function BST(value){
    this.value = value
    this.leftChild = null
    this.rightChild = null
}

BST.prototype.insert = function (value){
    if (value <= this.value){
        if(!this.leftChild) this.leftChild = new BST(value)
        else this.leftChild.insert(value)
    } else if (value > this.value) {
        if(!this.rightChild) this.rightChild = new BST(value)
        else this.rightChild.insert(value)
    }
} 

// Contains method

BST.prototype.contains = function (value){
    if (value === this.value) return true
    else if (value < this.value) {
        // Do something
        if(!this.leftChild) return false
        else return this.leftChild.contains(value)
    } else if (value > this.value) {
        if(!this.rightChild) return false
        else return this.rightChild.contains(value)
    }
}

// Depth first traversal

BST.prototype.depthFirstTraversal = function (iteratorFunc,order){
    if(order === 'pre-order') iteratorFunc(this.value)
    if(this.leftChild) this.leftChild.depthFirstTraversal(iteratorFunc,order)
    if(order === 'in-order') iteratorFunc(this.value)
    if (this.rightChild) this.rightChild.depthFirstTraversal(iteratorFunc,order)
    if(order === 'post-order') iteratorFunc(this.value)

}

BST.prototype.breadthFirstTraversal = function (iteratorFunc){
    var queue = [this]
    while(queue.length){
        var treeNode = queue.shift()
        iteratorFunc(treeNode)
        if(treeNode.leftChild) queue.push(treeNode.leftChild)
        if(treeNode.rightChild) queue.push(treeNode.rightChild)
    }
}

var bst = new BST(50)

bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)


bst.breadthFirstTraversal(log)

function log(node){
    console.log(node.value)
}
// console.log(bst)