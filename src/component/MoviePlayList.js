import React from 'react'
import { createRandomMovie } from '../data'

const MoviePlayList = () => {

    const moviePlayList = []

    const handleAddMovie = () => {

    }

    const renderMovieList = moviePlayList.map((movie)=>{
        return (
            <li>{movie}</li>
        )
    })

  return (
    <>
        <div className='playList mt-5 d-flex'>
            <div><h3>Movie Play List</h3></div>
            
            <button className='btn btn-primary ml-5' onClick={()=>handleAddMovie(createRandomMovie)}>Add Movie</button>
        </div>
        <ul>{renderMovieList}</ul>
    </>
  )
}

export default MoviePlayList