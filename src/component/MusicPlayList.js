import React from 'react'
import {createRandomSong} from '../data'
import { useDispatch } from 'react-redux';
import { addSong } from '../store';


const MusicPlayList = () => {

    const dispatch = useDispatch();

    const musicPlayList = [];

    const handleMusicAdd = (song) => {
        const action = addSong(song);
        dispatch(action)
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