// ------------- RULES ----------------

// 1.Identify the base case (when to stop)
// 2. Identify the recursive case (when to dig deeper)
// 3. Make sure you return when needed -> Usually a recursive function has TWO RETURN statements

let counter = 0;

function inception(){
    if(counter > 3)
        return 'Done'
    
    counter++;
    inception(); // that way it will return undefined & not 'Done'
    return inception(); // that way the return statement will bubble up through the stack and will return 'Done'
}

// -------------------------------- FACTORIAL -----------------------------------

// 5! = 5 * 4 * 3 * 2 * 1

function findFactorialRecursive(num){
    if(num === 1)
        return 1;

    return num * findFactorialRecursive(num-1)
}

function findFactorialIterative(num){

    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }

    return result;

}

//console.log(findFactorialRecursive(5));
//console.log(findFactorialIterative(5));

// -------------------------- FIBONACCI -----------------------------
// 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibonacciIterative(n){ // O(N)

    let arr = [0,1];

    for(let i = 2; i <= n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[n];

}


function fibonacciRecursive(n){ // O(2 ^ N) -> SUPER BAD
    if(n < 2)
        return n;

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

// console.log(fibonacciIterative(44));
// console.log(fibonacciRecursive(44));


// ----------------- REVERESE A STRING -----------------

function reverseStringIterative(str){

    let reversed = [];

    for(let i = str.length-1; i >=0; i--){
        reversed.push(str[i]);
    }

    return reversed.join('');

}

function reverseStringRecursive(str){
    // to do
}


console.log(reverseStringIterative('alabalax'));

