import fetch from "node-fetch";

// fetch("https://duckduckgo.com/?query=js")
//   .then((data) => {
//     console.log(data.url);
//   })
//   .then((data) => {
//     return fetch("https://bing.com/?query=js");
//   })
//   .then((data) => {
//     console.log(data.url);
//     return fetch("https://google.com/?query=js");
//   })
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.error("ERROR", err);
//   });
// fetch("https://bing.com/?query=js").then((data) => {
//   console.log(data.url);
// });
// fetch("https://duckduckgo.com/?query=js").then((data) => {
//   console.log(data.url);
// });

// all || race || allsettled || any

// ALL
// const pr1 = fetch("https://duckduckgo.com/?query=js");
// const pr2 = fetch("https://bing.com/?query=js");
// const pr3 = fetch("https://goosdfgle.com/?query=js");

// Promise.all([pr3, pr1, pr2])
//   .then((bigData) => {
//     console.log(bigData[2].body);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// Promise.all([
//   fetch("https://duckduckgo.com/?query=js"),
//   fetch("https://bing.com/?query=js"),
//   fetch("https://goosdfgle.com/?query=js")
// ]).then((bigData) => {
//   console.log(bigData[2].body);
// })
// .catch((err) => {
//   console.log("ERROR", err);
// });

//RACE

// Promise.race([
//   fetch("https://duckduckgo4235.com/?query=js"),
//   fetch("https://bing345.com/?query=js"),
//   fetch("https://google435.com/?query=js"),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("error from settimeout");
//     }, 500);
//   }),
// ])
//   .then((data) => {
//     console.log("DATA", data.url);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// ANY

// Promise.any([
//   fetch("https://duckduckgo.com/?query=js"),
//   fetch("https://bing.com/?query=js"),
//   fetch("https://google.com/?query=js"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ALLSETTLED

// Promise.allSettled([
//   fetch("https://duckduckgo423.com/?query=js"),
//   fetch("https://bing342.com/?query=js"),
//   fetch("https://google324.com/?query=js"),
// ])
//   .then((settledData) => {
//     console.log(settledData);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// fetch("https://duckduckgo423.com/?query=js");
// fetch("https://bing342.com/?query=js");
// fetch("https://google324.com/?query=js");

// const foo = async () => {
//   await fetch("https://bing.com/?query=js");
// };

// foo();
// const data2 = await fetch("https://bing.com/?query=js");
// setData(data2)

// const asyncFn = async () => {
//   setData(await fetch("https://bing.com/?query=js"))
// }

// asyncFn()
// console.log(await fetch("https://bing.com/?query=js"));

// try {
//   const data2 = await fetch("https://bing.com/?query=js");
//   console.log(data2.url);
//   const data3 = await fetch("https://google.com/?query=js");
//   console.log(data3.url);
//   const data1 = await fetch("https://duckduckgo.com/?query=js");
//   console.log(data1.url);
// }

const foo = async () => {
  try {
    const googleData = await fetch("https://google.com/?query=js");
    const bingData = await fetch("https://bing.com/?query=js");
    const duckData = await fetch("https://duckduckgo.com/?query=js");
    setAllData([googleData, bingData, duckData]);
    console.log("all good");
  } catch (err) {
    console.log("ERROR", err);
  } finally {
    console.log("FINALLY");
  }
};
foo();
// const promise = foo();

// promise
//   .then((something) => {
//     console.log(something);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
