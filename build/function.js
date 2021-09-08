"use strict";
//tipe data pada balikan function
function getName() {
    return "hello my name is Ari";
}
console.log(getName());
function getAge() {
    return 24;
}
console.log(getAge());
function printName() {
    console.log("print ari");
}
printName();
//argument => harus menngunakan static typing
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(90, 2));
var age = 24;
var Add = function (val1, val2) {
    return val1 + val2;
};
