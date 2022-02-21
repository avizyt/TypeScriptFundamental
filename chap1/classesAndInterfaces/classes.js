// class Person {
//     constructor(private msg: string) {}
//     speak() {
//         console.log(this.msg);
//     }
// }
class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name.");
        }
        return this.message;
    }
    set Message(val) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.Message = tmpMessage;
    }
}
const speaker = new Speaker("jhon");
speaker.Message = "hello";
console.log(speaker.Message);
// const tom = new Person("Hello");
// // tom.msg = "hello";
// tom.speak();
