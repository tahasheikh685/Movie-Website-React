
import React, { useState, useEffect } from 'react'


function App() {
  const [count, setCount]= useState(0);
  
  useEffect(()=>{
    alert('Reload');
  });
  return (
    <div className='text-center bg-black text-white from-neutral-400'>
      <button onClick={()=> setCount((prevCount)=> prevCount-1)}>-</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount((nextCount)=> nextCount+1)}>+</button>
    </div>
  )
}

export default App
