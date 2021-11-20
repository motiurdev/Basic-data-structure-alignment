const numbers = [12,48,2,49,59,49,18,12,34,56]

function linear_search(array,target){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element == target){
            return i;
        }
    }
    return -1;
}

const index = linear_search(numbers,18)
console.log(index)