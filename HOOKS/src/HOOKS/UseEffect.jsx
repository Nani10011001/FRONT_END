import React, { useState ,useEffect} from 'react'

const UseEffect = () => 
{
    // get the data from the backend with get method and render it when we want without its get all data with dependeces we choose which to pickup
    const [count,setCount]=useState(0)
        const [count2,setCount2]=useState(0)
    const increament=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        document.title=`${count2} counts`// its two  parameter one callback and another is dependencis without  the dependcis its update w
    },[count2])// if we add the dependencis[value in it] its update the value.  callback its update each
   
  
  return (

    <div>
     
      <button onClick={increament}>increament</button>
      <button onClick={()=>setCount2(count2+1)}>increament2</button>
    
    </div>
  )
}

export default UseEffect
