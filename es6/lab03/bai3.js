function Entity(name, delay) {
  this.name = name;
  this.delay = delay;
}

Entity.prototype.greet =  () =>  {
  setTimeout(() => {
    console.log("Tôi tên là:", this.name);
  }, this.delay);
};

const java = new Entity("java", 5000);
const cpp = new Entity("C++", 30);

java.greet();
cpp.greet();