// example 1
var greet2;
greet2 = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet2("Jenny", "howdy");
// example 2
var calc;
calc = function (num1, num2, action) {
    if (action == 'add') {
        console.log(num1 + num2);
        return num1 + num2;
    }
    else {
        console.log(num2 - num1);
        return num2 - num1;
    }
};
calc(4, 5, 'add');
var vampireDeets;
vampireDeets = function (vampire) {
    console.log(vampire.name + " is " + vampire.age + " years young!!");
};
vampireDeets({ "name": "Vladislav", age: 234 });
vampireDeets({ "name": "Petyr", age: 139 });
vampireDeets({ "name": "Viago", age: 778 });
vampireDeets({ "name": "Kyle the vampire", age: 8003 });
