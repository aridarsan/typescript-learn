"use strict";
//tipe data pada balikan function, artinya setiap function harus didefinisikan terlebih dahulu apa tipe datanya
function getName() {
    return "hello my name is Ari"; //return string, jika return number maka akan error
}
console.log(getName());
function getAge() {
    return 24; //tipe data number, maka jika mereturn data lain maka akan error
}
console.log(getAge());
function printName() {
    console.log("ari");
}
printName();
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(90, 2));
var age = 24;
var Add = function (val1, val2) {
    return val1 + val2;
};
//default parameter digunakan untuk membuat suatu definisi yang memiliki default, jadi akan berisi otomastis ketika tidak diisi sekalikup saat dipanggil 
var fullName = function (first, last) {
    if (last === void 0) { last = "Darsan"; }
    return first + " " + last;
};
//last nya ga di isi, namun mereturn Ari Darsan
console.log(fullName("Ari"));
//return Ari Jarwo karena last nya di definisikan kembali
console.log(fullName("Ari", "Jarw"));
//optional parameter = type yang diberikan hanya pada saat diperlukan saja, jika tidak diisi value maka akan undifined
var address = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(address("papayan", "rancasari"));
console.log(address("papayan"));
