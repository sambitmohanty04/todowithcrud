import React, { useEffect, useState } from 'react'
import Dropdown from '../component/Dropdown';

const options = [
    { label : 'Red', value : 'red' },
    { label : 'Green', value : 'green' },
    { label : 'Blue', value : 'blue' },
]
const DropdownPage = () => {

    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option)
    }

    

  return (
    <>
        <div className='flex'>
            <a href=''>Dashboard</a>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
            {/* <Dropdown options={options} value={selection} onChange={handleSelect} /> */}
        </div>
    </>
  )
}

export default DropdownPage