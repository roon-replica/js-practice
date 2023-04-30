function createPairs<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

console.log(createPairs(1, 2), createPairs(1, '2'));

function toString<S>(input: S): string {
    if (typeof input === 'string') {
        return input
    } else if (typeof input === 'boolean') {
        return String(input)
    } else return 'else';
}

console.log(toString(false), toString(undefined));


/////
type Wrapped<T> = { value: T };
const wrappedNumber: Wrapped<number> = { value: 10 };
const wrappedString: Wrapped<string> = { value: 'string' };
const wrappedBoolean: Wrapped<boolean> = { value: true };
console.log(wrappedNumber, wrappedString, wrappedBoolean);


////
function createLoggedPairs<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair... {v1=${v1}, v2=${v2}}`);
    return [v1, v2];
}

const ret = createLoggedPairs("1", 2);
console.log(ret);
