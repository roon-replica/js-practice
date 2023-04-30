function return_type() {
    function get_time(): number {
        return new Date().getTime();
    }
    console.log(new Date(get_time()));
}

return_type();

/*******************************************/
function void_return_type() {
    const print_hello = (): void => console.log('hello');
    const return_number = (num: number): number => num;

    print_hello();
    console.log(return_number(123));
}
void_return_type();

/*******************************************/
function parameters() {
    const multiply = (a: number, b: number) => a * b;
    console.log(multiply(2, 3));
}
parameters();
/*******************************************/

const optional_parameters = (a: number, b: number, c?: number) => {
    const add: Function = (a: number, b: number, c: number): number => a + b + c;
    console.log(add(a, b, c));
}
optional_parameters(1, 2, 3);

const optional_parameters2 = (arr: Array<number>, add: boolean) => {
    let sum: number = 0;
    for (const num of arr) {
        sum += num;
    }

    sum += add ? 1 : 0;

    console.log(sum);
}
optional_parameters2([1, 2, 3], true);

/*******************************************/
// default parameters
// rest parameters

/*******************************************/
function named_parameters() {
    function divide({ dividend, divisor }: { dividend: number, divisor: number }) { // 알아보기 힘든데..
        return dividend / divisor;
    }

    console.log(divide({ dividend: 1, divisor: 2 }));
}
named_parameters();


