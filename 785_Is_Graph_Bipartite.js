/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    //Create 3 maps. 2 maps are used for the 2 halves of the Bipartite, which I visualize as a top half and a bottom half (hence the names). The third map named unseen is used to catch seperated graphs that aren't connected.
    let top = new Map(), bottom = new Map(), unseen = new Map()
    for (let i = 0; i<graph.length; i++) {
        //Add our first node from our graph
        if (top.size == 0 && bottom.size == 0 && graph[i].length != 0) {
            top.set(i)
        }
        //If we haven't seen a node yet, it isnt connected, so we add it to our "unseen" map.
        if (!top.has(i) && !bottom.has(i) && graph[i].length != 0) {
            unseen.set(i)
        }
        
        for (let j = 0; j<graph[i].length; j++) {
            //Make sure that all connected nodes aren't already on the same side. If they are, it is not a bipartite, so we return false.
            if (top.has(i) && top.has(graph[i][j]) || bottom.has(i) && bottom.has(graph[i][j])) {
                console.log(top)
                console.log(bottom)
                return false
            }
            // If it made it through the above check we add it to the opposite side.
            if (top.has(i)) {
                bottom.set(graph[i][j])
            } else if (bottom.has(i)) {
                top.set(graph[i][j])
            }
        }
        //Finally we make sure we didn't skip over anything. If we did miss anything, we restart using the skipped number as a starting point.
        if (i === graph.length-1 && unseen.size != 0) {
            i = unseen.entries().next().value[0] - 1
            top = new Map()
            bottom = new Map()
            unseen = new Map()
        }
    }
    //If we made it through the loop then it's a bipartite, so we return true!
    return true
};