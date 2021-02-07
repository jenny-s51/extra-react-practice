// generics
// using an arrow generic function will NOT work!! convert to function()
function removeItem(arr, item) {
    var index = arr.findIndex(function (i) { return i === item; });
    arr.splice(index, 1);
    console.log(arr);
    return arr;
}
removeItem([1, 2, 3], 2);
removeItem(['1', '2', '3'], '2');
var myVar = 1;
console.log(myVar);
