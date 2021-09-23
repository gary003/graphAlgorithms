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

const shortestPath = (edges, nodeA, nodeB, visited = new Set()) => {
  const graph = graphFromEList(edges)

  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    const [currentNode, pathLength] = queue.shift()

    if (currentNode === nodeB) return pathLength
    if (visited.has(currentNode)) continue

    visited.add(currentNode)

    for (let neighbor of graph[currentNode]) {
      queue.push([neighbor, pathLength + 1])
    }
  }

  return -1
}

console.log(
  shortestPath(
    [
      ["a", "c"],
      ["a", "b"],
      ["c", "b"],
      ["c", "d"],
      ["b", "d"],
      ["e", "d"],
      ["g", "f"]
    ],
    "e",
    "c"
  )
)

/* 
{
  a: [ 'c', 'b' ],
  c: [ 'a', 'b', 'd' ],
  b: [ 'a', 'c', 'd' ],
  d: [ 'c', 'b', 'e' ],
  e: [ 'd' ],
  g: [ 'f' ],
  f: [ 'g' ]
}
*/
