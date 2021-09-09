function getData(value: any){
  return value
}

console.log(getData("Nussa"))
console.log(getData(123334343))

//generic
function myData<T>(values: T){
  return values
}

console.log(myData("Nussa").length)
console.log(myData(123334343))

class List <T> {
  private data : T[];

  constructor(...elements: T[]){
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data
  }
}

let numbers = new List <number>(1,2,3);
numbers.add(4)
numbers.addMultiple(8,9,7)
console.log(numbers.getAll())

let random = new List<number | string> (1, "w", "d", 7)
random.add("tambah")
random.add(9898)
random.addMultiple(3232, "rt")
console.log(random.getAll())