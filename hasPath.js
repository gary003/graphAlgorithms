const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

/******************************
 *** recursive way 1  *********
 *****************************/
const hasPathRecursive = (graph, src, dest) => {
  if (src === dest) return true

  return graph[src].reduce((acc, neighbor) => {
    const val = hasPathRecursive(graph, neighbor, dest)
    return acc || val
  }, false)
}

console.log(hasPathRecursive(graph, "a", "f"))

/*****************************
 *** iterative way ***********
 *****************************/
const hasPathIterative = (graph, src, dest) => {
  const queue = [src]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (currentNode === dest) return true

    queue.push(...graph[currentNode])
  }

  return false
}

console.log(hasPathIterative(graph, "a", "f"))
