import React from 'react'

const Button = ({children}) => {
    return (
        <>
            <button className='bg-indigo-600 font-medium text-gray-900 p-2' type='submit'>{children}</button>
        </>
    )
}

export default Button