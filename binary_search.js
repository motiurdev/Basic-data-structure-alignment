const numbers = [2,5,7,8,10,17,20,30,50,55]

function binary_search(array,target){
    let start =0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(array[mid] == target){
            return mid;
        }
        if(target < array[mid]){
            end = min -1;
        }

        if(target > array[mid]){
            start = mid + 1;
        }
    }
    return -1;
}

const index = binary_search(numbers,10)

console.log(index)