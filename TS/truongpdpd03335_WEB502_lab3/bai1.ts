
let sum = () => {
    let x = 0
    let y = 0
    return x+y
}

let sum2 = (x:number = 5, y?: number) => {
    return x + y
}

let sum3 = (...array:number[]) => {
    return array.reduce((a, b)=>{
        return a+b
    })
}

// merging array with spread operator
const hobbies = ['sport', 'Cooking']
const activeHobbies = ['Hiking']
//activeHobbies.push(hobbies)
activeHobbies.push(hobbies[0],hobbies[1])
console.log(activeHobbies)


