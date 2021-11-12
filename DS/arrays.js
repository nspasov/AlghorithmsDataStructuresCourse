// ARRAYS 


// const strings = ['a', 'b', 'c', 'd'];

// strings.push('e'); // O(1)
// strings.pop(); // O(1)
// strings.unshift('x') // O(n) -> Cause it goes through the array and changes every index
// strings.shift();


// console.log(strings);

// ----------------------------------- BUILDING AN ARRAY ---------------------------------------

class MyArray {
    constructor () {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const deletedItem = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('bye');

newArray.delete(1);
console.log(newArray.get(0));
console.log(newArray);

