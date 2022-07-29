process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    // Split lines into an array
    const inputLines = input.split('\n');
    // Remove the first item from inputLines and save it
    const numberOfNodes = Number.parseInt(inputLines.splice(0, 1));
    // Call function that prints the node paths
    generatePaths(numberOfNodes, inputLines)
});

/**
 * DAG
 * Print out paths for all the connected nodes.
 * Input below represents 7 total nodes where n1, n2
 * represents a path from n1 to n2:
	7
	0, 1
	0, 2
	1, 3
	1, 5
	2, 5
	6, 2

 * Expected output:
	0->1->3
	0->1->5
	0->2->5
	4
	6->2->5

 * My output:
	0->1->3
	1->3
	2->5
	3
	4
	5
	6->2->5
 */

function generatePaths(numberofNodes, nodes) {
    // console.log(numberofNodes);
    // console.log(nodes);
    // Init a map to represent a given node as the key and list of connected nodes as the value
    const pathMap = {};
    for (let i = 0; i < numberofNodes; i++) {
        pathMap[i] = [];
    }
    
    // Populate the pathMap with the connected nodes
    for (let i = 0; i < nodes.length; i++) {
        const [source, destination] = nodes[i].replace(' ', '').split(',');
        pathMap[source].push(destination); 
    }
    
    // console.log(pathMap);
    
    // Recursively generate the paths

    // Recursive helper function
    function generateNodePath(root) {
        const paths = pathMap[root];
        // Base case
        if (paths.length === 0) return root;
        
        // Generate paths for all connected nodes
        for (let i = 0; i < paths.length; i++) {
            // TODO: This only returns the path for the first item completely.
            // Need to save the result and only return once all paths for each
            // node in the loop is generated.
            return root.toString() + '->' + generateNodePath(paths[i]);
        }
    }
    
    const pathMapKeys = Object.keys(pathMap);
    for (let i = 0; i < pathMapKeys.length; i++) {
        const path = generateNodePath(pathMapKeys[i]);
        console.log(path);
    }
}
