import React from 'react'
import { createContext } from 'react'
import Child_Conext1 from './Child_Conext1'


  export const userContext=createContext()
const UseContextDA = () => {
    // its is used we want use the data global across different components one or more


  
    return (
    <div>
        <h1>useContext</h1>
        <userContext.Provider value={"coding"}>
<Child_Conext1/>
        </userContext.Provider>
        
      
    </div>
  )
}

export default UseContextDA
