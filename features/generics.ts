class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything([1, 2, 3, 4]);

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

printAnything(["a", "b", "c"]);

class Car {
  print() {
    console.log("Car");
  }
}

class House {
  print() {
    console.log("House");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) arr[i].print();
}

printHousesOrCars<Car>([new Car(), new Car()]);
