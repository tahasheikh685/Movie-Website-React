
import React, { useEffect } from 'react';

const movie1= {
  "Title": "Spiderman the Verse",
  "Year": "2019–",
  "imdbID": "tt12122034",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}

const API_URL= 'https://www.omdbapi.com?apikey=a9572c36'
const App= () =>{

  const searchMovies= async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    console.log(data.Search);
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
          src="${searchIcon}" 
          alt="search" 
          onClick={()=>{}}
          />
        </div>
        <div className='container'>
          <div className='movie'>
            <div>
              <p>${movie1.Year}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
