import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import './App.css';
import { useState,useEffect } from 'react';
import Column from './components/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Input from './components/Input';

function App() {
  const [tasks,setTasks] = useState([
    {id:1,title:"Linear Integrated Circuits Minor"},
    {id:2,title:"Communication Networks Minor"},
    {id:3,title:"Object Oriented Programming Minor"},
  ]);

  const addTask = async(title)=>{
    setTasks((tasks)=>[...tasks,{id:tasks.length+1,title}]);
    console.log(tasks);
    const stringifiedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', [stringifiedTasks]);
  }

  const getTaskPos = id=> tasks.findIndex((task)=>task.id===id)

  const handleDragEnd=(event)=>{
  const {active,over} = event;
  if (active.id===over.id) return;
  setTasks((tasks)=>{
    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);
    // console.log(originalPos,newPos);
    return arrayMove(tasks,originalPos,newPos);
  })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter:sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    // console.log(storedTasks);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className='App '>
      <h1 className=' font-bold text-4xl my-6 '>My Tasks</h1>
      <Input onSubmit={addTask} />
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
