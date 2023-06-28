//Class

// const car1 = {
//   brand: "bmw",
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// const car2 = {
//   brand: "opel",
//   maxSpeed: 260,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// function createCar(brand, maxSpeed) {
//   return {
//     brand,
//     maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`);
//     },
//   };
// }

// const car1 = createCar("bmw", 220);
// const car2 = createCar("opel", 260);

// console.log(car1);
// console.log(car2);

// console.log(car1.startEngine === car2.startEngine);

// car1.startEngine();
// createCar("bmw", 220).startEngine();

// function Car(brand, maxSpeed) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
// }

// Car.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// const car1 = new Car("bmw", 220);
// const car2 = new Car("opel", 260);

// console.log(car1);
// console.log(car2);

// car1.startEngine();

// Car.prototype.stopEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   stopEngine = () => {
//     console.log(`Stop ${this.brand}`);
//   };
//   showBrand = function () {
//     console.log(`${this.brand}`);
//   };
// }

// const car1 = new Car("bmw", 220);
// const car2 = new Car("opel", 260);

// console.log(car1);
// console.log(car2);

// car1.startEngine();
// car2.stopEngine();

// class Car {
//   #brand;
//   static wheels = 4;
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   set brand(newBrand) {
//     // console.log("SET");
//     if (newBrand.length < 2) {
//       throw new Error("Bad brand");
//     }
//     this.#brand = newBrand;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   // static
// }

// const car1 = new Car("bmw", 220);
// console.log(car1.brand);
// car1.brand = "toyota";
// console.log(car1.wheels);

// console.log(Car.wheels);

// car1.brand = "t";

// console.log(car1);

// Promise.all([pr1,])

class Car {
  #brand;
  static wheels = 4;
  constructor(brand, maxSpeed) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }
  set brand(newBrand) {
    if (newBrand.length < 2) {
      throw new Error("Bad brand");
    }
    this.#brand = newBrand;
  }
  get brand() {
    return this.#brand;
  }
  canFly() {
    return "can't fly";
  }
}

class SuperCar extends Car {
  constructor(brand, maxSpeed, wings) {
    super(brand, maxSpeed);
    this.wings = wings;
  }
  // canFly() {
  //   console.log("FLY");
  // }
  canFly() {
    return super.canFly() + "hjkasgd";
  }
}

const superBmw = new SuperCar("bmw", 300, true);
superBmw.brand = "superBmw";
console.log(superBmw.brand);
console.log(superBmw.canFly());
