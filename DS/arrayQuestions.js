// CREATE A FUNCTION THAT REVERSES A STRING

function reverse(str){

    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'WTF!';
    }
   
    let reversed = [];
    let iterationsCount = str.length - 1;

    for(let i = iterationsCount; i >= 0; i--){
        reversed.push(str[i]);
    }

    return reversed.join('');

}

function coolReverse(str){
    // js magic
    return str.split('').reverse().join('');
}

const arrowReverse = (str) => str.split('').reverse().join('');

// console.log(reverse('First Reverse'));
// console.log(coolReverse('Cool Reverse'));
// console.log(arrowReverse('Arrow Reverse'));




// CREATE A FUNCTION THAT MERGES TWO SORTED ARRAYS 

function mergeSortedArrays(arr1,arr2){

    if(!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'WTF!';
    }

    if(arr1.length === 0){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1;
    }

    const mergedArray = arr1.concat(arr2);
    
    // below is from MDN documentation -> recommendation for sorting numeric arrays
    mergedArray.sort(function(a, b) {
        return a - b;
    });

    return mergedArray;
}

//console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));

// -----------------------------------------------------------------------------------

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function getTargetSum(arr,target){

    if(!Array.isArray(arr) || typeof target !== 'number'){
        return 'Invalid input'
    }
    
    for ( let i = 0 ; i < arr.length ; i++) {
        const difference = (element) => element == (target - arr[i]);
        const foundIndex = arr.findIndex( difference );
        if(foundIndex > 0) {
            console.log(i, foundIndex);
            return;
        }
    }
}

// getTargetSum([1,2,4,7], 5);

// -------------------------------------

// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.


function findMaxSum(arr){
    let maxSum = 0;
    let currentSum = 0;
    let isIncreasing = true;

    for(let i = 0; i < arr.length; i++){

        
        if(currentSum + arr[i] < currentSum){
            isIncreasing = false;
            currentSum = 0;
            continue;
        }

        currentSum += arr[i];
        isIncreasing = true;

        if(currentSum > maxSum){
            maxSum = currentSum;
        }

    }
}




