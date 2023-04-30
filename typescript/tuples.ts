function tuple() {
    let tuple: [number, boolean, string];
    tuple = [1, true, "string"];

    for (let value of tuple) {
        console.log(`type = ${typeof value}, value = ${value}`);
    }
}

tuple();

/*******************************************/
function readonly_tuple_example() {
    const readonly_tuple: readonly [number, number] = [1, 1];
    // readonly_tuple.push(1, 2); //compile error
    console.log(readonly_tuple);
}

readonly_tuple_example();

/*******************************************/
function named_tuple() {
    const graph: [x: number, y: number] = [1.1, -1.1];
    console.log(graph[0], graph[1]);
    console.log(graph);
}

named_tuple()

/*******************************************/
function destructuring_tuple() {
    const graph: [x: number, y: number] = [1.1, -1.1];
    const [x, y] = graph;
    console.log(x, y);
}
destructuring_tuple();