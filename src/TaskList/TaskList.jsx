import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasks' className='text-white h-[50%] overflow-auto m-10 w-full items-center justify-start flex-nowrap flex gap-5'>
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx} data={e}/>
        }
        if(e.newTask){
          return <NewTask key={idx} data={e}/>
        }
        if(e.failed){
          return <FailedTask key={idx} data={e}/>
        }
        if(e.completed){
          return <CompleteTask key={idx} data={e}/>
        }
      })}

    </div>
  )
}

export default TaskList