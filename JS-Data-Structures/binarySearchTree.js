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

var bst = new BST(50)

console.log(bst)