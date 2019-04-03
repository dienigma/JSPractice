function isPalindrome(string) {
    string = string.toLowerCase()
    var charactersArr = string.split('')
    var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    var lettersArr = []
    charactersArr.forEach(char => {
        if(validChars.indexOf(char) > -1) lettersArr.push(char)
    })

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true
    else return false
}

console.log(isPalindrome("Madam I'm Adam"))
console.log(isPalindrome("Some one"))
console.log(isPalindrome("Racecar"))
console.log(isPalindrome("Mom"))