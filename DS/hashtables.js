let user = {
    age: 54,
    name: 'Noer',
    magic: true,
    scream: function(){
        console.log('AAAH');
    }
}

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)
delete user.spell; // O(1)

const map = new Map();
const set = new Set();

set.add('a');
set.add('b');

for(let item of set){
   // console.log(item)
}

// ---------------------------------------------

class HashTable {

    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key);
        let dataAddress = this.data[address]; // can be stored in variable -> see GET()

        if(this.data[address] !== undefined){
            this.data[address].push([key, value]);
        }else{
            this.data[address] = [[key, value]];
        }

    }

    get(key){
        let address = this._hash(key);

        let dataAddress = this.data[address];

        if(dataAddress.length === 1){
            return dataAddress[0][1];
        }

        for(let i = 0; i < this.data[address].length; i++){
            if(key === dataAddress[i][0]){
                return dataAddress[i][1];
            }
        }   
    }

    keys(){
        let keys = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i] && this.data[i].length === 1){
                keys.push(this.data[i][0][0]);
                continue;
            }

            for(let j = 0; j < this.data[i].length; j++){
                keys.push(this.data[i][j][0]);
            }
        }

        return keys;
    }

}

let hashTable = new HashTable(3);
hashTable.set('david', 'gilmour');
hashTable.set('roger', 'waters');
hashTable.set('richard', 'wright');
hashTable.set('nick', 'mason');
hashTable.set('syd', 'barrett');
console.log(hashTable);
console.log(hashTable.get('david'));
console.log(hashTable.get('roger'));
console.log(hashTable.get('richard'));
console.log(hashTable.get('nick'));
console.log(hashTable.get('syd'));
console.log('--------------');
console.log(hashTable.keys());

