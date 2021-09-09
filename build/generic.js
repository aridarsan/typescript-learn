"use strict";
function getData(value) {
    return value;
}
console.log(getData("Nussa"));
console.log(getData(123334343));
//generic
function myData(values) {
    return values;
}
console.log(myData("Nussa").length);
console.log(myData(123334343));
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3);
numbers.add(4);
numbers.addMultiple(8, 9, 7);
console.log(numbers.getAll());
var random = new List(1, "w", "d", 7);
random.add("tambah");
random.add(9898);
random.addMultiple(3232, "rt");
console.log(random.getAll());
