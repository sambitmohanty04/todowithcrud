import React, { useState, useEffect, useRef } from 'react'
import {FaAngleDown} from 'react-icons/fa'
// import Panel from './Panel'


const Dropdown = ({ options, value, onChange }) => {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(()=>{
        const handler = (event) => {

            if(!divEl.current) {
                return;
            }
            
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        };
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)

        onChange(option)
    }

    const renderOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 cursor-pointer rounded p-1' onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
        )
    })

    // let content = 'Select...'
    // if(value) {
    //     content = value.label
    // }

    return (
        <>
            <div ref={divEl} className='w-48 relative'>
                <div className='flex justify-between items-center cursor-pointer border rounded p-1 shadow bg-white w-full' onClick={handleClick}>
                    {value?.label || 'Select...'}
                    <FaAngleDown />
                </div>
                {isOpen && <div className='absolute top-full border rounded p-1 shadow bg-white w-full'>{renderOptions}</div>}
            </div>
        </>
    )
}

export default Dropdown