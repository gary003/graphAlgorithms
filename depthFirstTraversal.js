// this graph is acyclic
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
const depthFirstPrintRecursionStack = (graph, source) => {
  let stack = [source]

  explore(graph, stack)
  return 0
}

const explore = (graph, stack) => {
  if (stack.length == 0) return 0

  const node = stack[stack.length - 1]

  console.log(node)

  stack.pop()
  stack = [...stack, ...graph[node]]
  explore(graph, stack)
}

console.log(depthFirstPrintRecursionStack(graph, "a"))

/******************************
 *** recursive way 2  *********
 *****************************/
const depthFirstPrintRecursion = (graph, source) => {
  console.log(source)

  for (const neighbor of graph[source]) {
    depthFirstPrintRecursion(graph, neighbor)
  }

  return 0
}

console.log(depthFirstPrintRecursion(graph, "a"))

/*****************************
 *** iterative way ***********
 *****************************/
const depthFirstPrintIteration = (graph, source) => {
  let stack = [source]

  while (stack.length > 0) {
    const node = stack.pop()
    console.log(node)
    stack = [...stack, ...graph[node]]
  }

  return 0
}

console.log(depthFirstPrintIteration(graph, "a"))
