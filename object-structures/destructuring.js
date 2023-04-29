/**
 * destructuring assigment : unpack. 
 *                           - arrays or objects -> bunch of variables
 * 
 * 
 */

/**
 * array destructuring
 */
let arr = ['mr', 'lee'];
let [firstname, surname] = arr;
console.log(`firstname = ${firstname}, surname=${surname}`);

let [firstname2, surname2] = 'mr lee'.split(' '); // destructuring is copy. not modify origin itself
console.log(`firstname = ${firstname2}, surname=${surname2}`);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three);

// swap variables trick
let a = 1;
let b = -1;

[a, b] = [b, a];
console.log(a, b);

// '...'
let [name1, name2, ...rest] = ['name1', 'name2', 'name3', 'name4', 'namr5'];
console.log(rest);


/**
 * object destructuring
 */

let options = {
    title: 'title',
    width: 100,
    height: 200
};

let { title, width, height } = options; // order not matter
console.log(title, width, height);

let { ...rest2 } = options;
console.log(rest2);

/**
 * smart function parameters
 */
// function({
//     incomingProperty: varName = defaultValue
//     ...
//   })


let user = {
    username: 'leemr',
    age: 29
};

let { username: name, age: years, isAdmin: isAdmin = false } = user;
console.log(name, years, isAdmin);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let [person, maxSalary] = [null, 0];

for (let [key, value] of Object.entries(salaries)) {
    if(value > maxSalary){
        person = key;
        maxSalary = value;
    }
}

console.log(person);