class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

exports.LinkedList = LinkedList;

function mergingLinkedList(LinkedListOne, LinkedListTwo) {
    const listOneNodes = new Set();
    
    let currNodeOne = LinkedListOne;
    while (currNodeOne !== null) {
        listOneNodes.add(currNodeOne);
        currNodeOne = currNodeOne.next;
    }

    let currNodeTwo = LinkedListTwo;
    while (currNodeTwo !== null) {
        if(listOneNodes.has(currNodeTwo)) return currNodeTwo;
        currNodeTwo = currNodeTwo.next;
    }

    return null;
}

function mergingLinkedList(LinkedListOne, LinkedListTwo) {
    let currNodeOne = LinkedListOne;
    let countOne = 0;
    while(currNodeOne !== null) {
        countOne++;
        currNodeOne = currNodeOne.next;
    }

    let currNodeTwo = LinkedListTwo;
    let countTwo = 0;
    while(currNodeTwo !== null) {
        countTwo++;
        currNodeTwo = currNodeTwo.next;
    }

    const diff = Math.abs(countTwo - countOne);
    let biggerCurrNode = countOne > countTwo ? LinkedListOne : LinkedListTwo;
    let smallerCurrNode = countOne > countTwo ? LinkedListTwo : LinkedListOne;

    for(let i = 0; i < diff; i++) {
        biggerCurrNode = biggerCurrNode.next;
    }

    while(biggerCurrNode !== smallerCurrNode) {
        biggerCurrNode = biggerCurrNode.next;
        smallerCurrNode = smallerCurrNode.next;
    }

    return biggerCurrNode;
}

exports.mergingLinkedList = mergingLinkedList;