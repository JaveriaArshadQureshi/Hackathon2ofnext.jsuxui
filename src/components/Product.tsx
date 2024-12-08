import Image from 'next/image'
import React from 'react'

const product = () => {
  return (
    <div className='w-[1280] m-auto flex max-sm:flex-col  px-14  '>
      
        <div className='p-4'> 
            <Image src="/images/Photo.jpg " alt="chair " width={305} height={462} />
            <h5 className='mt-5'>The Dandy chair</h5>
            <p>£250</p>
        </div>

        <div className='p-4'> 
            <Image src="/images/Photo1.jpg " alt="pots" width={305} height={462} />
            <h5 className='mt-5'>Rustic Vase Set</h5>
            <p>£155</p>
        </div>

      

        <div className='p-4'> 
            <Image src="/images/Photo2.jpg " alt="vase " width={305} height={462} />
            <h5 className='mt-5'>The Silky Vase</h5>
            <p>£125</p>
        </div>

        <div className='p-4'> 
            <Image src="/images/Photo3.jpg " alt="The Lucy Lamp " width={305} height={462} />
            <h5 className='mt-5'>The Lucy Lamp</h5>
            <p>£399</p>
        </div>

       

    </div>

    
  )
}

export default product