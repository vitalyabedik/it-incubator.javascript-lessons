// __proto__ // prototype

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     this.state = {};
//   }
//   engine() {
//     console.log(`Start ${this.brand}`);
//   }
//   stop = () => {
//     console.log(`Stop ${this.brand}`);
//   };
// }

// class SuperCar extends Car {
//   constructor(brand, speed) {
//     super(brand, speed);
//   }
//   render() {}
// }

// const superCar1 = new SuperCar("opel", 220);

// console.log(superCar1.__proto__ === SuperCar.prototype);
// console.log(superCar1.__proto__.__proto__ === Car.prototype);
// console.log(superCar1.__proto__.__proto__.__proto__ === Object.prototype);
// console.log(superCar1.__proto__.__proto__.__proto__.__proto__ === null);
// console.log(superCar1);

// const car1 = new Car("bmw", 200);
// const car2 = new Car("bmw", 200);

// console.log(car1);
// console.log(car2);

// console.log("1", car1 === car2); // false
// console.log("2", car1.brand === car2.brand); // true
// console.log("3", car1.engine === car2.engine); // true
// console.log("4", car1.stop === car2.stop); // false
// console.log("5", car1.state === car2.state); // false

// const a = new Object();
// const b = {}

// console.log(b.__proto__ === Object.prototype);

// function foo() {}
// const bar = () => {};
// const baz = function () {};

// // console.log(car1.__proto__.__proto__ === Function.prototype.__proto__);
// console.log(car1.__proto__.__proto__.__proto__ === null);
// console.log(car1.__proto__.__proto__ === Function.prototype);

// console.log(foo.__proto__ === Function.prototype);
// console.log(bar.__proto__ === Function.prototype);
// console.log(baz.__proto__ === Function.prototype);
// console.log(Car.__proto__ === Function.prototype);

// console.dir((5).__proto__ === Number.prototype);

// class User {
//   constructor(baseName) {
//     this.baseName = baseName;
//   }
//   render() {
//     console.log("Class User");
//   }
// }

// const user = new User("Base");

// user.render();

// const baseUser = {
//   baseName: "Base",
// };

// const user = {
//   showName() {
//     console.log(this.name);
//   },
// };

// User.__proto__ === Object.prototype

// const superUser = {
//   name: "SuperUser",
//   isSuper: true,
// };

// const hanna = {
//   name: "Hanna",
// };

// user.__proto__ = baseUser;
// // User.__proto__ === baseUser
// user.render();
// superUser.__proto__ = user;
// hanna.__proto__ = superUser;

// hanna.showName();

// Класс, определяющий животное.
var Animal = function () {
  this.foo = "sdfjkh";
};

// Подкласс, определяющий кролика.
var Rabbit = function () {};
Rabbit.prototype.bar = function () {
  console.log("bar");
};
Rabbit.prototype = new Animal();

const rabbit1 = new Rabbit();

// console.log(rabbit1.__proto__.__proto__ === Animal.prototype);
// console.log(rabbit1);
rabbit1.bar();

// Создаем экземпляр кролика и проверяем, к каким "классам" он относится.
var bugsBunny = new Rabbit();

// // Багз Банни является экземпляром "класса" Rabbit
// console.log(bugsBunny instanceof Rabbit); // true
// // Багз Банни является экземпляром "класса" Animal
// console.log(bugsBunny instanceof Animal); // true
// // Багз Банни является экземпляром "класса" Object. Это вполне логично,
// // поскольку прототипом "класса" Animal является пустой объект.
// console.log(bugsBunny instanceof Object);
// // А вот и доказательство этого факта.
// console.log(Animal.prototype); // "Object {}"
