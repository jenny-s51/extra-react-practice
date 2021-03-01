// sync code example
var otherFunc = function () {
    console.log("we are in another function");
    console.log("woohooooo");
};
console.log("start");
otherFunc();
console.log("end");
// async code example
console.log("start");
setTimeout(function () {
    console.log("we are in the timeout");
}, 5000);
console.log("end");
// async code example 2
console.log("start");
var loginUser = function (email, pw) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("now we have the data");
            resolve({ userEmail: email });
        }, 500);
    });
};
var getUserVids = function (email) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(["video1", "video2", "video3"]);
        }, 500);
    });
};
var videoDetails = function (video) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Bill and Ted's Excellent Adventure");
        }, 500);
    });
};
// const user = loginUser(
//     "polarbear@antarctica.gov",
//     "iloveglaciers",
//     (userInfo) => {
//       // here we have access to the user
//       console.log(userInfo);
//       getUserVids(userInfo.userEmail, (videos) => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title);
//         });
//       });
//     }
//   );
loginUser('god', '123456').then(function (user) { return getUserVids(user.email); }).then(function (videos) { return videoDetails(videos[0]); }).then(function (detail) { return console.log(detail); });
console.log("end");
