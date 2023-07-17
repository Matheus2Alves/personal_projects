function sumArray(num) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(num)) {
            let sum = 0
            for(let i = 0; i < num.length; i++) {
                sum += num[i]
            }
            resolve(sum)
        } else {
            reject('isnt an array')
        }
    })
}

sumArray(2)
.then((result) => {
    console.log(result)
}) 
.catch((err) => {
    console.log(err)
})