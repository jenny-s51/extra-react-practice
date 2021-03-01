// sync code example
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
// loginUser("god", "123456")
//   .then((user) => getUserVids((user as any).email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));
// what if we want to do something like this?
// sync - this is the nicest way to do it! we can do it with async/await (syntactical sugar). JS people were like "let's make this better" and then they did
var user = loginUser("ed sheeran", "PEMDAS");
var video = videoDetails(user.email);
console.log("end");
var youtube = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("getting stuff from youtube");
        resolve({ videos: [1, 2, 3, 4, 5] });
    });
});
var facebook = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("getting stuff from facebook");
        resolve({ user: "name" });
    });
});
Promise.all([youtube, facebook]).then(function (result) { return console.log(result); });
// ASYNC AWAIT
loginUser("god", "123456")
    .then(function (user) { return getUserVids(user.email); })
    .then(function (videos) { return videoDetails(videos[0]); })
    .then(function (detail) { return console.log(detail); });
// SYNC
var displayUser = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const user = await loginUser("ed", "12345");
            // const videos = await getUserVids((user as any).userEmail);
        }
        catch (err) {
            console.log("we could not get the videos");
        }
        return [2 /*return*/];
    });
}); };
displayUser();
