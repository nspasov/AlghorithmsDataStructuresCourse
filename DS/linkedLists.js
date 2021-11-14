// 10 ---> 5 ---> 16

let linkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

// Class we use to create a new  Data Node when inserting into the linked list 
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        const newNode = new Node(value);
        let counter = 0;
        let currentNode = this.head;

        if(index >= this.length){
            return this.append(value);
        }

        if(index === 0){
            return this.prepend(value);
            
        }

        while(counter <= index){


            if(counter === index-1){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++;
                break;
            }

            currentNode = currentNode.next;
            counter++;

        }

        return newNode;
    }

    remove(index){

        let counter = 0;
        let currentNode = this.head;

        if(index >= this.length){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
        }

        while(counter < index){
            if(counter === index-1){
                if(index === this.length-1){
                    currentNode.next = null;
                    break;
                }

                currentNode.next = currentNode.next.next;
            }

            currentNode = currentNode.next;
            counter++;
        }

    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.insert(4,15);
myLinkedList.remove(4);
console.log(myLinkedList.printList());


