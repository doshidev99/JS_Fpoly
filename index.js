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

const obj1 = {
  value: "hi",
  print: function () {
    console.log(this.value);
  },
};

const obj2 = { value: 17 };

obj1.print.call(obj2);
