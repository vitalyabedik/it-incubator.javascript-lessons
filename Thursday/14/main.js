// Class

// const car1 = {
//     brand: 'bmw',
//     maxSpeed: 220,
//     startEngine() {
//         console.log(`Start ${this.brand}` )
//     }
// }
//
// const car2 = {
//     brand: 'opel',
//     maxSpeed: 260,
//     startEngine() {
//         console.log(`Start ${this.brand}` )
//     }
// }

// фабричная функция -> минус в том что создается в памяти одна и таже функция
// function createCar(brand, maxSpeed) {
//     return {
//         brand,
//         maxSpeed,
//         startEngine() {
//             console.log(`Start ${this.brand}` )
//         }
//     }
// }
//
// const car1 = createCar('bmw', 220)
// const car2 = createCar('opel', 250)
//
// console.log(car1.startEngine() === car2.startEngine())
//
// car1.startEngine()


// функция-конструктор
// function Car(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
// }
//
// Car.prototype.startEngine = function() {
//     console.log(`Start ${this.brand}` )
// }
//
// const car1 = new Car('bmw', 220)
// const car2 = new Car('opel', 250)
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()


// классы

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     // стрелочную функцию лучше не юзать, т.к. будет создаваться новый объект
//     stopEngine() {
//         console.log(`Stop ${this.brand}`)
//     }
// }
//
// const car1 = new Car('bmw', 220)
// const car2 = new Car('opel', 250)
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()


// class Car {
//     // private
//     #brand
//     // static
//     static wheels = 4
//     constructor(brand, maxSpeed) {
//         this.#brand = brand
//         this._maxSpeed = maxSpeed
//     }
//     startEngine() {
//         console.log(`Start ${this.#brand}`)
//     }
//     // стрелочную функцию лучше не юзать, т.к. будет создаваться новый объект
//     stopEngine() {
//         console.log(`Stop ${this.#brand}`)
//     }
//     showMaxSpeed() {
//         console.log(`Stop ${this._maxSpeed}`)
//     }
//     // геттеры и сеттеры для доп логики
//     getBrand() {
//         return this.#brand
//     }
//     setBrand(newBrand) {
//         if (newBrand.length < 2) {
//             throw new Error('Bad brand')
//         }
//         return this.#brand = newBrand
//     }
//     // дескрипторы - дают возможность работать напрямую со свойствами + можно писать доп логику
//     set brand(newBrand) {
//         this.#brand = newBrand
//     }
//     get brand() {
//         return this.#brand
//     }
//     // static
// }
//
// // car2._maxSpeed = 100
// // car2.#maxSpeed = 100
// //
// // car1.startEngine()
// // car2.startEngine()
//
// const car1 = new Car('bmw', 220)
// const car2 = new Car('opel', 250)
//
// // car2._maxSpeed = 100
// // car2.#maxSpeed = 100
// //
// // car1.startEngine()
// // car2.startEngine()
//
// const car1Brand = car1.getBrand()
// console.log(car1Brand)
//
// car1.brand = 'toyota'
// console.log(car1.brand)
//
// // car2._maxSpeed = 100
// // car2.#maxSpeed = 100
// //
// // car1.startEngine()
// // car2.startEngine()
//
//
// console.log(car1.wheels)
// console.log(Car.wheels)



// Наследование
class Car {
    #brand
    static wheels = 4
    constructor(brand, maxSpeed) {
        this.#brand = brand
        this._maxSpeed = maxSpeed
    }
    setBrand(newBrand) {
        if (newBrand.length < 2) {
            throw new Error('Bad brand')
        }
        return this.#brand = newBrand
    }
    get brand() {
        return this.#brand
    }
}

class SuperCar extends Car {
    constructor(brand, maxSpeed, wings) {
        super(brand, maxSpeed)
        this.wings = wings
    }
}

const superBmw = new SuperCar('bmw', 300, true)
superBmw.brand = 'superBmw'

console.log(superBmw)
console.log(superBmw.brand)

















