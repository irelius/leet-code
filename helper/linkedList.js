// class to make a linked list
class LinkedList {
    constructor(head = null) {
        this.head = head
        this.length = 0
    }

    getLength() {
        return this.length
    }
}

// class to make a list node
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// function to convert a linked list into an array
function convertLinkedListToArray(linkedList) {
    let arr = []
    let currNode = linkedList.head
    while (currNode) {
        arr.push(currNode.val)
        currNode = currNode.next
    }
    return arr
}

// function to make a linked list. not perfect as the classes are missing some class functions
// will probably build out continuously to make future testing with linked lists better
function makeLinkedList(arr) {
    let firstNode = new ListNode(arr[0])
    let list = new LinkedList(firstNode)
    list.length++
    let currNode = firstNode

    for (let i = 1; i < arr.length; i++) {
        let newNode = new ListNode(arr[i])
        currNode.next = newNode
        currNode = newNode
        list.length++
    }

    return list
}


module.exports = {
    convertLinkedListToArray,
    makeLinkedList
}
