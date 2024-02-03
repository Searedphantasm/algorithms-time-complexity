import {randomList} from "./randomList.js";

function merge(left,right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2;

    // Base case or terminating case
    if(array.length < 2){
        return array
    }

    const left = array.splice(0, half);

    return merge(mergeSort(left),mergeSort(array))
}
//****************************************************
function timeMergSort(long) {

    let z = randomList(long);

    const startTime = performance.now();

    mergeSort(z);

    const endTime = performance.now();

    let num = endTime - startTime;

    return Number(num.toFixed(1));
}


// console.log(timeMergSort(1000));

export {timeMergSort,mergeSort,merge};

