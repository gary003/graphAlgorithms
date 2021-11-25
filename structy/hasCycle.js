/*
Write a function, hasCycle
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

const hasCycle = (edges, nodeStart, nodeEnd) => {
  const graph = undirectedGraphFromEdgeList(edges)

  let stack = [nodeStart]

  while (stack.length) {
    const path = stack.pop()

    // console.log(path)

    const pathArr = path.split(".")
    const lastNode = pathArr[pathArr.length - 1]

    const validNeighbors = graph[lastNode].filter((n) => n !== pathArr[pathArr.length - 2])

    // console.log(pathArr, pathArr.slice(0, pathArr.length - 2), graph[lastNode], validNeighbors)

    const cycleFound = validNeighbors.some((n) => pathArr.slice(0, pathArr.length - 2).includes(n))
    if (cycleFound) return true

    // console.log(validNeighbors)

    if (lastNode === nodeEnd) continue

    const newPaths = validNeighbors.map((neighbor) => path + "." + neighbor)

    // console.log(newPaths)

    stack = [...stack, ...newPaths]
  }

  return false
}

const arrTest = [
  // ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  // ["b", "d"],
  // ["b", "e"],
  ["e", "d"],
  ["d", "g"],
  // ["f", "e"],
  ["g", "f"]
]

console.log(hasCycle(arrTest, "e", "b"))
