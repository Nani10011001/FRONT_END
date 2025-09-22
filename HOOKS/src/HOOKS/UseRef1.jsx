import React, { useState,useRef, useEffect } from 'react'

const UseRef1 = () => {
    const [data,setData]=useState()
    const count=useRef(0)
    useEffect(()=>{

count.current=count.current+1
    })
  return (
    <div>
        <input type="text"onChange={e=>setData(e.target.value)} />
        <h3>input data:{data}</h3>
      <h1>{count.current}</h1>
    </div>
  )
}
// its help to render the data without rerendering it then its also help to manpulate the data

export default UseRef1
