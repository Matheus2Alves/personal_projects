function getNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num > 0) {
                resolve(`the ${num} is postive`)
            } else {
                reject(`the ${num} is negative or zero`)
            }
        }, 3000)
    })
}

getNumber(1)
.then((numPositive) => {
    console.log(numPositive)
})
.catch((err) => {
    console.log(err)
})