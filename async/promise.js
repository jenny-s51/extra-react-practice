// what is a promise? an object that gives us back an result of a successful async operation or a failed async operation
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('got the user');
        // resolve({user: "ed"})
        reject(new Error('user not logged in !!!'));
    }, 2000);
});
promise.then(function (user) {
    console.log(user);
})["catch"](function (err) { return console.log(err); });
