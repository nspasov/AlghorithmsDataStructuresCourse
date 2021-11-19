// ------------ BUBBLE SORT ----------------

function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;

}

//console.log(bubbleSort([6,4,9,3,1,12]));

// ------------ SELECTION SORT ------------------------

function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

console.log(selectionSort([5,7,2,9,8,3]));

