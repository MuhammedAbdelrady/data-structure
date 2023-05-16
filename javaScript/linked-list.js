//Structure of any node 
class Node {
    constructor(data , next=null){
        this.data = data
        this.next = next
    }
}

//Linked list class
class linkedList{
    constructor(){      //We consider that the linked list is empty at the beginning
        this.head = null
        this.size = 0
    }
    //Insert first node
    firstInsert(data){
        this.head = new Node(data, this.head)
        this.size++
    }
    //Insert last node
    lastinsert(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node;
            this.size++
        }else{
            let pointer = this.head
            while(pointer.next){
                pointer = pointer.next
            }
            pointer.next = node
            this.size++
        }
    }
    //insert at any position 
    indexInsert(data, index){
        if(index<0 || index>this.size){
            console.log('No negtive index are allowed')
            return
        }
        if(index == 0 ){
            this.head = new Node(data, this.head)
            this.size++
            return 
        }
        const node = new Node(data)
        let currentNode, prevNode
        currentNode = this.head
        let counter = 0 
        //to get the previous node index 
        while (counter < index){
            prevNode = currentNode
            counter++
            currentNode = currentNode.next
        }
        prevNode.next = node
        node.next = currentNode
        this.size++
    }
    //get specific node by index
    getByIndex(index){
        let currentNode;
        currentNode = this.head
        let counter = 0
        while(currentNode){
            if(counter == index){
                console.log(index+'\'s value is :'+currentNode.data)
                return
            }
            else{
                counter++
                currentNode = currentNode.next
            }
        }
    }
    //remove specific node
    removeAt(index){
        if(index<0 || index>=this.size){
            return
        }
        let currentNode, prevNode
        currentNode = this.head
        let counter = 0
        if(index === 0){
            this.head = currentNode.next
        }else{
            while(counter < index){
                counter++
                prevNode = currentNode
                currentNode = currentNode.next
            }
            currentNode = currentNode.next
            prevNode.next = currentNode
        }
    }
    //clear all the linked list
    clear(){
        this.head = 0
        this.size = 0
    }
    //Display Linked list data
    display(){
        let data = this.head
        while(data){
            console.log(data.data)
            data = data.next
        }
        console.log('linked list size is :' +  this.size)
    }
}


//Try part
const list = new linkedList()
list.firstInsert(100)
list.firstInsert(200)
list.firstInsert(300)
list.lastinsert(400)
list.lastinsert(500)
list.indexInsert(150,3)
const list2 = new linkedList()
list2.firstInsert(100)
list2.lastinsert(200)
list2.lastinsert(300)
list2.removeAt(0)
//print linked list data
list2.display()



