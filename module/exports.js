// https://javascript.info/modules

export function sayHi(user) {
  return `Hello, ${user}!`;
}

let numbers = [1,2,3,4];
export {numbers as exportedNumbers};