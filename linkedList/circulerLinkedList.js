class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class circularLinkedList {
  constructor(data, next) {
    this.head = null;
  }

  insertAtLast(data) {
    const node = new Node();
    node.data = data;
    node.next = node;
    if (!this.head) {
      this.head = node;
    } else {
      let i = this.head;
      while (i.next != this.head) i = i.next;
      node.next = this.head;
      i.next = node;
    }
  }

  insertAtBeginingofList(data) {
    const node = new Node();
    node.data = data;
    node.next = node;
    if (!this.head) {
      this.head = node;
    } else {
      let i = this.head;
      while (i.next != this.head) i = i.next;
      i.next = node;
      node.next = this.head;
    }
    this.head = node;
  }

  insertAtgivenPosition(data, position) {
    let count=0
    const node = new Node();
    node.data = data;
    node.next = node;
    if (!this.head) {
      this.head = node;
    } else {
      let i = this.head;
      while (i.next != this.head){
      count++ 
      if(count==position){
        const prev=i.next
        i.next=node
        node.next=prev
        console.log("data:",i);
      }
      i = i.next;
    }
    }
  }

  print() {
    let i = this.head;
    while (i.next != this.head) {
      console.log(i);
      i = i.next;
    }
    console.log(i);
  }

  print2() {
    let i = this.head;
    do {
      console.log(i);
      i = i.next;
    } while (i != this.head);
    {
    }
  }
}

const cl = new circularLinkedList();
cl.insertAtLast(2);
cl.insertAtLast(3);
cl.insertAtLast(4);
cl.insertAtLast(5);
cl.insertAtBeginingofList(1);
cl.insertAtBeginingofList(0);
cl.insertAtgivenPosition(100,3)
cl.print2();
