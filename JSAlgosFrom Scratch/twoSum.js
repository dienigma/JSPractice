function twoSum (numArray, sum){
    // Returns an array that has a pair of numbers which add up to the number
    // Result should be an array of arrays.
    // An element can be used in multiple times.

    var pairs = []
    var hashtable = []
    for (var i = 0; i < numArray.length; i++){
        var currNum = numArray[i]
        var counterpart = sum - currNum
        if(hashtable.indexOf(counterpart) !== -1) {
            pairs.push([currNum,counterpart])
        }
        hashtable.push(currNum)
    }

    return pairs
}
testArray = [1,6,4,5,3,3]
console.log(twoSum(testArray,7))