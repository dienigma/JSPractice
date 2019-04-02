function reverseArray(array) {
    let reverse = []
   for (let i = array.length - 1; i >= 0; i--){
       reverse.push(array[i])
   }
   return reverse
}
let a = [2,3,4,6,71,6]
console.log(reverseArray(a))