let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is ';
let permit: boolean = true;

// number, string, boolean
const result = number1 + number2;
if(permit){
    console.log(phrase + result)
}else{
    console.log('Not show result')
}

// Type inference  
function add(x = 5){
    let phrase = 'Result is ';

    phrase = 10;
    x = 2.8;
}

let result: number = add()

// Object
var person : {
    name: string,
    age: number
}

person = {
    name: 'Viet Hoàng',
    age: 23
}

//array tuple, any, enum
