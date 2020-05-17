class Vehicle {
  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }
  constructor(public color: string) {}

  public honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(10, "red");
car.startDrivingProcess();
car.honk();
