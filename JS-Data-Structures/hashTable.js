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



var myHt = new HashTable(30)

console.log(myHt)