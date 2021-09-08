//enum

//1 numerik enum
enum Month {
  JAN=1,//bis diganti index nya
  FEB=34,
  MAR,
  APR,
  MAY
}

console.log(Month)
console.log(Month.MAY)

//2 string enum tidak bisa menambahkan tipe data yang berbeda
enum Day {
  Mon = "Monday",
  Thu ="Thursday",
  Wed = "Wednesday",
  Tue = "Tuesday",
  Fri = "Friday"
}

console.log(Day)
console.log(Day.Fri)
