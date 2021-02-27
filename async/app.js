// sync code example
var otherFunc = function () {
    console.log('we are in another function');
    console.log('woohooooo');
};
console.log('start');
otherFunc();
console.log('end');
// async code example
console.log('start');
setTimeout(function () {
    console.log('we are in the timeout');
}, 5000);
console.log('end');
// async code example 2
console.log('start');
var loginUser = function (email, pw, callback) {
    setTimeout(function () {
        console.log('now we have the data');
        callback({ userEmail: email });
    }, 500);
};
var user = loginUser("polarbear@antarctica.gov", "iloveglaciers", function (userInfo) {
    // here we have access to the user
    console.log(userInfo);
    getUserVids(userInfo.userEmail, function (videos) {
        console.log(videos);
    });
});
var getUserVids = function (email, callback) {
    setTimeout(function () {
        callback(["video1", "video2", "video3"]);
    }, 500);
};
console.log('end');
