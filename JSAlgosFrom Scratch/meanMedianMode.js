function getMean(array) {
    let sum = 0
    array.forEach(element => {
        sum += element    
    });
    return sum/array.length
}

function getMedian(array) {
    return array[parseInt(array.length/2)]
}

function getMode(array) {
    
}

function meanMedianMode(array){

}

let x = [1,2,3,4,6,79,03,12]

console.log(getMedian(x))