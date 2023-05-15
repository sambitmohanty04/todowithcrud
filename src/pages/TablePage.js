import React from 'react'
import Table from '../component/Table'

const TablePage = () => {

    const data = [
        { name: 'orange', color: 'bg-orange-500', score: 5 },
        { name: 'apple', color: 'bg-red-500', score: 3 },
        { name: 'banana', color: 'bg-yellow-500', score: 2 },
        { name: 'strawberry', color: 'bg-purple-500', score: 4 }
    ]

    const config = [
        {
            label: 'name',
            render: (fruit) => fruit.name,
        },
        {
            label: 'color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },
        {
            label: 'score',
            render: (fruit) => fruit.score,
        }
    ]
    return (
        <>
            <div>
                <Table data={data} config={config} />
            </div>
        </>
    )
}

export default TablePage