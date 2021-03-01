// sync code example

const otherFunc = () => {
  console.log("we are in another function");
  console.log("woohooooo");
};

console.log("start");

otherFunc();

console.log("end");

// async code example

console.log("start");

setTimeout(() => {
  console.log("we are in the timeout");
}, 5000);

console.log("end");

// async code example 2

console.log("start");

const loginUser = (email: string, pw: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      resolve({ userEmail: email });
    }, 500);
  });
};

const getUserVids = (email: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 500);
  });
};

const videoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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

loginUser('god', '123456').then(user => getUserVids((user as any).email)).then(videos => videoDetails(videos[0])).then(detail  => console.log(detail))

console.log("end");
