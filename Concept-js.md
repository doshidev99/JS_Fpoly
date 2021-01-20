# Concept in js

## 1. Value vs Reference Variable

- when new object-variable set as equal to ex-object after use reference key and set as equal new value -> value of initial object not mutates the.

- Js has 5 data types: Boolean, null, undefiend, string and number -> ** Primitive types**
- When declaring 1 variable = 1 ex-variable created earlier, there is a reference to 1 memory of the computer

## 2. Closures

    - A closure gives you access to an outer function’s scope from an inner function. **In JavaScript**, closures are created every time a function is created, at function creation time.

```
function numberGenerator() {
// Local free variable that ends up within the closure
let num = 1;
function checkNumber() {
	// checkNumber is the inner function, a closure
	console.log(num);
}
num++;
return checkNumber;
}

var number = numberGenerator();
number(); // 2
```

- Static Scope and Dynamic scope :
  - Static scope: get value when function created (create foo )
  - Dynamic scope: the variable defined by time (bar() with var x = 2)

```
var x = 10;
function foo() {
var y = x + 5;
return y;
}

function bar() {
var x = 2;
return foo();
}

function main() {
foo(); // Static scope: 15; Dynamic scope: 15
bar(); // Static scope: 15; Dynamic scope: 7
return 0;
}

```

# Note:

    ! The variable after executing will be clean up out stack

## 3. Destructuring

## 4. Spread Syntax

## 5. Rest Syntax

## 6. Array Methods

## 7. Generators

## 8. Identity Operator (===) vs. Equality Operator (==)

## 9. Object Comparison

    - 2 object has value is equal doesn't equal because there is no reference to one memory

## 10. Callback Functions

## 11. New

    - When use prototype method 'll sharing

## 12. Promises

    - When use Promise.all if any element in array reject -> promise reject ##

## 13. Async - await

## 14. ES6

### Compare || and ??

```
let anonystick = {
profile: {
	website: "anonystick.com",
	type: "blog javascript",
	age: 0,
	release: "",
},
};

console.log(anonystick.profile.age || 18); // 18
console.log(anonystick.profile.age ?? 18); //0
```

### Dynamic imports

```
let module = await import('/modules/my-module.js');

```
