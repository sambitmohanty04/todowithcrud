import React, { useState } from 'react'
// import Button from '../component/Button'
// import useCounter from '../hooks/use-counter'

const CounterPage = ({ initialCount }) => {

    // const { count, increment } = useCounter(initialCount);
    const [count, setCount] = useState(initialCount)
    const [addValue, setAddValue] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0 ;
        // console.log(typeof value)
        setAddValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(count + addValue);

        setAddValue(0)
    }

    return (
        <>
            <div>
                <h1>Count is {count}</h1>
                {/* <Button onClick={increment} type='submit'>Increment</Button>
                <Button onClick={decrement}>Decrement</Button> */}
                <div>
                    <button onClick={increment} className='btn btn-primary mr-3'>increment</button>
                    <button onClick={decrement} className='btn btn-primary'>decrement</button>
                </div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <label className='mr-3'>Add a number</label>
                    <input type='number'
                    value={addValue || ''}
                    onChange={handleChange}
                    className='border-black-500 bg-gray-300 addCounterfotm' />
                    <button type='submit' className='btn btn-primary ml-2'>Add it</button>
                </form>
            </div>
        </>
    );
}

export default CounterPage