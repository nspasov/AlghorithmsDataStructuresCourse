const arr1 = ['a', 'b', 'c'];
const arr2 = ['c', 'd'];
const arr3 = ['x', 'y', 'z'];

// function sameElement(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for(j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// O(n*m)


function sameElement2(arr1,arr2){

    let map = {};

    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }

    for(let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }

    return false;

}

// O(n + m)

console.log(sameElement2(arr1, arr2));
console.log(sameElement2(arr1, arr3));


