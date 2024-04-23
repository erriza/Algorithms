const { findMinHeightTrees, adjacencyMaker } = require('./minimumHeightTrees');

describe('adjacencyMaker', () => {
    it('should create an empty adjacency list and leaf node set for an empty graph', () => {
        const [adjList, leafNodes] = adjacencyMaker([]);
        expect(adjList.size).toBe(0);
        expect(leafNodes.size).toBe(0);
    });

    it('should create a correct adjacency list and leaf nodes for a single edge', () => {
        const [adjList, leafNodes] = adjacencyMaker([[0, 1]]);
        expect(adjList.get(0)).toEqual(new Set([1]));
        expect(adjList.get(1)).toEqual(new Set([0]));
        expect(leafNodes.size).toBe(2);
        expect(leafNodes.has(0)).toBe(true);
        expect(leafNodes.has(1)).toBe(true);
    });

    it('should correctly update leaf nodes when a node gains more connections', () => {
        const [adjList, leafNodes] = adjacencyMaker([[0, 1], [1, 2]]);
        expect(adjList.get(1)).toEqual(new Set([0, 2]));
        expect(leafNodes.size).toBe(2);
        expect(leafNodes.has(0)).toBe(true);
        expect(leafNodes.has(2)).toBe(true);
    });
});

describe('findMinHeightTrees', () => {
    // Test cases from previous examples: empty graph, single edge, star graph, line graph, central node

    it('should work for a more complex graph', () => {
        const edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]];
        expect(findMinHeightTrees(6, edges)).toEqual([3, 4]);
    });

    // Add more test cases as needed for different graph structures and edge cases
});