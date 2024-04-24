const { LinkedList, mergingLinkedList } = require('./MergingLinkedList'); // Assuming your code is in 'your_file_name.js'

describe('mergingLinkedList', () => {
  it('should return null if both lists are empty', () => {
    const listOne = null;
    const listTwo = null;
    const result = mergingLinkedList(listOne, listTwo);
    expect(result).toBeNull();
  });

  it('should return null if one list is empty and the other is not', () => {
    const listOne = new LinkedList(1);
    const listTwo = null;
    const result = mergingLinkedList(listOne, listTwo);
    expect(result).toBeNull();

    const listThree = null;
    const listFour = new LinkedList(2);
    const result2 = mergingLinkedList(listThree, listFour);
    expect(result2).toBeNull();
  });

  it('should return the merging point if the lists merge', () => {
    const listOne = new LinkedList(1);
    listOne.next = new LinkedList(2);
    listOne.next.next = new LinkedList(3);

    const listTwo = new LinkedList(4);
    listTwo.next = new LinkedList(5);
    listTwo.next.next = listOne.next; // Merging point

    const result = mergingLinkedList(listOne, listTwo);
    expect(result).toBe(listOne.next); // Check if it's the same node
    expect(result.value).toBe(2); // Check the value for clarity
  });

  it('should return null if the lists do not merge', () => {
    const listOne = new LinkedList(1);
    listOne.next = new LinkedList(2);
    listOne.next.next = new LinkedList(3);

    const listTwo = new LinkedList(4);
    listTwo.next = new LinkedList(5);
    listTwo.next.next = new LinkedList(6);

    const result = mergingLinkedList(listOne, listTwo);
    expect(result).toBeNull();
  });

  it('should handle lists of different lengths', () => {
    const listOne = new LinkedList(1);
    listOne.next = new LinkedList(2);

    const listTwo = new LinkedList(3);
    listTwo.next = new LinkedList(4);
    listTwo.next.next = listOne; // Merging point

    const result = mergingLinkedList(listOne, listTwo);
    expect(result).toBe(listOne); 
  });
});