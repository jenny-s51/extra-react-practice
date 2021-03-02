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
