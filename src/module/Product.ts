import Asus from "./Asus";
import MacBook from "./Macbook";

let asus = new Asus("zenbook", true, true)
console.log(asus)

let macbook = new MacBook(2017, false, false)
console.log(macbook)
macbook.a()
macbook.b()