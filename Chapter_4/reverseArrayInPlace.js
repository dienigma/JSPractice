function reverseArrayInPlace(array) {
    i = array.length - 1
    j = 0
    while (i > j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i--
        j++
    }
    return array
}
let a = [1,2,3,4]
console.log(reverseArrayInPlace(a))