let val: unknown = 22;
val = "String value";
val = new Array();

if (val instanceof Array) {
    val.push(33);
}

console.log(val);
