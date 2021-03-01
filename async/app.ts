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

// loginUser("god", "123456")
//   .then((user) => getUserVids((user as any).email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// what if we want to do something like this?

// sync - this is the nicest way to do it! we can do it with async/await (syntactical sugar). JS people were like "let's make this better" and then they did
const user = loginUser("ed sheeran", "PEMDAS");
const video = videoDetails((user as any).email);
console.log("end");

const youtube = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from youtube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  });
});

const facebook = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from facebook");
    resolve({ user: "name" });
  });
});

Promise.all([youtube, facebook]).then((result) => console.log(result));

// ASYNC AWAIT

loginUser("god", "123456")
  .then((user) => getUserVids((user as any).email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

// SYNC
const displayUser = async () => {
  try {
    const user = await loginUser("ed", "12345");
    const videos = await getUserVids((user as any).userEmail);
  } catch (err) {
    console.log("we could not get the videos");
  }
};

displayUser();
