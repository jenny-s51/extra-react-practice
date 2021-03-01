// what is a promise? an object that gives us back an result of a successful async operation or a failed async operation

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    // resolve({user: "ed"})
    reject(new Error("user not logged in !!!"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err));
