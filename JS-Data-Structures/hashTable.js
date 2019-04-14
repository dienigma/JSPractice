// Constructor to create a table
function HashTable (size){
    this.buckets = Array (size)
    this.numBuckets = this.buckets.length
}

// Constructor for hashNode

function HashNode(key,value,next){
    this.key = key
    this.value = value
    this.next = next || null
}

// Char to a number value and the modulus operator
//  charCodeAt() method helps you do this

// console.log("hello World".charCodeAt(4))

// Hash method
// Takes a string and hash it into a number that corresponds to one of the buckets in our number.
HashTable.prototype.hash = function (key){
    var total = 0
    for (var i = 0; i < key.length; i++){
        total += key.charCodeAt(i)
    }

    var bucket = total % this.numBuckets
    return bucket
}

// Insert Method

HashTable.prototype.insert = function (key,value){
    var index = this.hash(key)
    if(!this.buckets[index]) this.buckets[index] = new HashNode(key,value)
    else if (this.buckets[index].key === key){
        this.buckets[index].value = value
    }
    else {
        var currentNode = this.buckets[index]
        while(currentNode.next){
            if(currentNode.next.key === key){
                currentNode.next.value = value
                return
            }
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key,value)
    }
}

var myHt = new HashTable(30)
myHt.insert("Chinmay","joshichinmay09@gmail.com")
myHt.insert("John","johndoe09@email.com")
myHt.insert("Dean","Dean@email.com")
myHt.insert("Dane","Dane@yahoo.com")
myHt.insert("John","JohnDoe@gmail.com")
console.log(myHt.buckets)