import React from 'react'
import MoviePlayList from '../component/MoviePlayList'
import MusicPlayList from '../component/MusicPlayList'

const ListPage = () => {
  return (
    <>
        <div>
            <button className='btn btn-danger'>Reset Playlist</button>
            <MoviePlayList />
            <MusicPlayList />
        </div>
    </>
  )
}

export default ListPage