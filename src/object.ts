//Object
//jika data dari object akan di ubah maka harus sesuai dengan tipe data pada awal pendefinisian

//jika tidak menggunakan type seperti ini maka boleh, jadi tipe data akan terbaca otomatis oleh sistem
type User = {
  name : string,
  age: number
}

let user: User = {
  name : "Ari",
  age: 15
}

user = {
  name : "tasik",
  age: 6
}