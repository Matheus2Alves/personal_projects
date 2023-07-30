async function getPopularMovies() {
    const api_key = 'c63a77dd8778f83eb80305962f093ce5'
    const base_url = 'https://api.themoviedb.org/3/'
    const endPoint = 'movie/popular'
    const url = `${base_url}${endPoint}?api_key=${api_key}`
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('network response was not ok')
        } 
        const data = await response.json()
        return data
    } catch (error){
        console.error('error fatching data', error)
    }
}

const processedData = getPopularMovies()
export default processedData
