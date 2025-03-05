class ListItem<T> {
  public data: T;
  public next: ListItem<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  public top: ListItem<T> | null = null;

  constructor(top: ListItem<T> | null = null) {
    this.top = top;
  }

  printList() {
    let current = this.top; // Use a local variable instead of modifying `top`
    while (current !== null && current?.next !== null) {
      console.log(current.next.data);
      current = current.next;
    }
  }

  addToEnd(item: ListItem<T>) {
    if (!this.top) {
      this.top = item;
      return;
    }

    let current = this.top;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = item;
  }

  addToStart(item: ListItem<T>) {
    if (!this.top) return;

    item.next = this.top.next;
    this.top.next = item;
  }
}

// Creating the linked list
const sentinel = new ListItem<string>(""); // Dummy head
const item1 = new ListItem<string>("Omar");
const item2 = new ListItem<string>("Ayman");
const item3 = new ListItem<string>("Negm");
const item4 = new ListItem<string>("Hello");

// Linking nodes
sentinel.next = item1;
item1.next = item2;

const list1 = new LinkedList<string>(sentinel);
list1.printList(); // Expected output: Omar, Ayman
list1.addToEnd(item3);
console.log("*****************");
list1.printList(); // Expected output: Omar, Ayman, Negm
console.log("*****************");
list1.addToStart(item4);
console.log("*****************");
list1.printList(); // Expected output: Omar, Ayman, Negm
