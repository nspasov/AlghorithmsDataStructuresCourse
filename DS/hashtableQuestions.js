// FIRST RECURRING CHARACTER 
// Given an array [2,5,1,2,4,5,6,7] -> return 2
// Given an array [2,1,1,2,6] -> reuturn 1
// Given an array [2,3,4,5,] -> return undefined

function findDuplicate(arr){
    let set = new Set();
    setLength = 0;

    for(let i = 0; i < arr.length; i++){
        set.add(arr[i]);
        let currentSetSize = set.size;
        if(setLength == currentSetSize){
            return arr[i]
        }
        setLength = currentSetSize;
    }
}



console.log(findDuplicate([2,3,4,1,2,5]));
