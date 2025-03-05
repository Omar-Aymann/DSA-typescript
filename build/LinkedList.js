"use strict";
class ListItem {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class LinkedList {
    constructor(top = null) {
        this.top = null;
        this.top = top;
    }
    printList() {
        let current = this.top; // Use a local variable instead of modifying `top`
        while (current !== null && (current === null || current === void 0 ? void 0 : current.next) !== null) {
            console.log(current.next.data);
            current = current.next;
        }
    }
    addToEnd(item) {
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
    addToStart(item) {
        if (!this.top)
            return;
        item.next = this.top.next;
        this.top.next = item;
    }
}
// Creating the linked list
const sentinel = new ListItem(""); // Dummy head
const item1 = new ListItem("Omar");
const item2 = new ListItem("Ayman");
const item3 = new ListItem("Negm");
const item4 = new ListItem("Hello");
// Linking nodes
sentinel.next = item1;
item1.next = item2;
const list1 = new LinkedList(sentinel);
list1.printList(); // Expected output: Omar, Ayman
list1.addToEnd(item3);
console.log("*****************");
list1.printList(); // Expected output: Omar, Ayman, Negm
console.log("*****************");
list1.addToStart(item4);
console.log("*****************");
list1.printList(); // Expected output: Omar, Ayman, Negm
