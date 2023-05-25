import React, { useReducer, useState } from 'react'
// import Button from '../component/Button'
// import useCounter from '../hooks/use-counter'


const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const ADD_TO_VALUE = 'add-to-value';

const reducer = (state, action) => {
    if (action.type === INCREMENT_COUNT) {
        return {
            ...state,
            count : state.count+1
        }
    } 
    if (action.type === DECREMENT_COUNT) {
        return {
            ...state,
            count : state.count-1
        }
    }
    if(action.type === ADD_TO_VALUE) {
        return {
            ...state,
            addValue : action.payload
        }
    }
}

const CounterPage = ({ initialCount }) => {

    // const { count, increment } = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount)
    // const [addValue, setAddValue] = useState(0)

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        addValue: 0
    })
    console.log(state)
    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    }
    const decrement = () => {
        dispatch({
            type: 'decrement'
        });
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        // console.log(typeof value)
        // setAddValue(value)
        dispatch ({
            type : ADD_TO_VALUE,
            payload : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setCount(count + addValue);

        // setAddValue(0)
    }

    return (
        <>
            <div>
                <h1>Count is {state.count}</h1>
                {/* <Button onClick={increment} type='submit'>Increment</Button>
                <Button onClick={decrement}>Decrement</Button> */}
                <div>
                    <button onClick={increment} className='btn btn-primary mr-3'>increment</button>
                    <button onClick={decrement} className='btn btn-primary'>decrement</button>
                </div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <label className='mr-3'>Add a number</label>
                    <input type='number'
                        value={state.addValue || ''}
                        onChange={handleChange}
                        className='border-black-500 bg-gray-300 addCounterfotm' />
                    <button type='submit' className='btn btn-primary ml-2'>Add it</button>
                </form>
            </div>
        </>
    );
}

export default CounterPage