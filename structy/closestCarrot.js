/*
Write a function, closestCarrot, 
*/

const undirectedGraphFromEdgeList = (e_list) => {
  const graph = {}

  for (let edge of e_list) {
    const [node1, node2] = edge
    if (!(node1 in graph)) graph[node1] = []
    if (!(node2 in graph)) graph[node2] = []
    graph[node1].push(node2)
    graph[node2].push(node1)
  }

  return graph
}

const closestCarrot = (edges, nodeStart) => {
  const graph = undirectedGraphFromEdgeList(edges)
  let closestC = null

  for (let box of field) {
  }
}

const field = ["XXXXXX", "XXXXXO", "XXXXXX", "XXXXXX", "XXXOXX", "XXOXXX"]

console.log(longestPath(arrTest, "e"))
