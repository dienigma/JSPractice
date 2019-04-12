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

BST.prototype.depthFirstTraversal = function (iteratorFunc){
    if(this.leftChild) this.leftChild.depthFirstTraversal(iteratorFunc)
    iteratorFunc(this.value)
    if (this.rightChild) this.rightChild.depthFirstTraversal(iteratorFunc)
    
}

var bst = new BST(50)
bst.insert(21)
bst.insert(12)
bst.insert(22)
bst.insert(55)
bst.insert(34)

console.log(bst.contains(100))

console.log(bst.contains(12))


// console.log(bst)