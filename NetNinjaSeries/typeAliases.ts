type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

// we don't have to rewrite anything now
const greet1 = (user: ObjWithName) => {
    console.log(`${user.name} says hello!`)
}