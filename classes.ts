// methods default to public
class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("chugga chugga");
  }

  public honk(): void {
    console.log("beep");
  }
}

// class inheritance
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // can override methods on Vehicle class
  public drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

// super class methods available
const car = new Car(4, "silver");
car.startDrivingProcess();
car.honk();
