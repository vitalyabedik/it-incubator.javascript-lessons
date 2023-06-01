//promise

// const fetch = (url, callback) => {
//   callback()
// }

// fetch("https://shop/autors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fetch("https://shop/autors/65", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fetch("https://shop/autors/65/books", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             fetch("https://shop/autors/65/books/23", (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 fetch("https://shop/autors/65/books/23/356", (err, data) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// fetch("https://shop/autors")
//   .then((data) => {
//     return fetch("https://shop/autors/65");
//   })
//   .then((data) => {
//     return fetch("https://shop/autors/65/books");
//   })
//   .then((data) => {
//     return fetch("https://shop/autors/65/books/23");
//   })
//   .then((data) => {
//     return fetch("https://shop/autors/65/books/23/356");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://shop/autors")
//   .then(() => {

//   })
//   .catch(() => {

//   })
// pending || fulfilled || rejected

// const server = {
//   getData(url) {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res(console.log('Some data'))
//         // rej('something went wrong')
//       })
//     });
//   },
// };

// const promise = server.getData();

// console.log(promise);

// class MyPromise {
//   constructor(callback){
//     this.callback = callback
//   }
//   resolve(data) {
//     return {
//       PromiseState: fullfield,
//       PromiseResult: data
//     }
//   }
//   reject(err) {
//     return {
//       PromiseState: fullfield,
//       PromiseResult: err
//     }
//   }
//   callback(resolve, reject)
// }

// const server = {
//   getData(url) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Some data");
//         // reject("something went wrong");
//       }, 1000);
//     });
//   },
// };

server
    .getData()
    .then((data) => {
        console.log("then1");
    })
    .then((data) => {
        console.log("then2");
        throw new Error();
        return 10;
    })
    .finally((data) => {
        console.log("finally");
        console.log(data);
    })
    .then((data) => {
        console.log("then3");
        console.log(data);
    })
    // .catch((err) => {
    //   console.log("catch1");
    //   // console.log(a);
    //   throw new Error();
    // })
    .then(
        (data) => {
            console.log("then4");
        },
        () => {
            console.log("super catc2");
        }
    )
    .catch((err) => {
        console.log("catc2");
    })
    .catch((err) => {
        console.log("catc3");
    });

// .then((data) => {
//   console.log("then2");
// })
// .then((data) => {
//   console.log("then3");
// });

// // promise.catch((err) => {
// //   console.log(err);
// // });

// // promise.finally(() => {
// //   console.log("finally");
// // });

// Promise.reject("reject1")
//   .catch((t) => t + "catch1")
//   .catch((t) => t + "catch2")
//   .then((t) => t + "then1")
//   .finally((t) => t + "finally")
//   .then((t) => console.log(t));
