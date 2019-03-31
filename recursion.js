// Takes a positive whole number and returns true if it is even and false if it is odd.

function isEven(positiveNumber){
    if (positiveNumber == 0){
        return true
    } else if (positiveNumber == 1) {
        return false
    } else {
        return isEven(positiveNumber - 2)
    }
}
// The output in the following two cases will be accurate

console.log(isEven(50))
console.log(isEven(75))

// The call stacksize will be exceded because the stack will be two things, too big and never ending.
// console.log(isEven(-1))