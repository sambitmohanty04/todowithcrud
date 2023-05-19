import React from 'react'
// import Table from '../component/Table'
import SortableTable from '../component/SortableTable'

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
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },
        {
            label: 'score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
    ]
    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <>
            <div>
                <SortableTable data={data} config={config} keyFn={keyFn} />
            </div>
        </>
    )
}

export default TablePage