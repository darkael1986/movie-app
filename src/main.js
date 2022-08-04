

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY
    },

});


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


//utils



function showMovies(movies, container){
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });

}

function creteCategories(categories, container){
    container.innerHTML = '';

    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        //modificando la ruta al dar click en categorias
        categoryTitle.addEventListener('click', ()=>{
            location.hash = `#category=${category.id}-${category.name}`;
        });
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}


//migracion a axios
async function getTrendingMoviesPreviewe (){
    const { data } = await api ('trending/movie/day');

    const movies = data.results;
    console.log(movies);
    trendingMoviesPreviewList.innerHTML = "";

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}

async function getCategoriesMoviesPreview(){
    const { data } = await api ('genre/movie/list');

    const categories = data.genres;

    creteCategories(categories, categorySection);

    //  categorySection.innerHTML = "";

    //  categories.forEach(category => {
    //      const categoryContainer = document.createElement('div');
    //      categoryContainer.classList.add('category-container');

    //      const categoryTitle = document.createElement('h3');
    //      categoryTitle.classList.add('category-title');
    //      categoryTitle.setAttribute('id', 'id' + category.id);
    //      //modificando la ruta al dar click en categorias
    //      categoryTitle.addEventListener('click', ()=>{
    //          location.hash = `#category=${category.id}-${category.name}`;
    //      });
    //      const categoryTitleText = document.createTextNode(category.name);

    //      categoryTitle.appendChild(categoryTitleText);
    //      categoryContainer.appendChild(categoryTitle);
    //      categorySection.appendChild(categoryContainer);
    //  });
}

async function getMoviesByCategories(id){
    const { data } = await api ('/discover/movie', {
        params: {
            with_genres: id,
        }
    });

     const movies = data.results;

     showMovies(movies, genericSection);
    // console.log(movies);
    // genericSection.innerHTML = "";

    // movies.forEach(movie => {
    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-container');

    //     const movieImg = document.createElement('img');
    //     movieImg.classList.add('movie-img');
    //     movieImg.setAttribute('alt', movie.title);
    //     movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

    //     movieContainer.appendChild(movieImg);
    //     genericSection.appendChild(movieContainer);
    // });
}

async function getMoviesBySearch(query){
    const { data } = await api ('search/movie', {
        params: {
            query,
        }
    });

     const movies = data.results;

     showMovies(movies, genericSection);
}

async function getTrendingMovies(){
    const { data } = await api ('trending/movie/day');

    const movies = data.results;
    console.log(movies);
    trendingMoviesPreviewList.innerHTML = "";

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}