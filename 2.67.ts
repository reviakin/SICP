function makeList(...arg: any[]) {
    return [...arg];
}

function makeLeaf(symbol: string, weight: number): Leaf {
    return makeList('leaf', symbol, weight);
}

type Leaf = ['leaf', string, number];

function isLeaf(param: any) {
    return param && Array.isArray(param) && param.length && param[0] === 'leaf';
}

function getLeafSymbol(param: Leaf): string {
    return param[1];
}

function getLeafWeight(param: Leaf): number {
    return param[2];
}

function getLeftBranch(tree) {
    return tree[0];
}

function getSymbols(param) {
    return isLeaf(param) ? getLeafSymbol(param) : param[2];
}

function getWeights(param) {
    return isLeaf(param) ? getLeafWeight(param) : param[3];
}

function getRightBranch(tree) {
    return tree[1];
}

type Tree = [Leaf | Tree, Leaf | Tree, string[], number];

function makeCodeTree(l: Tree | Leaf, r: Tree | Leaf): Tree {
    return makeList(
        l,
        r,
        [getSymbols(l), getSymbols(r)].flat(),
        getWeights(l) + getWeights(r)
    );
}

function sampleTree() {
    return makeCodeTree(
        makeLeaf('a', 20),
        makeCodeTree(
            makeLeaf('b', 15),
            makeCodeTree(makeLeaf('c', 5), makeLeaf('z', 5))
        )
    );
}

const message = [0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0];

function decodeMessage(message:number[], tree:Tree){
    if (!message || !Array.isArray(message) || !message.length) return null

    let ans = ''
    let messageReadIndex = 0

    let _tree;
    
    while (messageReadIndex < message.length){
        const target = _tree ? _tree[message[messageReadIndex]] : tree[message[messageReadIndex]]
        if (isLeaf(target)){
            ans += getLeafSymbol(target);
            _tree = undefined;
        }
        else {
            _tree= target;
        }
        messageReadIndex ++;
    }

    return ans
}
