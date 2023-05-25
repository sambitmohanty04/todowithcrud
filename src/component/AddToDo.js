import React, { useState } from 'react'

export const AddToDo = () => {

    const [value, setValue] = useState()

    const handleSubmit = () => {
        e.preventDefault()
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Add Todo</label>
            <input type='text' 
            className='border ml-3'
            value={value} 
            onChange={()=>setValue(e.target.value)}/>
        </form>
    </>
  )
}
