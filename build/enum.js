"use strict";
//enum
//1 numerik enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 34] = "FEB";
    Month[Month["MAR"] = 35] = "MAR";
    Month[Month["APR"] = 36] = "APR";
    Month[Month["MAY"] = 37] = "MAY";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.MAY); //rreturn index dari obejct
//2 string enum tidak bisa menambahkan tipe data yang berbeda
var Day;
(function (Day) {
    Day["Mon"] = "Monday";
    Day["Thu"] = "Thursday";
    Day["Wed"] = "Wednesday";
    Day["Tue"] = "Tuesday";
    Day["Fri"] = "Friday";
})(Day || (Day = {}));
console.log(Day); //object ditambah index obeject nya
console.log(Day.Fri);
