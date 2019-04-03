function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ')
    var magazineArr = magazineText.split(' ')

    // Hashtable
    var magazineObj = {}
    
    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0
        magazineObj[word]++
    });

    var noteIsPossible = true
    noteArr.forEach(word => {
        if(magazineObj[word]){
            magazineObj[word]--
            if (magazineObj[word] < 0){
                noteIsPossible = false
            }
        } else {
            noteIsPossible = false
        }
    })

    return noteIsPossible;
}

console.log(harmlessRansomNote('this is a secret note from your secret admirer','eiusmod admirer tempor incididunt secret ut labore et this dolore is a magna aliqua note from your secret '))
