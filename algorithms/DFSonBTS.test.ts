import dfs from './DFSonBST'


// Define the BinaryNode type
interface BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

// Define a function to create BinaryNode instances
function createBinaryNode<T>(value: T): BinaryNode<T> {
  return { value, left: null, right: null };
}

describe('dfs', () => {
  test('should return true if needle is found in the tree', () => {
    /*
    * Tree structure:
    *        5
    *       / \
    *      3   8
    *     / \ / \
    *    1  4 7  9
    */
    const head = createBinaryNode(5);
    head.left = createBinaryNode(3);
    head.right = createBinaryNode(8);
    head.left.left = createBinaryNode(1);
    head.left.right = createBinaryNode(4);
    head.right.left = createBinaryNode(7);
    head.right.right = createBinaryNode(9);

    expect(dfs(head, 4)).toBe(true);
    expect(dfs(head, 7)).toBe(true);
    expect(dfs(head, 5)).toBe(true);
    expect(dfs(head, 10)).toBe(false);
  });

  test('should return false for an empty tree', () => {
    expect(dfs(null, 5)).toBe(false);
  });

  test('should return false if needle is not found in the tree', () => {
    const head = createBinaryNode(5);
    head.left = createBinaryNode(3);
    head.right = createBinaryNode(8);
    head.left.left = createBinaryNode(1);
    head.left.right = createBinaryNode(4);
    head.right.left = createBinaryNode(7);
    head.right.right = createBinaryNode(9);

    expect(dfs(head, 6)).toBe(false);
    expect(dfs(head, 2)).toBe(false);
  });
});