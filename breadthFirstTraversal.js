const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

/*
 No recursive way, because we need a queue to implement the breadthFirst algo, and recursion is a stack technique
*/

/*****************************
 *** iterative way ***********
 *****************************/
const breadthFirstIteration = (graph, source) => {
  let queue = [source]

  while (queue.length > 0) {
    const node = queue.shift()
    console.log(node)
    queue = [...queue, ...graph[node]]
  }

  return 0
}

console.log(breadthFirstIteration(graph, "a"))
