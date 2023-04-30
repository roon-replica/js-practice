function type_aliases() { //define custom types
    type CarYear = number;
    type CarType = string;
    type CarModel = string;

    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel
    };

    const carYear: CarYear = 2016;
    const carType: CarType = 'kia';
    const carModel: CarModel = 'k5';

    const car: Car = {
        year: carYear,
        type: carType,
        model: carModel
    };

    console.log(car);
}
type_aliases();

/*******************************************/
function interfaces() {
    interface Rectangle {
        h: number,
        w: number
    };

    const rectangle: Rectangle = {
        h: 5,
        w: 1
    };

    console.log(rectangle);
}

interfaces();

/*******************************************/
function extending_interfaces() {
    interface Rectangle {
        h: number,
        w: number
    };

    interface Colored_Rectangle extends Rectangle {
        color: string
    };

    const colored_rectangle: Colored_Rectangle = {
        h: 1,
        w: 5,
        color: "green"
    };
    console.log(colored_rectangle);
}

extending_interfaces();