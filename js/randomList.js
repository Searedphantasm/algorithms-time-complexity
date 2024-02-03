import {mergeSort} from "./mergSort.js";

function randomList(long){
    let sorted = [];
    for(let i = 0; i < long; i ++){
        let x =  Math.floor((Math.random() * long) + 1);
        //برای الگوریتم باینریی سرچ سر تکراری به مشکل خوردیم برا همین این اصلاحو دادم تا المنت تکراری ندااشته باشیم تو آرایمون
        // if (sorted.includes(x,0)){
        //     i--
        if(sorted.indexOf(x) === -1) sorted.push(x);
        else i--

    }
    return sorted;
}


function timeRandomList(long) {
    const startTime = performance.now();

    randomList(long);

    const endTime = performance.now();

    let num = endTime - startTime;

    return Number(num.toFixed(1));
}
//
// console.log(timeRandomList(1000));


export {randomList,timeRandomList}