import React from 'react'
import { useState } from 'react'

const UseStatehook = () => {
// used for fectching the input value and post to backend realcase use
 const [count,setCount]=useState(0)
 const [value,setValue]=useState("")
 const[obj,setObj]=useState({
  counts:0,
  value:"counts"

 })
 
 const increment=()=>{
      setCount(count+1)
    }
    const objIncrement=()=>{
setObj((prev)=>({
  ...prev,counts:prev.counts+1

}))
    }
  return (
    
    <div>

{/* input filed data acessing */}
<input type="text"  onChange={e=>setValue(e.target.value)} />
<h2>input data value:{value}</h2>


{/* normal way of updating the state */}
      <h1>count:{count}</h1>
      <button onClick={increment}>increment</button>
      <div>



       {/*  how take the data from the object */}
<h1>{obj.value}:{obj.counts}</h1>
<button onClick={objIncrement}>increment</button>

      </div>
    </div>
  )
}

export default UseStatehook
