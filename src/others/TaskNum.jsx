import React from 'react';

const TaskNum = ({ data }) => {
  // Access taskCounts from data prop
  const { taskCounts } = data;

  return (
    <div className='flex m-10 screen justify-between gap-5'>
      <div className='rounded-xl px-10 py-6 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold text-white'>{taskCounts.active}</h2>
        <h3 className='text-xl font-medium text-white'>Active Tasks</h3>
      </div>
      <div className='rounded-xl px-10 py-6 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold text-white'>{taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium text-white'>New Tasks</h3>
      </div>
      <div className='rounded-xl px-10 py-6 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold text-white'>{taskCounts.completed}</h2>
        <h3 className='text-xl font-medium text-white'>Completed Tasks</h3>
      </div>
      <div className='rounded-xl px-10 py-6 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold text-white'>{taskCounts.failed}</h2>
        <h3 className='text-xl font-medium text-white'>Failed Tasks</h3>
      </div>
    </div>
  );
}

export default TaskNum;
