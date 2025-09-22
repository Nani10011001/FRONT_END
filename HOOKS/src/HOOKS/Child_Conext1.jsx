import React from 'react'
import {userContext} from "./UseContext.jsx"
import { useContext } from 'react'
const Child_Conext1 = () => {
  const user=useContext(userContext)
  return (
    <div>

      <h1>{user}</h1>
    </div>
  )
}

export default Child_Conext1
