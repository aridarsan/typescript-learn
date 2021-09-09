"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("Nyala");
    };
    Asus.prototype.off = function () {
        console.log("Mati");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, KeyboardLight) {
        this.name = name;
        this.KeyboardLight = KeyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log("Nyala");
    };
    Macbook.prototype.off = function () {
        console.log("Mati");
    };
    return Macbook;
}());
var asus = new Asus("Asus", true);
console.log(asus.on());
console.log(asus.off());
var macbook = new Macbook("Macbook", true);
console.log(macbook.on());
console.log(macbook.off());
