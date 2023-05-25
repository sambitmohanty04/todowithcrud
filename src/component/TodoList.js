import React, {useState} from 'react'

const TodoList = ({todo}) => {

    return (
        <>
            <div className='container'>
                <div className='row todo-list bg-primary w-50 my-2'>
                    
                    <p className='todo-list-inner m-0'>{todo.text} </p>                                                  
                </div>
            </div>
        </>
    )
}

export default TodoList