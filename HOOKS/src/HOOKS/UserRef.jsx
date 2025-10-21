import React from 'react'
import { useRef } from 'react'
const UserRef = () => {
    const inputfile=useRef()
    console.log(inputfile)
    const handleInput=()=>{
    inputfile.current.style.width="350px"
    inputfile.current.focus()
    }
  return (
    <div>
      <input type='text' ref={inputfile}/>
      <button onClick={handleInput}>clickOn</button>
    </div>
  )
}

export default UserRef
