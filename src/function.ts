//tipe data pada balikan function, artinya setiap function harus didefinisikan terlebih dahulu apa tipe datanya
function getName():string{
  return "hello my name is Ari" //return string, jika return number maka akan error
}
console.log(getName())

function getAge ():number{
  return 24 //tipe data number, maka jika mereturn data lain maka akan error
}
console.log(getAge())

function printName():void{//tidak mereturn apa apa tapi masih bisa ditampilkan
  console.log("ari")
}
printName()


//argument => harus menngunakan static typing
type Val = number
function multiply(val1:Val, val2:Val): number{ //harus menngunakan nama tipe datanya pada parameter
  return val1 * val2
}

console.log(multiply(90,2))

//function sebagai tipe data
type age = number
let age = 24

type tambah = (val1: number, val2: number) => number
const Add: tambah = (val1: number, val2: number) : number =>{
  return val1 + val2
}

//default parameter digunakan untuk membuat suatu definisi yang memiliki default, jadi akan berisi otomastis ketika tidak diisi sekalikup saat dipanggil 
const fullName = (first: string, last: string = "Darsan"): string => {
  return first + " " + last
}

//last nya ga di isi, namun me retutn Ari Darsa
console.log(fullName("Ari"))

//return Ari Jarwo karena last nya di definisikan kembali
console.log(fullName("Ari", "Jarwo"))

