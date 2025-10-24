import React from 'react'
import Navbar from '../Nav/Navbar'
import STAR from "./strawberry.png"

const Hero_comp = () => {
  return (
    <main className='bg-[#7e1108] md:py-6 md:px-12 '>
        <section>
            <div className='relative min-h-[750px] bg-gradient-to-r from-[#d22715] to-[#980a07] w-full md:rounded-xl shadow-md md:py-12 01'>
                <Navbar/>
                <div>

                  <div className='flex justify-center items-center  gap-4'>
<div className='text-white w-1/3 px-10 '>
  <h1 className='text-3xl mb-3'>01______</h1>
  <h1 className='text-5xl font-bold font-sans  mb-10'>A healthy fruit</h1>
  <p>Lorem ipsum dolor sit amet construction of it adipisicing elit. Voluptas repellat beatae, iste impedit harum vitae. Ut debitis molestiae asperiores adipisci!
  </p>
  <button className='border-white  px-3 py-2 rounded-[3px]  border-2  mt-4'>shop now</button>
</div>
<div>
  <img src={STAR} className=" h-200 w-200"alt="image data" />
</div>
{/* <div className='min-h-[750px] w-20   absolute top-0 right-0 ml-60 bg-red-500 opacity-50 mt-10'>

</div> */}
                  </div>
                  
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero_comp
