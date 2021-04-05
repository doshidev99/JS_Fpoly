enum Role {
    ADMIN = 1,
    READ_ONLY,
    AUTHOR
};

const persons: {
    name: string,
    age: number,
    hobbies: string[],
    role: number,
    roletuple: [number, string]
} = {
    name: 'Nguyen Viet Hoang',
    age: 23,
    hobbies: ['Play games, listen music, code'],
    role: Role.ADMIN, //Error
    roletuple: [2, 'Author']
}

persons.roletuple.push('admin')

// Literal type & custom type

type Combinable = number | string

function combine(input1: Combinable, input2 : number | string, resultConversion: 'as-number'|'as-string'){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = <number> input1 + <number> input2
    }else{
        result = input1.toString() + input2.toString()
    }

    return result
}

const combineNuber = combine('1','1',"as-number")

// Num & undefined

var a = null
console.log(a)
console.log(typeof a)

var b
console.log(b)
console.log(typeof b)

//Unknown & any

let useInput: unknown
let userName: any

useInput = 5
useInput = "typesctipt"

userName = useInput

userName = <string> useInput

if(typeof useInput === 'string'){
    userName = useInput
}

