function canDrive(usr) {
    console.log("".concat(usr.name, " can drive"));
    if (usr.age >= 16) {
        console.log("Allow to drive");
    }
    else {
        console.log("Not allow to drive");
    }
}
var tom = {
    name: "Tom",
    age: 18
};
canDrive(tom);
