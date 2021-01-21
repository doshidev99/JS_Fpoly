const person = {
  firstName: "Albert",
  lastName: "Einstein",
  setLastName: function (_lastName) {
    this.lastName = _lastName;
  },
  setFirstName: function (_firstName) {
    this.firstName = _firstName;
  },
  getFullName() {
    return this.firstName + "-" + this.lastName;
  },
};

person.setLastName("Newton");
person.setFirstName("Issac");

console.log(person.getFullName());
