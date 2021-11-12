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

console.log(reverse('First Reverse'));
console.log(coolReverse('Cool Reverse'));
console.log(arrowReverse('Arrow Reverse'));




// CREATE A FUNCTION THAT MERGES TWO SORTED ARRAYS 

function mergeSortedArrays(arr1,arr2){

    if(!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'WTF!';
    }

    const mergedArray = arr1.concat(arr2);
    
    mergedArray.sort(function(a, b) {
        return a - b;
    });

    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));






