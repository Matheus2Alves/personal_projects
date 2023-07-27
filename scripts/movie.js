const displayMovies = (movie) => {
    const movieContainer = document.querySelector('section.movies-container')
    const movieBox = document.createElement('article')
    movieBox.classList.add('movies')
    movieContainer.appendChild(movieBox)
    const moviePoster = document.createElement('div')
    moviePoster.classList.add('moviePoster')
    const movieImg = document.createElement('img')
    movieImg.classList.add('imgMoviePoster')
    movieImg.src = movie.img
    moviePoster.appendChild(movieImg)
    //add content inside moviePoster
    movieBox.appendChild(moviePoster)
    const movieInfo = document.createElement('div')
    movieInfo.classList.add('infoMovie')
    const movieTitle = document.createElement('h2')
    movieTitle.textContent = movie.title
    movieInfo.appendChild(movieTitle)

    //add content inside movieInfo
    movieBox.appendChild(movieInfo)
    const movieStats = document.createElement('div')
    movieStats.classList.add('infostats')
    const rating = document.createElement('p')
    const sRating = movie.rating
    const star = document.createElement('img')
    star.src = '../imagens/star.svg'
    rating.appendChild(star)
    rating.appendChild(document.createTextNode(sRating))
    movieStats.appendChild(rating)
    const favS = document.createElement('p') 
    const favorite = movie.isFavorited ? 'disfavored' : 'favorite'
    const favImg = document.createElement('img')
    if(movie.isFavorited) {
        favImg.src = '../imagens/fav.svg'
    } else {
        favImg.src = '../imagens/favnull.svg'
    }
    favS.appendChild(favImg)
    favS.appendChild(document.createTextNode(favorite))
    movieStats.appendChild(favS)
    //add content inside movieStats
    movieInfo.appendChild(movieStats)
    const movieDesc = document.createElement('div')
    movieDesc.classList.add('desc')
    const descMovie = document.createElement('p')
    const description = movie.description
    descMovie.textContent = description
    movieDesc.appendChild(descMovie)
    //add content inside movieDesc
    movieBox.appendChild(movieDesc) 
}



const movies= [
    {
        title: 'Oppenheimer',
        rating: 10,
        img: 'https://vertentesdocinema.com/wp-content/uploads/2023/07/oppenheimer-novo-poster.jpg',
        year: 2023,
        description: 'lorem lorem loerm afA MBHFABN AF ngsgs dg anfa gfksagjed skgksdgj ajfaslfjaslj alfj',
        isFavorited: true
        
    },
    {
        title: 'Avenger EndGame',
        rating: 8.3,
        img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        year: 2019,
        description: 'lorem lorem loerm afA MBHFABN AF ngsgs dg anfa gfksagjed skgksdgj ajfaslfjaslj alfj',
        isFavorited: false
        
    },
    {
        title: 'the imitation game',
        rating: 10.0,
        img: 'https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_FMjpg_UX1000_.jpg',
        year: 2014,
        description: 'lorem lorem loerm afA MBHFABN AF ngsgs dg anfa gfksagjed skgksdgj ajfaslfjaslj alfj',
        isFavorited: true
        
    }
]

movies.forEach(movie => displayMovies(movie))

/*img: '',*/