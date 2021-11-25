/*
Write a function, longestPath, 
that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return the length of the longest path between A and B. 
Consider the length as the number of edges in the path, not the number of nodes. 
If there is no path between A and B, then return -1.
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

const longestPath = (edges, nodeStart, nodeEnd) => {
  const graph = undirectedGraphFromEdgeList(edges)
  let pathsFound = []

  let stack = [nodeStart]

  while (stack.length) {
    const path = stack.pop()

    // console.log(path)

    const pathArr = path.split(".")
    const lastNode = pathArr[pathArr.length - 1]

    if (lastNode === nodeEnd) {
      if (pathsFound.length === 0) pathsFound = [path]
      else if (pathsFound[0].length < path.length) pathsFound = [path]
      else if (pathsFound[0].length === path.length) pathsFound = [...pathsFound, path]

      continue
    }

    // console.log(lastNode, graph[lastNode])

    const validNeighbors = graph[lastNode].filter((n) => !pathArr.includes(n))

    // console.log(validNeighbors)

    const newPaths = validNeighbors.map((neighbor) => path + "." + neighbor)

    // console.log(newPaths)

    stack = [...stack, ...newPaths]
  }

  return pathsFound
}

const arrTest = [
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
]

console.log(longestPath(arrTest, "e", "b"))
