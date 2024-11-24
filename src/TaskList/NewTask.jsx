import React from 'react'

const NewTask = ({data}) => {
  return (
      <div className='p-5 flex-shrink-0 h-full rounded-xl w-[425px] bg-yellow-400'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-semibold bg-red-500 rounded-lg px-5 py-2'>High</h3>
          <h4 className='text-xl font-semibold'>{data.taskDate}</h4>
        </div>
        <h3 className='mt-7 font-semibold text-2xl'>{data.taskTitle}</h3>
        <p className='mt-5 font-semibold text-xl'>Category: {data.category}</p>
        <p className='mt-5 font-normal text-xl text-gray-800'>{data.taskDescription}</p>
        <div className='mt-10'>
          <button className='w-full bg-yellow-500 py-2 font-medium px-2 text-sm rounded-md'>Accept Task</button>
        </div>
      </div>  )
}

export default NewTask