#include <iostream>

using namespace std;

//Create new node structure
struct node{
    int data;
    node* next;
};
//create Head pointer to point to the first node
node* head = NULL;

//Functions declaration
void insertNode(int value);
void displayLinkedList();
void deleteNode(int value);
void insertBeginning(int value);
void deleteBeginning();
void deleteEnd();


int main()
{
    //iNSERTION
    insertNode(5);
    insertNode(10);
    insertNode(15);
    insertNode(20);
    insertNode(25);
    //CALL FUNCTIONS
    displayLinkedList();
    deleteNode(15);
    displayLinkedList();
    insertBeginning(15);
    displayLinkedList();
    deleteBeginning();
    displayLinkedList();
    deleteEnd();
    displayLinkedList();

    return 0;
}
void insertNode(int value){

    node* new_node;
    node* last;
    new_node = new node;
    new_node->data = value;
    //Head isn't connected to any linkedlist
    if(head == NULL){
        head = new_node;
        new_node->next = NULL;
    //Here head point to the first node
    }else{
        last = head;
        while(last->next != NULL){
            last = last->next;
        }
        last->next = new_node;
        new_node->next = NULL;
    }
}

void displayLinkedList(){
    node* displayData;
    if(head == NULL){
        cout<<"This linked list is empty";
    }
    else{
        displayData = head;
        cout<<displayData->data;
        while(displayData->next != NULL){
            displayData = displayData->next;
            cout<<"\t"<<displayData->data;
        }
    }
    cout<<endl;
}

void deleteNode(int value){
    node* current_node, * prev_node;
    current_node = head;
    prev_node = head;

    if(current_node->data == value){
        head = current_node->next;
        free(current_node);
        return;
    }
    while(current_node->data != value){
        prev_node = current_node;
        current_node = current_node->next;
    }
    prev_node->next = current_node->next;
    free(current_node);
}

void insertBeginning(int value){
    node* new_node = new node;
    new_node->data = value;
    new_node->next = head;
    head = new_node;
}

void deleteBeginning(){
    node* first_node;
    if(head == NULL){
        cout<<"Empty linked list";
    }
    else{
        first_node = head;
        head = first_node->next;
        free(first_node);
    }
}

void deleteEnd(){
    if (head == NULL){
        cout<<"Linked List is already empty";
    }
    else if (head->next == NULL){
        delete(head);
        head = NULL;
    }
    else{
        node* ptr = head;
        while(ptr->next->next != NULL){
            ptr = ptr->next;
        }
        delete(ptr->next);
        ptr->next = NULL;
    }
}

