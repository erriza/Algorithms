import smallestFromLeaf from "./SmallestStringStartingFromLeaf";
it('should return a when no values in tree', () => {
    let root = { 
        val: 0, 
        left: null, 
        right: null 
    }; 
        // Tree: 'a'

const result = smallestFromLeaf(root);

expect(result).toBe('a');

})

it('should ab with two level tree', () => {
    // Arrange
    let root = { 
        val: 1, 
        left: 
            { val: 0, 
              left: null,
              right: null 
            },
        right: null 
    }; // Tree: 'b' -> 'a';

    // Act
    const result = smallestFromLeaf(root);

    // Assert
    expect(result).toBe('ab');
  });

  it('should abc with complete binary tree', () => {
    // Arrange
    let root = {
        val: 2,
        left: { val: 1, left: { val: 0, left: null, right: null }, right: null },
        right: { val: 3, left: null, right: null }
    }; // Tree structure:
    //     'c'
    //    /   \
    //  'b'   'd'
    //  /
    // 'a'
    

    // Act
    const result = smallestFromLeaf(root);

    // Assert
    expect(result).toBe('abc');
  });

  it('should return null if no tree input', () => {
    let root = null;

    const result = smallestFromLeaf(root);

    expect(result).toBe(undefined);
    
  })