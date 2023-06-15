// eventloop

// Example 1
//----------------------------------------------

// console.log('1');

// console.log('2');

// console.log('3');

//----------------------------------------------
// Example 2
//----------------------------------------------

// function a() {
//   console.log("a");
// }
// function b() {
//   console.log("b");
// }
// function c() {
//   console.log("c");
// }

// a();

// setTimeout(function timer() {
//   console.log("timeout");
// }, 2000);

// b();
// c();

//----------------------------------------------
// Example 3
//----------------------------------------------

// function a() {
//   console.log("a");
// }
// function b() {
//   console.log("b");
// }
// function c() {
//   console.log("c");
// }

// a();

// new Promise(function (res, rej) {
//   console.log("create promise");
//   setTimeout(function timer() {
//     res(console.log("timeout"));
//   }, 5000);
// });

// b();
// c();

//----------------------------------------------
// Example 4
//----------------------------------------------

// setTimeout(function timer() {
//   console.log('timeout2');
// }, 1000);

// setTimeout(function timer() {
//   console.log('timeout3');
// }, 1000);

// setTimeout(function timer() {
//   console.log('timeout3');
// }, 1000);

//----------------------------------------------
// Example 5
//----------------------------------------------

// console.log("start");

// setTimeout(function timer() {
//   console.log("timeout1");
// }, 5000);

// setTimeout(function timer() {
//   console.log("timeout2");
// }, 3000);

// setTimeout(function timer() {
//   console.log("timeout3");
// }, 1000);

// setTimeout(function timer() {
//   console.log("timeout4");
// }, 1000);

// console.log("end");

//----------------------------------------------
// Example 6
//----------------------------------------------

// setTimeout(() => {
//   console.log(1);
// });

// new Promise(function (res, rej) {
//   console.log(2);
//   res();
// }).then(() => {
//   console.log(3);
// });

// console.log(4);

//----------------------------------------------
// Example 7
//----------------------------------------------

// setTimeout(() => {
//   console.log("s1");
// }, 0);
// setTimeout(() => {
//   console.log("s2");
// }, 1000);

// new Promise(function (res, rej) {
//   console.log("p1");
//   res();
//   console.log("p2");
// }).then(() => {
//   console.log("p3");
// });

// console.log("w1");

// async function test1() {
//   console.log("a1");
//   await test2();
//   console.log("a2");
// }
// async function test2() {
//   console.log("a3");
// }

// test1(); // p1, p2, w1, a1, a3, p3, a2, s1, s2

// console.log('w2');

//-----------------------------------

// const myPromise = (delay) => {
//   return new Promise((res, rej) => {
//     setTimeout(res, delay);
//   });
// };

// setTimeout(() => {
//   console.log('in setTimeout1');
// }, 1000);

// myPromise(1000).then(() => console.log('in Promise 1'));

// setTimeout(() => {
//   console.log('in setTimeout2');
// }, 100);

// myPromise(2000).then(() => console.log('in Promise 2'));

// --------------------------------------

console.log(1);

setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    });
});

new Promise((res, rej) => {
    console.log(4);
    res(5);
}).then((data) => {
    console.log(data);
    Promise.resolve()
        .then(() => {
            console.log(6);
        })
        .then(() => {
            console.log(7);

            setTimeout(() => {
                console.log(8);
            }, 0);
        });
});

setTimeout(() => {
    console.log(9);
});

console.log(10);
// 1, 2, 4, 5, 10, 8, 9, 3, 7, 6
// 1, 4, 10, 5, 6, 7, 2, 3, 8, 9
