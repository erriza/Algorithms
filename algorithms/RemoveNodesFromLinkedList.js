var removeNodes = function(head) {
    const reverseHead = reverse(head);
    let previouseValidNode = reverseHead;
    let currNode = reverseHead
    let maxValue = -Infinity;

    while(currNode) {
        const nextNode = currNode.next;
        if(currNode.val >= maxValue) {
            currNode.next = previouseValidNode;
            previouseValidNode = currNode;
        }
        maxValue = Math.max(currNode.val, maxValue);
        currNode = nextNode;
    }
    return previouseValidNode;
}

function reverse(head) {
    let prevNode = null;
    let currNode = head;

    while(currNode) {
        const nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    return prevNode;
}

var removeNodes1 = function(head) {
    const stack = [];
    curr = head;

    while(curr) {
        while(stack.length && curr.val > stack[stack.length-1]){
            stack.pop()
        }
        stack.push(curr.val);
        curr = curr.next;
    }

    while(stack.length) {
        curr = new ListNode(stack.pop(), curr)
    }
    return curr;
}

module.exports = {
    removeNodes,
    removeNodes1,
}