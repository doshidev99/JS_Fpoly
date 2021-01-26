// // function Mouse(name) {
// //   this.name = name;
// // }

// // Mouse.prototype.greeting = function () {
// //   console.log(this.name);
// // };

// // const mouse1 = new Mouse("mouse1");
// // const mouse2 = new Mouse("mouse2");

// // // console.log(mouse1);
// // console.log(mouse2.greeting.bind({ name: "abc" })());

// const getLog = (name) =>
//   new Promise((res, rej) => {
//     if (name === "a" || name === "b") {
//       return res(name);
//     } else {
//       return rej("error!");
//     }
//   });

// // getLog("c").then((data) => console.log(data));

// // Promise.all([getLog("a"), getLog("c"), getLog("b")])
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// async function run() {
//   let vl1 = getLog("a");
//   let vl2 = getLog("c");
//   let vl3 = getLog("b");
//   return [vl1, vl2, vl3];
// }

// run().then((value) => console.log(value));

// const obj = {
//   arr: [],
// };

// obj.arr.push(17);

// console.log(obj.arr);

// console.log([17] === [17]);

// const a = [1, 2, 3, 4];
// const b = [1, 2, 3, 4];

// console.log(a[0] == b[0]);

// const obj1 = {
//   value: "hi",
//   print: function () {
//     console.log(this.value);
//   },
// };

// const obj2 = { value: 17 };

// obj1.print.call(obj2);

// const arr = [4, 2, 3, 4, 2, 32, 1, 23, 1, 2, 2, 3];

// const result = arr.sort((a, b) => b - a);

// console.log(result);

// const arrString = ["a", "c", "b", "a", "t", "g", "h"];

// const resultString = arrString.sort((a, b) => (a > b ? 1 : -1));

// console.log(resultString);

// let anonystick = {
//   profile: {
//     website: "anonystick.com",
//     type: "blog javascript",
//     age: 0,
//     release: "",
//   },
// };

// console.log(anonystick.profile.age || 18); // 18
// console.log(anonystick.profile.age ?? 18); //0

// let a = ["1", "2", "3"].map(parseInt);

// console.log(a);

// console.log([typeof NaN, null instanceof Object])

// const wait = (value) =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(value), 3000);
//   });

// const waitReject = (value) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject(value), 3000);
//   });

// const fetchFoo = () => wait("foo");
// const fetchBar = () => wait("bar");
// const fetchBaz = () => wait("baz");

// const fetchDataSlowly = async (time) => {
//   // Bad. Requests run in serial waterfall.
//   const foo = await fetchFoo();
//   const bar = await fetchBar();
//   const baz = await fetchBaz();
//   return { foo, bar, baz, time: Date.now() - time };
// };

// console.log(
//   fetchDataSlowly(Date.now()).then(({ foo, bar, baz, time }) =>
//     console.log(foo, bar, baz, time)
//   )
// );

// const fetchDataQuickly = async (time) => {
//   // Good. Fetches run in parallel.
//   const [foo, bar, baz] = await Promise.all([
//     fetchFoo(),
//     fetchBar(),
//     fetchBaz(),
//   ]);
//   debugger;

//   return { foo, bar, baz, time: Date.now() - time };
// };

// console.log(fetchDataQuickly(Date.now()));
// // fetchDataQuickly(Date.now()).then(({ foo, bar, baz, time }) => {
// //   console.log("fetched quickly:", foo, bar, baz, time);
// // });

// const fetchDataQuickly2 = async (time) => {
//   const foo = await fetchFoo();
//   const bar = await fetchBar();
//   const baz = await fetchBaz();
//   return { foo, bar, baz, time: Date.now() - time };
// };
// fetchDataQuickly2(Date.now()).then(({ foo, bar, baz, time }) => {
//   console.log("fetched quickly:", foo, bar, baz, time);
// });

// [[2], [4], [6], [8]].flatMap((val) => val / 2); // [ 1, 2, 3, 4 ]

// function sleep(second) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("request done! " + Math.random());
//     }, second);
//   });
// }

// async function nhauBinhDan() {
//   await sleep(1000); // gọi món
//   await sleep(1000); // nhậu
//   await sleep(1000); // Tính tiền
//   console.log("Nhậu anh em ơi....");
// }

// async function correctDemo() {
//   let p1 = sleep(1000); // gọi món
//   let p2 = sleep(1000); // nhậu
//   let p3 = sleep(1000); // Tính tiền
//   await Promise.all([p1, p2, p3]);
//   console.log("Nhậu anh em ơi....");
// }
// // nhauBinhDan();

// correctDemo();

// const result = Promise.all([
//   Promise.reject(1).then(
//     (res) => ({ status: "ok", res }),
//     (err) => ({ status: "not ok", err })
//   ),
//   Promise.resolve(2).then(
//     (res) => ({ status: "ok", res }),
//     (err) => ({ status: "not ok", err })
//   ),
//   Promise.resolve(3).then(
//     (res) => ({ status: "ok", res }),
//     (err) => ({ status: "not ok", err })
//   ),
// ]).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// var p = new Promise((resolve, reject) => {
//   reject(Error("The Fails!"));
// });

// console.log(p);

// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// let a = 3;

// let b = 2;

// a = 5;

// console.log(b);

// getName();

// function getName() {
//   console.log("truong");
// }

// express function

// var getName = function () {
//   console.log("truong");
// };

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   title = function () {
//     console.log('xyz')
//   }
// }

// User.prototype.title = function () {
//   console.log('abc')
// }

// const depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// // -> output flat

// const flatArray = depthArray.reduce((pre, current) => {
//   return pre.concat(current);
// }, []);

// console.log(flatArray);

// const course = ["js", "php"];
// course.length = 10;

// for (let index in course) {
//   console.log(course[index]);
// }

// function giaithua(nb) {
//   console.log(nb);
//   if (nb > 0) {
//     return nb * giaithua(nb - 1);
//   }
//   return 1;
// }

// console.log(giaithua(6));


const getResult = () => {
  let a;
  let b;
  let c;
 return new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('step1');
        a = 1;
        resolve();
      }, 3000)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('step2');
        b = 3;
        resolve();
      }, 4000)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('step3');
        c = 10;
        resolve();
      }, 3000)
    })
  }).then(() => {
    console.log(a, b, c);
  })
}

getResult();
