// __proto__ и prototype

class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
        this.state = {}
    }
    engine() {
        console.log(`Start ${this.brand}`)
    }
    stop = () => {
        console.log(`Stop ${this.brand}`)
    }
}

const car1 = new Car('bmw', 200)
const car2 = new Car('bmw', 200)
//
// console.log(car1)
// console.log(car2
//
// console.log('1', car1 === car2)                // false
// console.log('2', car1.brand === car2.brand)    // true
// console.log('3', car1.engine === car2.engine)  // true
// console.log('4', car1.stop === car2.stop)      // false - создаются разные функции на каждый экземпляре
// console.log('5', car1.state === car2.state)    // false

// console.log(car1.__proto__ === Car.prototype)

// const a1 = String(123)
// const b1 = new String('123')
//
// const a = 'string'
// const b = 'string'
//
// console.log(a === b)
//
// console.log(a.__proto__ === String.prototype)



// const a2 = {}
//
// console.log(a2.__proto__ === Object.prototype)



// function foo() {}
// const bar = () => {}
// const baz = function() {}
//
//
// console.log(foo.__proto__ === Function.prototype)
// console.log(bar.__proto__ === Function.prototype)
// console.log(baz.__proto__ === Function.prototype)
// console.log(Car.__proto__ === Function.prototype)

// console.log(car1.__proto__.__proto__ === Function.prototype.__proto__)
// console.log(car1.__proto__.__proto__ === Object.prototype)
// console.log(car1.__proto__.__proto__.__proto__ === null)

