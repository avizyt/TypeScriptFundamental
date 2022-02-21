class Person {
    name: string;
}
const avijit: { name: string } = {
    name: "avijit",
};
const jill: { name: string } = {
    name: "jill",
};

const person1: Person = jill;
const person2: Person = avijit;
console.log(person1.name);
console.log(person2.name);
