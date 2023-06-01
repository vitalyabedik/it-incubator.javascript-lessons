// promise

/*
js - однопоточный
Если бы не было возможности работать с асинхронным кодом -> страница бы зависала
 */

// const fetchData = fetch(url, callback) => {
//     callback()
// }


// callback Hell
// fetch('https://shop/autors', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         fetch('https://shop/autors/65', (err, data) => {
//             if(err) {
//                 console.log(err)
//             } else {
//                 fetch('https://shop/autors/65/books', (err, data) => {
//                     if(err) {
//                         console.log(err)
//                     } else {
//                         fetch('https://shop/autors/65/books/23/', (err, data) => {
//                             if(err) {
//                                 console.log(err)
//                             } else {
//                                 fetch('https://shop/autors/65/books/23/356', (err, data) => {
//                                     if(err) {
//                                         console.log(err)
//                                     } else {
//
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

fetch('https://shop/autors')
    .then(data => {
        return fetch('https://shop/autors/65')
    })
    .then(data => {
        return fetch('https://shop/autors/65')
    })
    .then(data => {
        return fetch('https://shop/autors/65/books')
    })
    .then(data => {
        return fetch('https://shop/autors/65/books/23/')
    })
    .then(data => {
        return fetch('https://shop/autors/65/books/23/356')
    })
    .catch(err => {
        console.log(err)
    })

// pending | fulfilled | rejected
// Promise принимает функцию executor

// const server = {
//     getData(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const data = {}
//                 if (data) {
//                     resolve(data)
//                 } else {
//                     reject('Sorry something error')
//                 }
//             }, 2000)
//         })
//
//     }
// }
//
// const promise = server.getData()
// console.log(promise)
//
// class MyPromise {
//     constructor(callback) {
//         this.callback = callback
//     }
//
//     resolve(data) {
//         return {
//             PromiseState: 'fulfilled',
//             PromiseResult: data
//         }
//     }
//
//     reject(error) {
//         return {
//             PromiseState: 'error',
//             PromiseResult: error
//         }
//     }
// }


// Пример
// const fs = require('fs')
//
// const server1 = {
//     getData(url) {
//         return new Promise((resolve, reject) => {
//             fs.readFile('./index.js', (error, data) => {
//                 if (error) {
//                     reject(error)
//                 } else {
//                     resolve(data)
//                 }
//             }, 2000)
//         })
//
//     }
// }

// Если просят напиши промис
// const pr = new Promise((resolve, reject) => {
//     const data = {}
//     const error = 'some error'
//     if (data) {
//         resolve(data)
//     } else {
//         reject(error)
//     }
// })


// обработка промисов

const server2 = {
    getData(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Some data')
                // reject('Something went wrong')
            }, 2000)
        })
    }
}

const promise = server2.getData()

// promise.then((data) => {
//     console.log(data)
// })

// promise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// promise.catch(err => {
//     console.log(err)
// })
//
// promise.finally(() => {
//     console.log('finally')
// })


// цепочки промисов
const server3 = {
    getData(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Some data')
                // reject('Something went wrong')
            }, 2000)
        })
    }
}

// если в then не написать return -> в цепочку ничего не передастся

server3
    .getData()
    .then(data => {
        console.log('then1')
        // return 10
        // если промис возвращает другой промис -> в результат по цепочке передадим результат промиса
        return newPromise((res, rej) => {
            res('another promise')
        })
    })
    .then(data => {
        console.log('then2')
    })
    .finally(data => {
        console.log('finally')
        console.log(data)
    })
    .then(data => {
        console.log('then3')
    })
    .catch(error => {
        console.log('error')
    })




// Promise.reject('reject1')
//     .catch(t => t + 'catch1')
//     .catch(t => t + 'catch2')
//     .then(t => t + 'then1')
//     .finally(t => t + 'finally')
//     .then(t => console.log(t))