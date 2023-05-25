// лексическое окружение, замыкание, рекурсия

/*
Лексическое окружение - объект
 */

// {a:5} global Lexic Env
// {foo:Function, a:undefined}
// const a = 5

// --------------------------------------------------
// foo()  -> ok
// bar()  -> ошибка
// baz()  -> ошибка


// var a = '1'   // {foo:Function, a:1}
// const b = '2' // {foo:Function, a:1, b:2}
// let c = '3'   // {foo:Function, a:1, b:2, c:3}
//
// function foo () {
//     console.log('Hello foo')
// }
//
// const bar = function() {
//     console.log('Hello foo')
// }
//
//
// const baz = () => {
//     console.log('Hello foo')
// }

// --------------------------------------------------
// {}
// let car = 'bmw' // {car: 'bmw'}
//
// const startEngine = () => {     // {car: 'bmw', startEngine: Function}
//     console.log(`Start ${car}`)
// }
//
// car = 'audi'   // {car: 'audi', startEngine: Function}
//
// startEngine()  // {car: 'audi', startEngine: Function}

// --------------------
// globalLE {}
// let car = 'bmw' // {car: 'bmw'}
//
// const startEngine = () => {     //globalLE {car: 'bmw', startEngine: Function}
// [[Environment]] --> globalLE
// startEngine {} -> в момент запуска функции
//     console.log(`Start ${car}`)
// }
//
// startEngine()  // {car: 'bmw', startEngine: Function}
// car = 'audi'


// --------------------
// globalLE {Environment --> null}
// let car = 'bmw' // {car: 'bmw'}
//
// const startEngine = () => {     //globalLE {car: 'bmw', startEngine: Function}
// [[Environment]] --> globalLE
// startEngine {} -> в момент запуска функции
//     console.log(`Start ${car}`)
// }
//
// startEngine()  // {car: 'bmw', startEngine: Function}
// car = 'audi'

// -----------------------------

// let car = 'bmw' // {car: 'bmw'}
//
// const startEngine = () => {     //globalLE {car: 'bmw', startEngine: Function}
// // [[Environment]] --> globalLE
// // startEngine {} -> в момент запуска функции
//     console.log(`Start ${car}`)
// }



// --------------------------------------------------
/*
Лексическое окружение - объект в который записывабтся все переменные и функции, доступные ему на своем уровне

лексическое окружение:
- глобальное
- функциональное
- блочное

!!! Объект не создает лексическое окружение !!!
 */


// Замыкание - способность функции запомнить в каком лексическом окружении, она была создана

//globalLE
// const counter = () => {  //globalLE {counter: Function}
//     // environment --> globalLE (создается ссылка на внешнее лексическое окружение) - в момент инициализации функции
//     // counter1LE -> создал в момент вызова count1
//     // counter2LE -> создал в момент вызова count1
//     let count = 0  // counterLE {count: 0} -> counterLE {count: 1} -> counterLE {count: 2} -> counterLE {count: 3}
//     return () => {
//         // environment --> counter1LE -> после отработки функции удаляется
//         // environment --> counte2rLE
//         console.log(++count)
//     }
// }
//
// const count1 = counter()  //globalLE {counter: Function, count1: function}
// const count2 = counter()  //globalLE {counter: Function, count2: function}
//
// count1()  // 1
// count1()  // 2
// count1()  // 3
//
// count2()  // 1
// count2()  // 2
// count2()  // 3



// рекурсия
/*
основана на стеке
 */
// 2(4) -> 2*2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2
// 2(1) -> 2


const pow = (x, n) => {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n-1)
    }
}

console.log(pow(2, 4))