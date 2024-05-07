const { removeNodes1, removeNodes } = require('./RemoveNodesFromLinkedList'); 

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;

    for(let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while(current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr
}

  test('should return empty list for an empty list', () => {
    const head = null;
    const expectedHead = null;
    expect(removeNodes(head)).toEqual(expectedHead);
  });
  
  test('should remove all nodes if all nodes have values less than the last node', () => {
    const head = createLinkedList([1, 2, 3]);
    const expectedHead = null;
    expect(removeNodes(head)).toEqual(expectedHead);
  });
  
  test('should remove only non-maximum nodes', () => {
    const head = createLinkedList([1, 2, 1, 3]);
    const expectedHead = createLinkedList([2, 1, 3]); // Node with value 2 should be the head
    expect(removeNodes(head)).toEqual(expectedHead);
  });
  
  test('should handle a single node list', () => {
    const head = createLinkedList([1]);
    const expectedHead = head;
    expect(removeNodes(head)).toEqual(expectedHead);
  });