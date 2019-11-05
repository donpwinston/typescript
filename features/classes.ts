class Vehicle {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log("Vrrrrooom");
  }

  public honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const vehicle = new Vehicle("black");
vehicle.drive();
vehicle.honk();

const car = new Car(4, "red");
car.honk();
