// A function that counts 'B's in a string.

function countB (inputString) {
    let count = 0
    let x = inputString.split('')
    for (let i = 0; i < x.length; i++){
        if (x[i] === "B"){
            count++
        }
    }
    return count
}

console.log(countB("WhatsUpBoy"))


// A generic function that counts the number of whatever character is in the second argument.

function countChar(input,char){
    let count = 0
    let x = input.split('')
    for (let i = 0 ; i < x.length; i++){
        if(x[i] === char){
            count++
        }
    }
    return count
}

console.log(countChar("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","e"))

