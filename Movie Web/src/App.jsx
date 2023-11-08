
import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// const movie1= {
//   "Title": "Spiderman the Verse",
//   "Year": "2019",
//   "imdbID": "tt12122034",
//   "Type": "series",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
// }

const API_URL= 'https://www.omdbapi.com?apikey=a9572c36'
const App= () =>{

  const [movies, setMovies]= useState([]);

  const searchMovies= async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    setMovies(data.Search);
  }
  
  useEffect(()=>{
    searchMovies('spiderman')
  }, [])
  return (
    <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
          <input 
          type="text"
          placeholder='Search for Movies'
          onChange={()=>{}} 
          />
          <img 
          src={SearchIcon}
          alt="search" 
          onClick={()=>{}}
          />
        </div>
        {movies?.length > 0 
          ? (
              <div className='container'>
                {movies.map((movie)=>(
                <MovieCard movie={movie} />
                ))}
              </div>
            ) : 
            (
              <div className='empty'>
                <h2>No Movies found</h2>
              </div>
            )

        }
        
    </div>
  )
}

export default App
