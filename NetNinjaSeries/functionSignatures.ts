
// example 1
let greet2: (a: string, b:string) => void;

greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}


greet2("Jenny", "howdy");

// example 2
let calc: (a: number, b: number, c: string ) => number;
calc = (num1: number, num2: number, action: string) => {
    if (action == 'add') {
        console.log(num1+num2)
        return num1 + num2
    }
    else {
        console.log(num2-num1)
        return num2 - num1
    }
}

calc(4, 5, 'add')

let vampireDeets: (obj: {name: string, age: number}) => void;

vampireDeets = (vampire: {name: string, age: number}) => {
    console.log(`${vampire.name} is ${vampire.age} years young!!`)
}


vampireDeets({"name" : "Vladislav", age: 234})
vampireDeets({"name" : "Petyr", age: 139})
vampireDeets({"name" : "Viago", age: 778})
vampireDeets({"name" : "Kyle the vampire", age: 8003})

