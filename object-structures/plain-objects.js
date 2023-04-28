
/* examples of how to handle Object.values() */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    // let ret = 0;
    // for(let price of Object.values(salaries)){
    //     ret += price;
    // }
    // return ret;

    // more simple code
    return Object.values(salaries).reduce((a, b) => a + b, 0);
}

console.log(sumSalaries(salaries)); // 650

/* examples of how to handle Object.keys() */
for (const key of Object.keys(salaries)) {
    console.log(`key = ${key}`);
}

/* examples of how to use Object.entries() */
let doubleSalaries = Object.fromEntries(
    Object.entries(salaries).map(entry => [entry[0], entry[1] * 2])
);

console.log(doubleSalaries);


