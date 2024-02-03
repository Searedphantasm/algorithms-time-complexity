import {randomList} from "./randomList.js";

// function bubbleSort(lists) {
//
//     let list = lists
//     let sorted = false;
//     let unsorted_until = list.length - 1;
//     let temp = 0;
//     while (sorted === false){
//         for (let i = 0;i <= (unsorted_until); i++){
//             sorted = true;
//             if (list[i] > list[i + 1]){
//                 temp = list[i]
//                 list[i] = list[i + 1];
//                 list[i +1] = temp
//                 sorted = false;
//             }
//
//         }
//         unsorted_until -= 1;
//         if ( unsorted_until >= 1){
//             sorted = false;
//         }
//     }
//     return list;
// }



function bubbleSort(arr){

    let i, j;
    let len = arr.length;

    let isSwapped = false;

    for(i =0; i < len; i++){

        isSwapped = false;

        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }

        // IF no two elements were swapped by inner loop, then break

        if(!isSwapped){
            break;
        }
    }

    // Print the array
    return arr;
}




function timeBubbleSort(long) {

    let x = long;

    const startTime = performance.now()

    bubbleSort(x);

    const endTime = performance.now()

    let num = endTime - startTime;

    return Number(num.toFixed(1));
}


// console.log(timeBubbleSort(10000));


export {timeBubbleSort}