function ceaserCipher(str, number){
    number = number % 26
    var lowerCaseString = str.toLowerCase()
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newString = ''
    for (var i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i]
        if (currentLetter === ' ' ){
            newString += currentLetter
            continue
        } 

        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + number
        if (newIndex > 25){
            newIndex = newIndex - alphabet.length
        }
        if (newIndex < 0){
            newIndex = newIndex + alphabet.length
        }
        if (str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase()
        }
        else newString += alphabet[newIndex]
    }

    return newString
}

console.log(ceaserCipher('This is it', 2))