const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

/*****************************
 *** recursive way ***********
 *****************************/
const breadthFirstRecursion = (graph, source) => {
  console.log(source)

  for (let neighbor of graph[source]) {
    breadthFirstRecursion(graph, neighbor)
  }

  return 0
}

console.log(breadthFirstRecursion(graph, "a"))

/*****************************
 *** iterative way ***********
 *****************************/
const breadthFirstIteration = (graph, source) => {
  let stack = [source]

  while (stack.length > 0) {
    const node = stack.pop()
    console.log(node)
    stack = [...stack, ...graph[node]]
  }

  return 0
}

console.log(breadthFirstIteration(graph, "a"))
