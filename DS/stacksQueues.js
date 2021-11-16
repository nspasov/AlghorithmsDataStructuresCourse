 // Stack Linked List 

 class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek(){
        return this.top.value;
    }
    push(value){

        const newNode = new Node(value);

        if(this.length === 0){
            this.length = 1;
            this.bottom = newNode;
            this.top = newNode;
            return newNode;
        }

        this.length++;
        let holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        return this;

    }
    pop(){

        if(this.length === 0)
            return;

        if(this.length === 1){
            this.botom = null;
        }

        this.top = this.top.next;
        this.length--;
        return this;
    }

    isEmpty(){
        if(this.length === 0){
            return true;
        }

        return false;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.push(3);
  myStack.push(4);
  myStack.pop();
  myStack.pop();
  //console.log(myStack);

  class Queue {
      constructor(){
          this.first = null;
          this.last = null;
          this.length = 0;
      }

      peek(){
        return this.first.value;
      }

      enqueue(value){

        const newNode = new Node(value);

        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
        
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
      }

      dequeue(){

        if(this.length === 0){
            return;
        }



        const valueHolder = this.first.value;
        this.first = this.first.next;
        this.length--;

        if(this.length === 0)
            this.first = null;
            this.last = null;
            
        return valueHolder;

      }

      isEmpty(){
        if(this.length === 0)
            return true;
        return false;     
      }
  }

  const myQueue = new Queue();

  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  console.log(myQueue.peek());



