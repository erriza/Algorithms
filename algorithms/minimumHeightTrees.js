const adjacencyMaker = edges => {
    let adjacencyList = new Map(), leafNodes = new Set();

    for(let edge of edges) {
        let [from, to] = edge;

        if(!adjacencyList.has(from)){
            adjacencyList.set(from, new Set());
            leafNodes.add(from)
        } else {
            leafNodes.delete(from);
        }

        if(!adjacencyList.has(to)) {
            adjacencyList.set(to, new Set());
            leafNodes.add(to);
        } else {
            leafNodes.delete(to);
        }

        adjacencyList.get(from).add(to);
        adjacencyList.get(to).add(from);
    }
    return [adjacencyList, leafNodes];
}

var findMinHeightTrees = function(n, edges) {
    if(!edges.length) return [0];
    let [adjacencyList, leafNodes] = adjacencyMaker(edges), newLeaves = [];

    while(adjacencyList.size > 2) {
        newLeaves.length = 0;

        for(let leaf of leafNodes) {
            leafNodes.delete(leaf);

            let neighbors = adjacencyList.get(leaf);

            for(let neighbor of neighbors) {
                adjacencyList.get(neighbor).delete(leaf);

                if(adjacencyList.get(neighbor).size === 1)
                newLeaves.push(neighbor);
            }
            adjacencyList.delete(leaf);
        }
        while(newLeaves.length) leafNodes.add(newLeaves.pop());
    }
    return [...adjacencyList.keys()];
};

module.exports = {
    findMinHeightTrees,
    adjacencyMaker
}