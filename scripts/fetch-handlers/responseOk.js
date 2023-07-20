async function getData() {
    const response = await fetch('https://api.github.com/users/omariosouto')
    try{    
        if(response.ok) {
            console.log('tudo ok')
            const Data = await response.json()
            console.log(Data)
        } else {
            throw new Error('network problem')
        }
    } catch(erro) {
        console.error('my bad' , erro)
    }
}

getData()