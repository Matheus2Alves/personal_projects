function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(userId % 2 === 0) {
            resolve({id: userId, name: 'matheus', age: 16})
           } else {
            reject(`user ${userId} not found`)
           }     
        }, 1000)
    })
}

getUserData(3)
.then((userData) => {
    console.log(userData)
})
.catch((err) => {
    console.log(err)
})