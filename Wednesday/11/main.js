import fetch from 'node-fetch';

// fetch('https://google.com/?query=js').then((data) => {
//     console.log(data.url)
// })
// fetch('https://bing.com/?query=js').then((data) => {
//     console.log(data.url)
// })
// fetch('https://duckduckgo.com/?query=js').then((data) => {
//     console.log(data.url)
// })


//--------------------
// return позволяет выполнять промисы последовательно (дожидаемся ответа)
// резолвим датой, которая пришла из выполненного промиса

fetch('https://google.com/?query=js')
    .then((data) => {
        console.log(data.url)
    })
    .then((data) => {
        return fetch('https://bing.com/?query=js')
    })
    .then((data) => {
        console.log(data.url)
        return fetch('https://duckduckgo.com/?query=js')
    })
    .then((data) => {
        console.log(data.url)
    })


fetch('https://bing.com/?query=js').then((data) => {
    console.log(data.url)
})
fetch('https://duckduckgo.com/?query=js').then((data) => {
    console.log(data.url)
})


// статические методы промисов all || race || allSettled || any

const pr1 = fetch('https://google.com/?query=js')
const pr2 = fetch('https://bing.com/?query=js')
const pr3 = fetch('https://duckduckgo.com/?query=js')

// all - возвращает промис и будут храниться результаты по порядку
// промисы запускаются одновременно
// если хоть 1 промис reject -> весь промис rejected
// Promise.all([pr1, pr2, pr3])
//     .then(bigData => {
//         console.log(bigData[0])
//         console.log(bigData[1])
//         console.log(bigData[2])
//     })
//     .catch(err => {
//         console.log("ERROR", err)
//     })

// так пишут обычно
// Promise.all([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ]).then(bigData => {
//     console.log(bigData[0])
//     console.log(bigData[1])
//     console.log(bigData[2])
// })
//     .catch(err => {
//         console.log("ERROR", err)
//     })


// RACE
// возвращает самый быстрый промис
// если есть ошибка, то она приходит быстрее

// const pr1 = fetch('https://google.com/?query=js')
// const pr2 = fetch('https://bing.com/?query=js')
// const pr3 = fetch('https://duckduckgo.com/?query=js')
//
// Promise.race([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js'),
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             rej("ERROR FROM SET TIMEOUT")
//         }, 500)
//     })
// ]).then(data => {
//     console.log("DATA", data.url)
// }).catch((err) => {
//     console.log("ERROR", err)
// })


// ANY - по сути противоположность метода race
// возвращает первый положительный ответ (если хотя бы один зарезолвился)
// чтобы он вернул ошибку, то все промисы с ошибками и возвращает массив ошибок

// Promise.any([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ]).then((data) => {
//     console.log(data.url)
// }).catch((err) => {
//     console.log("ERROR", err)
// })

// ALLSETTLED - всегда резолвится
// возвращает массив ответов наших промисов с статусами и тд
// если ошибка -> она попадает в наш массив
// если все ошибки -> массив ошибок
// в catch мы никогда не попадем

// Promise.allSettled([
//     fetch('https://google.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://duckduckgo.com/?query=js')
// ]).then((settledData) => {
//     console.log(settledData.url)
// }).catch((err) => {
//     console.log("ERROR", err)
// })


// -----------------------

//async/await - под капотом работает на генераторах
// с

// const asyncFn = async () => {
//     const googleData = await fetch('https://google.com/?query=js')
//     console.log(googleData)
//     const bingData = await fetch('https://bing.com/?query=js')
//     console.log(googleData)
//     const duckduckgoData = await fetch('https://duckduckgo.com/?query=js')
//     console.log(googleData)
// }


// try-catch
const foo = async () => {
    try {
        const googleData = await fetch('https://google.com/?query=js')
        const bingData = await fetch('https://bing.com/?query=js')
        const duckduckgoData = await fetch('https://duckduckgo.com/?query=js')
        // setAllData([googleData, bingData, duckduckgoData])
    } catch(err) {
        console.log("ERROR", err)
    }

}

foo()

const promise = foo()

promise
    .then((something) => {
        console.log(something)
    })
    .catch((err) => {
        console.log("ERROR", err)
    })




// новый функционал завезли
// const data1 = await fetch('https://google.com/?query=js')
// const data2 = await fetch('https://bing.com/?query=js')
// const data3 = await fetch('https://duckduckgo.com/?query=js')