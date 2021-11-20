const numbers = [3,23,59,96,-4,43]

function selection_sort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        // console.log(min)
        for (let j = i; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j;
            }
        }
        [array[i],array[min]] = [array[min],array[i]]
    }
    return array;
}

const sorted = selection_sort(numbers)

console.log(sorted)