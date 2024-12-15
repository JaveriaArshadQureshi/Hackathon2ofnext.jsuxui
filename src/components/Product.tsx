import Image from 'next/image'
import React from 'react'

const product = () => {
  return (
    <div className='w-[1280] m-auto flex flex-col justify-center items-center '>
      
      <div  className='flex  max-sm:flex-wrap max-sm:justify-center  px-14'>
        <div className='p-4 '> 
        <div className='transform transition-transform duration-300 hover:scale-105'>
            <Image src="/images/photo.jpg " alt="chair " width={305} height={462}  />
            </div>
            <h5 className='mt-5'>The Dandy chair</h5>
            <p>£250</p>
        </div>

        <div className='p-4'> 
        <div className='transform transition-transform duration-300 hover:scale-105'>
            <Image src="/images/photo1.jpg " alt="pots" width={305} height={462} />
            </div>
            <h5 className='mt-5'>Rustic Vase Set</h5>
            <p>£155</p>
        </div>

      

        <div className='p-4'> 
        <div className='transform transition-transform duration-300 hover:scale-105'>
            <Image src="/images/photo2.jpg " alt="vase " width={305} height={462} />
            </div>
            <h5 className='mt-5'>The Silky Vase</h5>
            <p>£125</p>
        </div>

        <div className='p-4 '> 
          <div className='transform transition-transform duration-300 hover:scale-105'>
            <Image src="/images/photo3.jpg " alt="The Lucy Lamp " width={305} height={462} />
            </div>
            <h5 className='mt-5'>The Lucy Lamp</h5>
            <p>£399</p>
        </div>
        </div>

        <div className='mt-8'>
        <button className=' bg-[#f9f9f9]  py-2 px-3 shadow-md hover:bg-black hover:text-[#f9f9f9]'>
            View Collection
        </button>
        </div>
        
       

    </div>

    
  )
}

export default product