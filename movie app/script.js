const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.getElementById("main");

const form = document.getElementById("form");

const search = document.getElementById("search");

getMovies(APIURL);

async function getMovies(url){

    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

                        // respData.results.forEach( (movie)=> {

                        //     const img = document.createElement("img");
                        //     img.src = IMGPATH + movie.poster_path;

                        //     document.body.appendChild(img);


                        // });


    showMovies(respData.results);

}

function showMovies(movies){


    // clear main 

    main.innerHTML = '';

    movies.forEach((movie) => {

      
        //  make struct the movie in the below for not using movie keyword in poster path , title and vote average 
             
        //const {poster_path, title, vote_average} = movie;
                                
        
                const movieEl = document.createElement("div");
                movieEl.classList.add("movie");
        
                movieEl.innerHTML = `
                
        
                    <img 
                        src="${ IMGPATH + movie.poster_path}" 
                        alt="${movie.title}" 
                        
                    />
                    
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <span class= ${getClassByRate(movie.vote_average)} > ${movie.vote_average}</span>
                    </div>

                    <div class= "overview"> 
                    
                    <h4> OverView </h4>
                    ${movie.overview}
                    </div>
                
                
                `;
        
                 main.appendChild(movieEl);
            });
        

}

function getClassByRate(vote){

    if(vote >= 8){
        return 'green';

    }else if(vote >= 5){
        return 'orange';
    }else {
        return 'red';
    }

}


form.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){

        getMovies(SEARCHAPI + searchTerm);

        search.value = "";

    }

});


