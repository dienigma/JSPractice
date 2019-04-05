function getMean(array) {
    let sum = 0
    array.forEach(element => {
        sum += element    
    });
    return sum/array.length
}

function getMedian(array) {
    array.sort(function(a,b){ return a -b })
    let median

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)]
    } else {
        let midOne = array[Math.floor(array.length/2) - 1]
        let midTwo = array[Math.floor(array.length / 2)]
        median = (midOne + midTwo) / 2 
    }
    return median
}

function getMode(array) {
    // Using Hashtables
    let modeObject = {}
    array.forEach(num => {
        if(!modeObject[num]) modeObject[num] = 0
        modeObject[num]++
    });

    let maxFrequency = 0;
    let modes = []
    for ( let num in modeObject){
        if(modeObject[num] > maxFrequency){
            modes = [num]
            maxFrequency = modeObject[num]
        }
        else if (modeObject[num] === maxFrequency){
            modes.push(num)
        }

    }

    if (modes.length = Object.keys(modeObject).length) modes = []

    return modes
}

function meanMedianMode(array){
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array),

    }
}

let x = [1,2,3,4,6,79,03,12]

console.log(meanMedianMode(x))