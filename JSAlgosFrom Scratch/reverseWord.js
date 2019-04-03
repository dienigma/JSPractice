function reverseWord(string) {
    var wordsArr = string.split(' ')
    var reverseArr = []
    wordsArr.forEach(word => {
        var revWord = ''
        for (var i = word.length - 1; i >= 0; i--){
            revWord += word[i]
        }
        reverseArr.push(revWord)
    });
    return reverseArr.join(' ')
}

console.log(reverseWord("codiing JavaScript"))