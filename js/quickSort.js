
import {randomList} from "./randomList.js";

class SariSort{
    constructor(array) {
        this.array = array;
    }
    partitions(left_pointer,right_pointer){

        let pivot_index = right_pointer;

        let pivot = this.array[pivot_index];

        right_pointer -= 1;

        while (true){

            while (this.array[left_pointer] < pivot){
                left_pointer += 1;
            }

            while (this.array[right_pointer] > pivot){
                right_pointer -= 1;
            }

            if (left_pointer > right_pointer){

                break;
                
            }else{

                let temp = this.array[left_pointer];
                this.array[left_pointer] = this.array[right_pointer];
                this.array[right_pointer] = temp;

                left_pointer += 1;
            }

        }
        let temp = this.array[left_pointer];
        this.array[left_pointer] = this.array[pivot_index];
        this.array[pivot_index] = temp;

        return left_pointer;
    }
    quickSort(left_index,right_index){

        if (right_index - left_index <= 0){
            return;
        }
        let pivot_index = this.partitions(left_index,right_index);

        this.quickSort(left_index,pivot_index - 1);

        this.quickSort(pivot_index + 1, right_index);
    }
}


function timeSariSort(long) {

    let z = long;
    let sorted_z = new SariSort(z);

    const startTime = performance.now()

    sorted_z.quickSort(0,z.length -1);


    const endTime = performance.now()

    let num = endTime - startTime;

    return Number(num.toFixed(1));
}


export {SariSort}

