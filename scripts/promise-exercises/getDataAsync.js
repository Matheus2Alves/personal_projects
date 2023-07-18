function getUserId(userId) {
    return new Promise((resolve, reject) => {
        const users = [
            {id: 1, name: 'Matheus'},
            {id: 2, name: 'Aline'},
            {id: 3, name: 'Gilliard'}
        ]
        const user = users.find((users) => users.id === userId)
        if(user) {
            resolve(user)
        } else {
            reject(new Error('User not found'))
        }
    })
}

async function getUserData(user) {
    try {
        const userData = await getUserId(user)
        console.log('you user: ' + userData.name    )
    } catch(err) {
        console.error(err)
    }
}

getUserData(3)