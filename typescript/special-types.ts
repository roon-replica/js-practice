
function type_any() {
    let x: any = true;
    print_type(x);
    x = "string";

    print_type(x);

    console.log(Math.round(x));
}

type_any();
/******************************/

function type_unknown(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (Array.isArray(value)) {
        console.log(value.length);
    } else if (typeof value === 'function') {
        console.log(value);
    }
}

type_unknown("string");
type_unknown([1, 2, 3]);
type_unknown(function sample_function(){
    console.log("this is sample function");
});


function print_type(item: any) {
    console.log(typeof item);
}

