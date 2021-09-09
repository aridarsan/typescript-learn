"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    // public name : string;
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
var user = new User("Ari Darsan", 25);
console.log(user);
//public = bisa di akses di semua class / dari luar class
//protected = hanya bisa di akses dari kelas tersebut. dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri maka dari itu perlu menggunakan setter dan getter
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return "hei";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Admin"; //nempel dikelasnya jadi bisa di akses dari mana saja
    return Admin;
}(User));
// let admin = new Admin("08398938", "Toni", 23)
// // console.log(admin)
// admin.email = "admin@admin.com"
// console.log(admin.email)
var admin = Admin.getNameRole();
console.log(admin);
