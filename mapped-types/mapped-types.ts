// a mapped type lets us create a new type by iterating over a list of properties!

type Properties = "propA" | "propB";

// need to add a generic type constraint to make sure to satisfy every property in this union
type MyMappedType<T> = {
//keyof lets us get the properties as a list
   [P in keyof T]: T[P];
};

// we can use mapped types to create a new type from an existing type

// let's use generics
type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

// need to make sure these properties exist in type T
type Pick1<T, Properties extends keyof T> = {
    // now let's iterate over the properties we want to pick
    [P in Properties]: T[P];

};

type MyNewType2 = Pick1<{a: 'a'; b: 'b'}, 'a' | 'b'>;

type Record1<K extends keyof any, T> = {

    [P in K]: T;

};

const someRecord: Record1<'A' | 'B', number> = {A: 1, B: 2}

interface Record2 {
    [key: string | number: number]
}