// const func = () => {
//   if (something) return something
//   else func(with some change)   
// }

// Factorial number

function factorial (num){
    if (num === 1) {
        // Base case
        return num
    } else {
        // Recursive Case
        return num * factorial(num - 1)
    }
}

console.log(factorial(34))