// лексическое окружение, замыкание, рекурсия
//{ a: 5 } globalLE
// {foo: Function, a: undefined}
//  const car = 'bmw'

//  const startEngine = () => {
//   console.log(`Start ${car}`)
//  }

//  startEngine()

// foo()

// console.log(c)

// var a = '1'// {foo: Function, a: 1}
// const b = '2' //{foo: Function, a: 1, b: 2 }
// let c = '3'//{foo: Function, a: 1, b: 2, c:3}

// function foo () {
//   console.log('Hello foo')
// }

// const bar = function() { // {foo: Function, bar: Function,  a: 1, b: 2, c:3}
//   console.log('Hello bar')
// }

// const baz = () => {
//   console.log('Hello baz') // // {foo: Function, bar: Function, baz,  a: 1, b: 2, c:3}
// }

// bar()
// baz()
// {}

//globalLE {Environment --> null}

// let car = 'bmw' // {car: 'bmw'}

// const startEngine = () => { //globalLE {car: 'bmw', startEngine: Function}
//  // Environment --> globalLE
//  // startEngineLE {foo: function}
//   // const car = 'toyota' // startEngineLE {car: toyota}
//   function foo() { // startEngineLE { foo: Function}
//     // Environment --> startEngineLE
//     // fooLE {}
//     console.log(`Start ${car}`)
//   }
  
// }

// startEngine()// {car: 'audi', startEngine: Function}
// // car = 'audi'// {car: 'audi', startEngine: Function}
// foo()//globalLE {car: 'bmw', startEngine: Function}

//globalLE {}


// const counter = () => { //globalLE {counter: function, count: 6 }
//   //environment --> globalLE
//   //counter1LE {}
//   //counter2LE {}
  
// let count = 0 
//   const a = () => {
//     //environment --> counter1LE
//     //environment --> counter2LE
//     //aLE
//     const b = () => {
//       //environment --> aLE
//     console.log(++count)
//     }
//   }
//   a()
// }
// const count1 = counter()//globalLE {counter: function, count1: function}
// const count2 = counter()//globalLE {counter: function,count1: function, count2: function}

// count1()
// count1() 
// count1() 

// count2() 
// count2() 
// count2() 

// const thunkCreator = (userId) => {
//   const thunk = (dispatch, getstate) => {
//     console.log(userId)
//   }
//   return thunk
//  }
 
 
//  const thunk1 = thunkCreator(1)
//  const thunk2 = thunkCreator(2)
//  thunk1()
//  thunk2()

// 2(4) -> 2 * 2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2
// 2(1) -> 2
let y = 0
const pow = (x, n) => {
  
  if (n === y) {
    return x;
  } else {
    return x * pow(x, y + 1);
  }
 };
  
 console.log(pow(2, 3));

// let count = 0

// const foo = () => {
//   console.log(count++)
//   foo()
// }

// foo()