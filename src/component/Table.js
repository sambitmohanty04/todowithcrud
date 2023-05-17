import React from 'react'

const Table = ({ data, config }) => {

    const renderedFruit = data.map((fruit) => {
        // return <tr key={fruit.name}>
        //     <td className='p-3'>{fruit.name}</td>
        //     <td className='p-3'>
        //         <div className={`p-3 m-2 ${fruit.color}`}></div>
        //     </td>
        //     <td className='p-3'>{fruit.score}</td>
        // </tr>
        const renderCells = config.map((column) => {
            return <td>{column.render(fruit)}</td>
        })

        return <tr className='border-b'>{renderCells}</tr>
    })

    const renderedHeader = config.map((column) => {

        if(column.header) {
            return column.header();
        }
        return (
            <th key={column.label}>{column.label}</th>
        )
    })

    return (
        <>
            <div>
                <table className='table-auto border-spacing-2'>
                    <thead>
                        <tr className='border-b-2'>
                            {renderedHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {renderedFruit}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table