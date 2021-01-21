class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(newItem, beforeItem) {
        if(this.head === null) {
            this.insertFirst(newItem)
            return
        }
        let currNode = this.head
        let prevNode = this.head

        while (currNode !== null && currNode.val !== beforeItem) {
            prevNode = currNode
            currNode = currNode.next
        }
        if(currNode === null) {
            this.insertLast(newItem)
            return
        }
        const tempNode = new _Node(newItem, currNode)

        prevNode.next = tempNode

    }

    insertAfter(newItem, afterItem) {
        if(this.head === null) {
            this.insertFirst(newItem)
        }
        let currNode = this.find(afterItem)
        if(currNode === null) {
            this.insertLast(newItem)
            return
        }
        const tempNode = new _Node(newItem, currNode.next)

        currNode.next = tempNode
    }

    insertAt(item, position) {
        if(this.next === null ) {
            this.insertAfter(item)
            return 
        }
        let currNode = this.head
        let currPosition = 1

        while(currPosition < position -1) {
            currNode = currNode.next
            currPosition++
        }
        const tempNode = new _Node(item, currNode.next)

        currNode.next = tempNode
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
}

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function main() {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.find('Husker')
    SLL.remove('Husker')
    //SLL.insertBefore('Athena', 'Boomer')
    //SLL.insertAfter('Hotdog', 'Helo')
    //SLL.insertAt('Kat', 3)
    //SLL.remove('Tahuida')

    return SLL;
}

console.log(main())

const LL = main()

function display(LL) {
    let output = ''
    let currNode = LL.head
    while(currNode !== null) {
        output += currNode.val
        if(currNode.next !== null) {
            output += ' -> '
        }
        currNode = currNode.next
    } 
     return output
}
console.log(display(LL))

function size(LL) {
    let size = 0
    let currNode = LL.head
    while(currNode !== null) {
        size++
        currNode = currNode.next
    }
    return size
}
console.log(size(LL))

