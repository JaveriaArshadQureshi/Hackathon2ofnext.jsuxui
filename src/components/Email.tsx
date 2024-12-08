import { CheckCircle, CheckCircle2 } from 'lucide-react'
import React from 'react'

const Email = () => {
  return (
    <div className=' '>
    <div className="bg-[url('/images/Email.jpg')] bg-no-repeat h-[600px] w-full flex items-center justify-center ]">
    <div className='w-[600px]'>
      <h2 className='text-[32px] text-white'>Join the club and get the benefits</h2>
      <div className='w-[495px] text-center' ><p className='text-[16px] text-white text-center pt-5'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p></div>
      

        <div className="flex gap-9 pt-6">
        <div className='flex text-white gap-2 pt-4'>
          <CheckCircle2/><span>Exclusive offers</span>
        </div>
        <div className='flex text-white gap-2 pt-4'>
          <CheckCircle2/><span>Free events</span>
        </div>
        <div className='flex text-white gap-2 pt-4'>
          <CheckCircle2/><span>Large discounts</span>
        </div>
      </div>
      
      <div className="flex pt-6 pb-10 ">
      <input type='text' placeholder='your@email.com' className='px-[100px] py-4'/>
      <button className='bg-[#2A254B] text-white py-4 px-6 '>Sign up</button>
       </div>

      
    </div>
    </div>
    </div>
  )
}

export default Email