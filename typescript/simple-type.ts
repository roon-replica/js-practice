
function type_assignment() {
    let name: string = "leemr"; // explicit type
    let name2 = "roon"; // implicit type (ts compiler infer type)
    console.log(name, name2);
}
type_assignment();
/**********************************************/

function error_in_type_assignment() {
    let name = "leemr";
    // name = 12;
}
/**********************************************/

function unable_to_infer() {
    const json = JSON.parse("55");
    console.log(typeof json); // wrong infer
}

unable_to_infer();

