import React from 'react'
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div >
        <div className='px-5 text-white absolute w-full top-0 left-0 '>
            <div className='flex justify-between items-center'>

                <h1 className='font-bold text-4xl uppercase'>Straw<span className='font-normal'>Berris</span></h1>

                <ul className='flex space-x-14 text-xl'>
                    <li>
                        <a href="">Home</a>

                    </li>
                    <li> 
                        <a href="">Services</a>
                        
                        </li>
                    <li>
                        <a href="">info</a></li>
                
                </ul>
                     <div>
            <FaBars className='text-3xl cursor-pointer'/>
            </div>
            </div>
       
        </div>
      
    </div>
  )
}

export default Navbar
