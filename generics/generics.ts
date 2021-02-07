// generics


// using an arrow generic function will NOT work!! convert to function()

function removeItem<TypeOfItem>(
    arr: Array<TypeOfItem>,
    item: TypeOfItem
    ): Array<TypeOfItem> {
    const index = arr.findIndex(i => i === item);
    arr.splice(index, 1);
    console.log(arr)
    return arr;
}

removeItem<number>([1,2,3], 2)
removeItem(['1', '2', '3'], '2')

const myVar = 1;
console.log(myVar)