function numeric_enums() {
    enum OneToThree {
        ONE,
        TWO,
        THREE
    }

    let one: number = OneToThree.ONE;

    for (const [key, value] of Object.entries(OneToThree)) { //왤케 출력이 많이 되지?
        console.log(key, value);
    }
}
numeric_enums();

/*******************************************/
function initialized_numeric_enums() {
    enum OneToThree {
        ONE = 1,
        TWO,
        THREE
    }

    for (const item of Object.entries(OneToThree)) {
        console.log(item);
    }
}

initialized_numeric_enums();
/*******************************************/