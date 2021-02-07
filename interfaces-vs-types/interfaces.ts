// interfaces are geared towards defining the shapes of objects or classes!

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