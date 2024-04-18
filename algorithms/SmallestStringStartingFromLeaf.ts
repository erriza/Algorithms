
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

const smallestFromLeaf = (root: TreeNode | null): string | undefined => {
    if(!root) return undefined;
    const node = root;
    let str = '';
    let list: string[] = [];
    DFS(node, str);

    function DFS(node: TreeNode | null, str: string) {
        if(node == null) return;
        let temp = String.fromCharCode(97 + node.val) + str;
        if(node.left == null && node.right == null) list.push(temp);
        DFS(node.left, temp);
        DFS(node.right, temp);
    }
    list.sort();
    return list[0];
}


export default smallestFromLeaf;