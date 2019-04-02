function range(start,end) {
    let result = []
    for (let index = start; index <= end; index++) {
        result.push(index)
        
    }
    return result
}

function sum (array){
    let sum = 0
    array.forEach(element => {
        sum += parseInt(element)
    });
    return sum
}

console.log(sum(range(1,10)))