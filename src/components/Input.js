import React, { useState } from 'react'

const Input = ({onSubmit}) => {
    const [input,setInput] = useState("");
    const handleSubmit = ()=>{
        onSubmit(input);
        setInput("");
    }

  return (
    <div className='my-14 flex justify-center'>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button className=" mx-6 btn btn-primary" disabled={input===""?true:false} onClick={handleSubmit} >Add</button>
    </div>
  )
}

export default Input
