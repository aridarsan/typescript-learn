//interface sama dengan type yang fungsinya untuk melakukan blue print atau kontrak dengan compiler, sehingga jika salah satu data di interface tidak diisi maka aplikasi tidak akan berjalan dengan lancar
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string
  isGaming: boolean

  constructor(name:string, isGaming: boolean){
    this.name = name;
    this.isGaming = isGaming
  }

  on(): void {
    console.log("Nyala");
  }
  off(): void {
    console.log("Mati");
  }
}

class Macbook implements Laptop {
  name: string
  KeyboardLight: boolean

  constructor(name:string, KeyboardLight: boolean){
    this.name = name;
    this.KeyboardLight = KeyboardLight
  }
  on(): void {
    console.log("Nyala");
  }
  off(): void {
    console.log("Mati");
  }
}

let asus = new Asus ("Asus", true)
console.log(asus.on())
console.log(asus.off())

let macbook = new Macbook ("Macbook", true)
console.log(macbook.on())
console.log(macbook.off())