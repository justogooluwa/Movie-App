import { useEffect, useState } from "react";
import './App.css'
import searchICon from './search.svg'
import MovieCard from "./MovieCard";
//aa0ed63b

const API_URL = "http://www.omdbapi.com?apiKey=aa0ed63b"




const App =  ()=> {
    const [movies, setMovies] = useState([]) 
    const [searchTerm, setSearchTerm] = useState('')
    const searcMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
    }
    useEffect(()=>{
     searcMovies('spiderman')
    },[])
        return(
            <div className="app">
           <h1>MovieLand</h1>
           <div className="search">
          <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          />
          <img src={searchICon} alt="search" onClick={()=> searcMovies(searchTerm)}></img>
           </div>
           {
            movies?.length > 0 
            ?(
                <div className="container">
               {movies.map((movie) =>(
                <MovieCard movie={movie}/>
               ))}
               </div> 
            ):
            (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
           }
         
            </div>
        )
}
export default App;