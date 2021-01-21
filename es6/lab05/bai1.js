// This
// Khi ở trong một function là con trỏ và là 1 property của function đó

// example

const person = {
  name: "truong",
  age: 22,
  showName() {
    console.log(`${this.name} - ${this.age}`);
    return this;
  },
};

// this hiện tại ở đây là person gồm cấc property là name, age và một method là showName
// { name: 'truong', age: 22, showName: [Function: showName] }

console.log(person.showName());
