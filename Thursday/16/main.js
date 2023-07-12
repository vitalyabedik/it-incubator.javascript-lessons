// publisher/subscriber

/*
Подписываемся мы всегда на конкретное ДЕЙСТВИЕ

store когда изменится, то он вызовет этих подписчиков
 */

// store.subscribe(function subscriber() {})                  // изменение стора
// button.addEventListener('click', function subscriber() {})       // клик произошел
// promise.then(function subscriber() {})                           // промис зарезолвился
// setTimeout(function subscriber() {}, 1000 )         // прошла секунда
//
// app.post('/books', function subscriber() {})                     // произошел запрос
//
// // subscriber === handler === listener === watcher
//
// const button = {
//     _subscribers: {
//         'click' : [], // [subscriber1, subscriber2]
//         'focus': []   // [subscriber3, subscriber4]
//     },
//     click() {
//         this._subscribers['click'].forEach(sub => sub())
//     },
//     focus() {
//         this._subscribers['focus'].forEach(sub => sub())
//     },
//     addEventListener(event, subscriber) {
//         this._subscribers[event].push(subscriber)
//     },
//     removeEventListener(event, subscriber) {
//         this._subscribers[event] = this._subscribers[event].filter(sub => sub !== subscriber)
//     }
// }


// findLast(), findLastIndex(), toReversed(), toSpliced(), toSorted(), with()


// findLast
// const cars = [
//     {id: 1, brand: 'bmw'},
//     {id: 2, brand: 'opel'},
//     {id: 3, brand: 'audi'},
//     {id: 4, brand: 'toyota'},
//     {id: 5, brand: 'mers'},
//     {id: 6, brand: 'honda'},
//     {id: 7, brand: 'mers'}
// ]
//
// // ищем mers
// const car = cars.find(car => car.brand === 'mers')
// console.log(car)
//
// // ищем последний mers -> неудобно
// // const carFromEnd = [...cars].reverse().find(car => car.brand === 'mers')
// // console.log(carFromEnd)
//
// // ищем последний mers -> по-новому
//
// const carFromEnd = cars.findLast(car => car.brand === 'mers')
// console.log(carFromEnd)


// toReversed
// const a = [1,2,3]
//
// // const revArr = a.reverse()
// const revArr = a.toReversed()
// console.log(a)
// console.log(revArr)


// toSorted
// const cars = [
//     {id: 1, brand: 'bmw'},
//     {id: 2, brand: 'opel'},
//     {id: 3, brand: 'audi'},
//     {id: 4, brand: 'toyota'},
//     {id: 5, brand: 'mers'},
//     {id: 6, brand: 'honda'},
//     {id: 7, brand: 'mers'}
// ]
//
// const sortedCars = cars.toSorted((a, b) => a.brand < b.brand ? 1 : -1)
// console.log(sortedCars)
// console.log(cars)


// toSpliced
// const brands = ['bmw', 'opel', 'audi', 'toyota']

// удаление элементов начиная откуда
// const splicedBrands = brands.splice(2)
// console.log(splicedBrands)                   // 'audi', 'toyota'
// console.log(brands)                          // 'bmw', 'opel'

// удаление определенного количества элементов и откуда
// const splicedBrands = brands.splice(2, 1)  // 'audi'
// console.log(splicedBrands)                               // 'bmw', 'opel', 'toyota'
// console.log(brands)
//
// добавление элемента
// const splicedBrands = brands.splice(2, 1, 'mers')
// console.log(splicedBrands)                       // 'audi'
// console.log(brands)                               // 'bmw', 'opel', 'toyota', 'mers'



// const splicedBrands = brands.toSpliced(2)
// const splicedBrands = brands.toSpliced(2, 1)
// const splicedBrands = brands.toSpliced(2, 1, 'mers')
// console.log(splicedBrands)
// console.log(brands)



// with - найти элемент в массиве и подменить чем-то другим

// const brands = ['bmw', 'opel', 'audi', 'toyota']
//
// const newBrands = brands.with(2, 'mers')
// console.log(newBrands)