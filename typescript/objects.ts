function basic() {
    const car: { type: string, model: string, year: number } = {
        type: "chevolet",
        model: "cruz",
        year: 2016
    };

    console.log(car.type, car.model, car.year);
}

basic();

/*******************************************/
function object_type_inference() {
    const car = {
        type: "chevolet"
    };
    car.type = 'hyundai';
    // car.type= 1; // compile error
}
type_inference();

/*******************************************/
function optional_property() {
    // const car: { type: string, mileage: number } = { // compile error. 'mileage' type should be defined
    //     type: 'hyundai'
    // }

    const car: { type: string, mileage?: number } = {
        type: 'hyundai'
    };
    console.log(car);
}
optional_property();

/*******************************************/
