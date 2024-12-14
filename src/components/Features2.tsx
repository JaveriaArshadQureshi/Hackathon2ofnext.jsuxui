import Image from 'next/image'
import React from 'react'

const Features2 = () => {
  return (
    <div className='w-1280 flex items-center justify-center max-sm:flex-col p-9 gap-8'>
        <div className='flex bg-[#2A254B] max-sm:flex-col  w-[584px] h-[443px] max-sm:pb-3 max-sm:w-[299px] max-sm:h-[218px] max-sm:p-0 pt-[60px] pr-[120px] pl-[75px] pb-[50px]'>
            <div className=' w-[500px] pr-0 max-sm:w-[250px]  text-white p-5'>
                <h2 className='text-3xl  max-sm:text-sm  max-sm:text-left pb-6'>It started with a small idea</h2>
                <p className='pb-[120px] max-sm:text-[12px] max-sm:pb-9 '>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                <button className='bg-[#F9F9F9] bg-opacity-5 px-5 py-3 mb-5 hover:bg-opacity-90 hover:text-[#2A254B] max-sm:px-[100px] max-sm:text-[9px] max-sm:inline-flex max-sm:justify-center '>
                View collection
                </button>
            </div>
        </div>
        <div ><Image src="/images/block.jpg"  alt="image" width={584} height={443} className='max-sm:max-w-[299px] max-sm:h-[218px]' /></div>
    </div>
  )
}

export default Features2