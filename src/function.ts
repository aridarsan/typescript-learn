//tipe data pada balikan function

function getName():string{
  return "hello my name is Ari"
}

console.log(getName())

function getAge ():number{
  return 24
}

console.log(getAge())

function printName():void{//tidak mereturn apa apa
  console.log("print ari")
}
printName()


//argument => harus menngunakan static typing
function multiply(val1:number, val2:number): number{ //harus menngunakan nama tipe data nya pada params
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

