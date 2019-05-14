export class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(newNode) {
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    } 

    pop() {
        if (!this.head || this.length < 1) return undefined;

        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // this is the item that we are popping
    }

    shift() {
        if (!this.head || this.length < 1) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;

        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return oldHead;
    }

    unshift(newNode) {
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }

      this.length += 1;

      return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return;

        let count = 0;
        let current = this.head;

        while (count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

}