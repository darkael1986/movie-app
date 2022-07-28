

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY
    },
});

//funcion peliculas en tendencia

//  async function getTrendingMoviesPreviewe (){
//      const res = await fetch ('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);

//      const data = await res.json();
//      const movies = data.results;
//      console.log(movies);

//      movies.forEach(movie => {
//          const movieTrendingSection = document.querySelector('#trendingPreview .trendingPreview-movieList');
//          const movieContainer = document.createElement('div');
//          movieContainer.classList.add('movie-container');

//          const movieImg = document.createElement('img');
//          movieImg.classList.add('movie-img');
//          movieImg.setAttribute('alt', movie.title);
//          movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

//          movieContainer.appendChild(movieImg);
//          movieTrendingSection.appendChild(movieContainer);
//      });
//  }


//migracion a axios
async function getTrendingMoviesPreviewe (){
    const { data } = await api ('trending/movie/day');

    const movies = data.results;
    console.log(movies);

    movies.forEach(movie => {
        const movieTrendingSection = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

        movieContainer.appendChild(movieImg);
        movieTrendingSection.appendChild(movieContainer);
    });
}

//funcion listar categorias peliculas

// async function getCategoriesMoviesPreview(){
//     const res = await fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);

//     const data = await res.json();
//     const categories = data.genres;
    
//     categories.forEach(category => {
//         const categorySection = document.querySelector('#categoriesPreview .categoriesPreview-list');
//         const categoryContainer = document.createElement('div');
//         categoryContainer.classList.add('category-container');

//         const categoryTitle = document.createElement('h3');
//         categoryTitle.classList.add('category-title');
//         categoryTitle.setAttribute('id', 'id' + category.id);
//         const categoryTitleText = document.createTextNode(category.name);

//         categoryTitle.appendChild(categoryTitleText);
//         categoryContainer.appendChild(categoryTitle);
//         categorySection.appendChild(categoryContainer);
//     });
// }


//migracion axios
async function getCategoriesMoviesPreview(){
    const { data } = await api ('genre/movie/list');

    const categories = data.genres;
    
    categories.forEach(category => {
        const categorySection = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categorySection.appendChild(categoryContainer);
    });
}


