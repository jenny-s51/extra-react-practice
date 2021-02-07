// interfaces are geared towards defining the shapes of objects or classes!

// when you're not dealing with objects, probably use a type instead

interface Person{
    name: string;
    hungry: boolean;
}

const me: Person = {
    name: 'Jenny',
    hungry: false
}

class Jenny implements Person {
    name: string;
    hungry: boolean;
}

interface Greeting{
    (name: string): string,

}

const greetMe: Greeting = (name: string) => "hello!!!"