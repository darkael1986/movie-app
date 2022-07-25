
// const api = require('axios').default({
//     baseURL: 'https://api.themoviedb.org/3/',
//     headers:{
//         'Content-Type': 'application/json;charset=utf-8',
//     },
//     params: {
//         'api_key': API_KEY,
//     },
//  })


 async function getTrendingMoviesPreviewe (){
     const res = await fetch ('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);

     const data = await res.json();
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

// //migracion axios
// async function getTrendingMoviesPreviewe (){
//     const { data } = await api ('trending/movie/day');
//     const movies = data.results;
//     console.log(movies);

//     movies.forEach(movie => {
//         const movieTrendingSection = document.querySelector('#trendingPreview .trendingPreview-movieList');
//         const movieContainer = document.createElement('div');
//         movieContainer.classList.add('movie-container');

//         const movieImg = document.createElement('img');
//         movieImg.classList.add('movie-img');
//         movieImg.setAttribute('alt', movie.title);
//         movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

//         movieContainer.appendChild(movieImg);
//         movieTrendingSection.appendChild(movieContainer);
//     });
// }


//funcion listar categorias peliculas

async function getCategoriesMoviesPreview(){
    const res = await fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);

    const data = await res.json();
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


getTrendingMoviesPreviewe();
getCategoriesMoviesPreview();