abstract class Vehicle {
  abstract wheels: number;
  start(): void {
    console.log("brum")
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle{
  wheels: number = 2
}

let car = new Car()
let motor = new Motorcycle()
console.log(car.wheels)
car.start()

console.log(motor.wheels)
motor.start()