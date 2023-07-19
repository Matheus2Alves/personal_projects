document.addEventListener('DOMContentLoaded', () => {
    const btt = document.querySelector('button#btt')
    btt.addEventListener('click', () => {

        async function getImg() {
            try {
                const imgData = await fetch('dokOk.jpg')
                if(!imgData.ok) {
                    throw new Error('Network problem')
                } else {
                    const imgy = await imgData.blob()
                    const myImgUrl = URL.createObjectURL(imgy)
                    const myImg = document.querySelector('img#myImg')
                    myImg.src = myImgUrl
                    console.log('yeah')
                } 
            } catch(error) {
                console.error('sorry', error)
            }
        }

        getImg()
    })
})