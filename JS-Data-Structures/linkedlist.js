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

LinkedList.prototype.addToTail = function (value){
    var newNode = new Node(value,null,this.tail)
    if(this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
}

// var myLL = new LinkedList()

// myLL.addToTail(10)
// myLL.addToTail(20)
// myLL.addToTail(30)


// myLL.addToHead(100)

// console.log(myLL.tail.previous.previous.previous)

LinkedList.prototype.removeFromHead = function (){
    if(!this.head) return null
    var val = this.head.value
    this.head = this.head.next
    if(this.head) this.head.previous = null
    else this.tail = null
    return val
}


LinkedList.prototype.removeFromTail = function () {
    if(!this.tail) return null
    var val = this.tail.value
    this.tail = this.tail.previous
    if(this.tail) this.tail.next = null
    else this.head = null 
}


var ll = new LinkedList()
ll.addToHead(2)
ll.addToHead(34)
ll.addToHead(2000)
ll.addToTail(3000)

ll.removeFromHead()
console.log(ll.removeFromHead())