import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import Task from './Task/Task'

const Column = ({tasks}) => {
  return (
    <div className='bg-gray-800 rounded-md py-2 pl-5 text-start mx-auto w-[35%]'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map((task)=>(
        <Task key={task.id} id={task.id} title={task.title} />
          ))}
          </SortableContext>
    </div>
  )
}

export default Column
