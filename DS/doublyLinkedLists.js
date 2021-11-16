

let doublyLinkedList = {
    head:{
        value:10,
        previous: null,
        next:{
            value: 5,
            previous: `Reference to value 10`,
            next:{
                value: 16,
                previous: `Reference to value 5`,
                next: null
            }
        }
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            previous: null,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.next = null;
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        
        const newNode = new Node(value);
        newNode.previous = null;
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode
        this.length++;
        return this;
    }

    insert(index, value){
        if(index === 0){
            return this.prepend(value);
        }

        if(index >= this.length){
            return this.append(value);
        }

        const newNode = new Node(value);
        let currentNode = this.head;
        let counter = 0;

        while(counter < index){

            if(counter === index-1){
                newNode.next = currentNode.next;
                currentNode.next.previous = newNode;
                currentNode.next = newNode;
                newNode.previous = currentNode;
                this.length++;
                break;
            }

            currentNode = currentNode.next;
            counter++;
        }
        return newNode;
    }

    remove(index){
        if(index >= this.length){
            return;
        }

        if(index === 0){
            length--;
            return this.head = this.head.next;
        }

        let counter = 0;
        let currentNode = this.head;

        while(counter < index){

            if(counter === index-1){
                currentNode.next = currentNode.next.next;
                currentNode.next.next.previous.previous = currentNode;
                this.length--;
                break;
            }

            currentNode = currentNode.next;
            counter++;
        }
    }
}

let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(2);
myDoublyLinkedList.prepend(6);
myDoublyLinkedList.insert(2,4);
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList);