class LinkedList<T> {
    private head : ListNode<T> | null;

    constructor(head: ListNode<T> | null) {
        this.head = head;
    }
    public add(value : T) {
        const node : ListNode<T> = new ListNode<T>(value, null);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    public remove() {
        if(this.head) {
            this.head  = this.head.next;
        }
    }
    public display() {
        if(this.head) {
            let current : ListNode<T> | null = this.head;
            while(current != null) {
                console.log(current.value);
                current = current.next;
            }
        }
    }
    
}

class ListNode<T> {
    public value : T;
    public next : ListNode<T> | null;
    constructor(value : T, next : ListNode<T> | null) {
        this.value = value;
        this.next = next;
    }
}
const list : LinkedList<number> = new LinkedList<number>(null);
list.add(5);
list.add(2);
list.add(4);
list.display();