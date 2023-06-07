import React from 'react'
import {createRandomSong} from '../data'

const MusicPlayList = () => {

    const musicPlayList = [];

    const handleMusicAdd = () => {

    }

    const renderMusic = musicPlayList.map((music, index)=>{
        return (
            <li>{music}</li>
        )
    })

  return (
    <>
        <div className='playList mt-5 d-flex'>
            <div><h3>Music Play List</h3></div>
            
            <button className='btn btn-primary ml-5' onClick={()=>handleMusicAdd(createRandomSong)}>Add Songs</button>
        </div>
        <ul>{renderMusic}</ul>
    </>
  )
}

export default MusicPlayList