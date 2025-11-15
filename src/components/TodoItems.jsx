import React from 'react'
import notick from '../assets/notick.png'
import tick from '../assets/tick.png'
import trash from '../assets/trash.png'
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
       <div  onClick={() => {toggle(id)} }  className='flex flex-1 items-center cursor-pointer'>
        <img  className='w-6'src={isComplete ? tick : notick} alt='image'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
          {text}</p>
       </div>
       <img onClick={() => {deleteTodo(id)}} className='w-7 cursor-pointer' src={trash} alt='image'/>
    </div>
  )
}

export default TodoItems