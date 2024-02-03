import {randomList} from "./randomList.js";
import {mergeSort} from "./mergSort.js";
import {sleep} from "./sleep.js";



// const sleep = () => {
//     let x;
//     return x;
// }

function binarySearch(n,array){
    let list = array;
    // list.splice(list.indexOf(n),1);
    let lower_bound = 0;
    let upper_bound = list.length - 1;
    while (lower_bound <= upper_bound){
        // برا کند کردن فانکشن
        for (let i = 0; i < list.length; i += 1) { }

        let midpoint = parseInt((upper_bound + lower_bound) / 2);

        let value_at_midpoint = list[midpoint];

        if(n === value_at_midpoint){
            return midpoint;
        }else if (n < value_at_midpoint){
            upper_bound = midpoint - 1;

        }else if (n > value_at_midpoint){
            lower_bound = midpoint + 1;
        }
    }
}


function timeBinarySearch(long) {

    let sortedLong = mergeSort(long);

    const startTime = performance.now();

    binarySearch(-1,sortedLong);

    const endTime = performance.now();

    let num = endTime - startTime;

    return Number(num.toFixed(2));
}

// console.log(timeBinarySearch(100));


export {timeBinarySearch}