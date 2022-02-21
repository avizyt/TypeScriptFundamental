// function runMore(distance: number): number {
//     return distance + 10;
// }

// console.log(runMore(30));
// function eat(calories: number) {
//     console.log("I ate " + calories + " calories");
// }
// function sleepIn(hours: number): void {
//     console.log("I slept " + hours + " hours");
// }
// let ate = eat(100);
// console.log(ate);
// let slept = sleepIn(10);
// console.log(slept);

type Run = (mile: number) => boolean;
let runner: Run = function (mile: number): boolean {
    if (mile > 10) {
        return true;
    }
    return false;
};
console.log(runner(9));
