function arrays() {
    const names: string[] = [];
    names.push('leemr');
    // names.push(1); // compile error
    console.log(names);
}

arrays();

/*******************************************/
function readonly_array() {
    const names: readonly string[] = ["leemr"];
    // names.push("test"); // compile error
}

readonly_array();

/*******************************************/
function type_inference() {
    const numbers = [1, 2, 3, 4];
    numbers.push(5);
    // numbers.push("2");  // compile error
    let head:number = numbers[0];
}

type_inference();


