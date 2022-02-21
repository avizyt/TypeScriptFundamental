interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log(`${usr.name} can drive`);

    if (usr.age >= 16) {
        console.log("Allow to drive");
    } else {
        console.log("Not allow to drive");
    }
}

const tom = {
    name: "Tom",
    age: 18,
};

canDrive(tom);
