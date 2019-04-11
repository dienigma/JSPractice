function LinkedList(){
    this.head = null
    this.tail = null
}

function Node(value, next, previous){
    this.value = value
    this.next = next
    this.previous = previous
}

LinkedList.prototype.addToHead = function (value){
    var newNode = new Node(value, this.head, null)
    if(this.head) this.head.previous = newNode
    else this.tail = newNode
    this.head = newNode
}