function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ')
    var magazineArr = magazineText.split(' ')

    // Hashtable
    var magazineObj = {}
    
    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0
        magazineObj[word]++
    });

    console.log(magazineObj)
}

