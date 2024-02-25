"use strict";
class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const node = new ListNode(value, null);
        if (!this.head) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    remove() {
        if (this.head) {
            this.head = this.head.next;
        }
    }
    display() {
        if (this.head) {
            let current = this.head;
            while (current != null) {
                console.log(current.value);
                current = current.next;
            }
        }
    }
}
class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
const list = new LinkedList(null);
list.add(5);
list.add(2);
list.add(4);
list.display();
