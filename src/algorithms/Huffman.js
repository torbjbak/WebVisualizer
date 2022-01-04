export const huffman = function(input) {
    let output = []
    let infoText = []

    const countMap = countChars(input)
    output.push(countMap.toString())
    infoText.push("Count map of characters in input string.")

    const tree = getTree(countMap)
    // output.push(tree.toString())
    // infoText.push("Huffman tree based on count map.")

    const codingMap = getCodingMap(tree)
    output.push(codingMap.toString())
    infoText.push("Encoding map based on Huffman tree.")

    const binaryString = getString(input, codingMap)
    output.push(binaryString)
    infoText.push(
        "New binary string. Using Hoffman algorithm, new bit count is " 
        + (100 * binaryString.length / (8 * input.length)).toFixed(2) 
        + "% of original count."
    )
    console.log(output)
    console.log(infoText)
    return [output, infoText]
}

class Node {
    constructor(value, char, left, right) {
        this.value = value
        this.char = char
        this.left = left
        this.right = right
    }
}

const countChars = function(input) {
    const countMap = {}
    for(let c of input) {
        countMap[c] = countMap[c] ? countMap[c] + 1 : 1
    }
    return countMap
}

const getTree = function(countMap) {
    let forest = []
    for(let c in countMap) {
        forest.push(new Node(countMap[c], c))
    }

    let allNodes = []
    while(forest.length > 1) {
        forest.sort((a, b) => { return (a.value - b.value) })

        allNodes.push(forest[0])
        allNodes.push(forest[1])

        let mergeNode = new Node(forest[0].value + forest[1].value, '')

        mergeNode.left = allNodes[allNodes.length - 2] // lower freq subtree
        mergeNode.right = allNodes[allNodes.length - 1] // higher freq subtree

        forest = forest.slice(2) // remove two smallest trees
        forest.push(mergeNode) //
    }
    return forest[0] 
}

const getCodingMap = function(tree) {
    let hash = {}

    let traversal = (node, path) => {
        // do nothing if Node has no children
        if (!node.left && !node.right) 
            return
        // add '0' if left child has no children
        if (node.left && !node.left.left && !node.left.right)  
            hash[node.left.char] = path + '0'  
        // add '1' if right child has no children
        if (node.right && !node.right.left && !node.right.right) 
            hash[node.right.char] = path + '1' 
        // Traverse left and add 0 to the path  
        if(node.left)  
            traversal(node.left, path + '0')
        // Traverse right and add 1 to the path  
        if(node.right)
            traversal(node.right, path + '1')
    }

    traversal(tree, '')  
    
    return hash
}

const getString = function(input, codingMap) {
    let binaryString = ""
    for(let c of input)
        binaryString = binaryString + codingMap[c]
    
    return binaryString
}

Object.prototype.toString = function() {
    let str = ""
    for(const key in this) {
        str = str + `'${key}':${this[key]},  `
    }
    return str
}