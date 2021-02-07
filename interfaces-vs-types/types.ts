type Hungry = boolean;
type anotherGreeting = (name: string) => string;
const sayHello: anotherGreeting = (name) => (`Hello ${name}!!`);

// types cant extend other types unless we use a union or an intersection

type Human = {
    name: string;
    hungry: boolean;
} & { hasUkulele: boolean }

type Ukuleleist = { ukuleleist: boolean }


const Eugenia: Human = {
    hungry: false,
    name: 'Eugenia',
    hasUkulele: true

};

type Eugenia = Human | Ukuleleist;
