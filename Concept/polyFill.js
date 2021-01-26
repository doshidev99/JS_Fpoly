// const emailKey = "email";
// const myInfo = {
//   name: "truong",
//   age: 20,
//   [emailKey]: "truong@gmail.com",
//   getName: function () {
//     console.log(myInfo.name);
//   },
// };

// console.log(myInfo.getName());

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.address = "vietnam";
// User.prototype.getAddress = function () {
//   console.log(this.address);
// };

// const us1 = new User("truong", 22);
// const us2 = new User("thoai", 21);

// console.log(us1.getAddress(), " - ", us2.getAddress());

// let date = 2;
// switch (date) {
//   case 2:
//     console.log("thu 2");
//     // break;
//   case 3:
//     console.log("thu 3");
//     // break;
//   case 4:
//     console.log("thu 4");
// }

// const myInfo = {
//   name: "truong",
//   age: 23,
// };

// console.log(Object.values(myInfo));

// const arr = [
//   { id: 1, name: "react", age: 3 },
//   { id: 2, name: "vue", age: 2 },
// ];

// for (el of arr) {
//   console.log(el);
// }

var x = 10;
function foo(a) {
  var b = 20;
debugger;
  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure
moar(15);
