import {SariSort} from "./js/quickSort.js";

import {randomList, timeRandomList} from "./js/randomList.js";
import {timeBinarySearch} from "./js/binarySearch.js";
import {timeMergSort} from "./js/mergSort.js";
import {timeBubbleSort} from "./js/bubbleSort.js";
// import {bubbleSort} from "./js/bubbleSort.js";




const pushValueBtn = document.getElementById('pushBtn');



//
//
//
// async function  binarySearchTime(randomAllList) {
//
//     const start1 = Date.now();
//
//     await binarySearch(-1,randomAllList);
//
//
//     const end1 = Date.now();
//
//
//
//     return end1 - start1;
// }
// async function mergSortSearchTime(randomAllList) {
//     const start2 = Date.now();
//
//     await mergeSort(randomAllList);
//
//
//     const end2 = Date.now();
//
//     return end2 - start2;
//
// }
// async function quickSortSearchTime(randomAllList) {
//
//     let x = randomAllList;
//     let sortedArray = new SariSort(x);
//     const start3 = Date.now();
//
//
//     await sortedArray.quickSort(0,x.length - 1);
//
//     const end3 = Date.now();
//
//     return end3 - start3;
// }

// function bubbleSortSearchTime(randomAllList) {
//     const start = Date.now();
//
//     bubbleSort(randomAllList);
//
//     const end = Date.now();
//
//     return end - start;
// }






function pushValueChart() {
    const pushValue = document.getElementById('pushValue');
    // const randomAllList = randomList(Number(pushValue.value));
    const pushLabel = document.getElementById('pushLabel');

    const rann = randomList(Number(pushValue.value))

    // binarySearch
    let x1 = timeBinarySearch(rann) * 15 ;
    myChart.data.datasets[0].data.push(x1);
    // mergSort
    let x2 = timeMergSort(rann) * 15 ;
    myChart.data.datasets[1].data.push(x2);
    // random
    let x3 = timeRandomList(Number(pushValue.value)) * 15;
    myChart.data.datasets[2].data.push(x3);
    // bubbleSort
    let x4 = timeBubbleSort(rann) *15;
    myChart.data.datasets[3].data.push(x4);


    myChart.data.labels.push(pushLabel.value);

    myChart.update();
}



pushValueBtn.onclick = () => pushValueChart();



const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0'],
        datasets: [{
            label: 'BinaryS',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgb(199,151,33)',

            ],
            borderWidth: 2,
            spanGaps: true
        },{
            label: 'MergSort',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 2,
            spanGaps: true
        },{
            label: 'RandList{O(n)}',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgb(144,210,90)',

            ],
            borderWidth: 2,
            spanGaps: true
        },{
            label: 'BubbleSort',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgb(41,82,161)',

            ],
            borderWidth: 2,
            spanGaps: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});