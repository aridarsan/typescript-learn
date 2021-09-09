export class User {
  // public name : string;

  constructor(public name: string, public age: number) {
    this.name = name
  }

  setName(value: string): void {
    this.name = value
  }

  // getName = (): string => {
  //   return this.name
  // }
}

let user = new User("Ari Darsan", 25)
console.log(user)

//public = bisa di akses di semua class / dari luar class
//protected = hanya bisa di akses dari kelas tersebut. dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri maka dari itu perlu menggunakan setter dan getter

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = ""
  static getRoleName: string = "Admin" //nempel dikelasnya jadi bisa di akses dari mana saja

  constructor(phone: string, name: string, age: number) {
    super(name, age)
    this.phone = phone
  }

  static getNameRole(){
    return "hei"
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }

  set email(value: string) {
    this._email = value
  }

  get email(): string {
    return this._email
  }

}


// let admin = new Admin("08398938", "Toni", 23)
// // console.log(admin)

// admin.email = "admin@admin.com"
// console.log(admin.email)

let admin = Admin.getNameRole()
console.log(admin)