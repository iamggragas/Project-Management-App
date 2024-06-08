import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/16/solid';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const TableHeading = ({
    name, 
    sortable = true, 
    sort_field = null, 
    sort_direction = null, 
    sortChanged = () => {},
    children
}) => {
  return (
    <th onClick={e => sortChanged(name)} className='px-3 py-3'>
        <div className='flex items-center justify-between gap-1 cursor-pointer'>
            { children }
            { sortable && (
                <div>
                <ChevronUpIcon className={
                    "size-4 " +
                    (sort_field === name && sort_direction === 'asc' ? 'text-white' : '') 
                }/>
                <ChevronDownIcon className={
                    "size-4 " +
                    (sort_field === name && sort_direction === 'desc' ? 'text-white' : '') 
                }/>
            </div>
            )}           
        </div>
    </th>
  )
}

export default TableHeading