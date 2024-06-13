class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree) {
    let diameter = 0;

    function getDiameter(node){
        if(node === null) return 0;

        const left = getDiameter(node.left);
        const right = getDiameter(node.right);

        diameter = Math.max(left + right, diameter);
        return 1 + Math.max(left + right);
    }

    getDiameter(tree);
    return diameter;
}

exports.BinaryTree = BinaryTree;
exports.binaryTreeDiameter = binaryTreeDiameter;