/*
Write a function, shortestPath, 
that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return the length of the shortest path between A and B. 
Consider the length as the number of edges in the path, not the number of nodes. 
If there is no path between A and B, then return -1.
*/

const graphFromEList = (e_list) => {
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

const nodesPath = (graph) => {
  const nodePathLength = {}

  for (let node of Object.keys(graph)) {
    nodePathLength[node] = 0
  }

  return nodePathLength
}

const longestPath = (edges, nodeStart, nodeEnd, visited = new Set()) => {
  const graph = graphFromEList(edges)
  const allNodes = nodesPath(graph)

  console.log({ graph })

  let stack = [[nodeStart, 0]]

  while (stack.length) {
    const [currentNode, pathLength] = stack.pop()

    console.log(graph[currentNode])

    const validNeighbors = graph[currentNode].filter((neighbor) => {
      if (allNodes[neighbor] < pathLength + 1) {
        return true
      }
      return false
    })

    for (let n of validNeighbors) {
      stack.push([n, pathLength + 1])
      allNodes[n] += 1
    }

    // console.log(validNeighbors, stack, allNodes)
  }

  return allNodes[nodeEnd]
}

console.log(
  longestPath(
    [
      ["a", "c"],
      ["a", "b"],
      ["c", "b"],
      ["c", "d"],
      ["b", "d"],
      ["b", "e"],
      ["e", "d"],
      ["d", "g"],
      ["f", "e"],
      ["g", "f"]
    ],
    "a",
    "e"
  )
)
