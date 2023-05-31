import React, {useState} from 'react'
import TodoList from '../component/TodoList'
import { AddToDo } from '../component/AddToDo'


const ToDo = () => {

    const [todos, setTodos] = useState(
        [
            { text: 'Learn About React' },
            { text: 'Practice About React' },
        ]
    )

  return (
    <>
        <div className='container'>
            <div className='toDo'>
                {todos.map((todo, index) => (
                    <TodoList key={index} todo={todo} />
                ))}
                
            </div> 
            <AddToDo addTodo={addTodo} />           
        </div>
    </>
  )
}

export default ToDo