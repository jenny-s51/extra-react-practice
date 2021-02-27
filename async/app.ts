// sync code example

const otherFunc = () => {
    console.log('we are in another function');
    console.log('woohooooo')
}

console.log('start');

otherFunc();

console.log('end')

// async code example

console.log('start');

setTimeout(() => {
    console.log('we are in the timeout')
}, 5000)

console.log('end')

// async code example 2

console.log('start');

const loginUser = (email: string, pw: string, callback: (user) => void) => {
    setTimeout(() => {
        console.log('now we have the data')
        callback({ userEmail: email })
    }, 500)
}

const user = loginUser("polarbear@antarctica.gov", "iloveglaciers", userInfo => {
    // here we have access to the user
    console.log(userInfo)
    getUserVids(userInfo.userEmail, videos => {
        console.log(videos);
    })
})

const getUserVids = (email: string, callback: (videos) => void) => {
    setTimeout(() => {
        callback(["video1", "video2", "video3"])
    }, 500)
}

console.log('end')