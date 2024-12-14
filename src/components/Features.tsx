import Image from 'next/image'
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CreditCard } from 'lucide-react';
import { LuSprout } from "react-icons/lu";

const Features = () => {
  return (
    <div className='w-full flex items-center justify-center p-20 max-sm:pt-0'>
      <div className='max-w-[1280px] flex-col  '>
        <h3 className='pt-[60px] text-[24px] font-[400] max-sm:text-[20px]  text-center'>What makes our brand different</h3>
        
        <div className='flex max-sm:flex-col gap-4 px-10'>
        <div className="w-[305px] h-[244px] transform transition-transform duration-300 hover:scale-105 flex flex-col items-start justify-start bg-[#f9f9f9] p-4 rounded-md mt-6 shadow-md">
          <div className='w-[209px] h-[148px] flex-col'>
          <TbTruckDelivery className="text-4xl text-gray-700 mb-2 mt-8" />
          <h4 className="text-lg font-semibold mt-3">Next day as standard</h4>
          <p className="text-[15px] text-justify text-gray-600  mt-2">
            Order before 3pm and get your order the next day as standard
          </p>
          </div>
           </div>

           <div className="w-[305px] h-[244px]  transform transition-transform duration-300 hover:scale-105 flex flex-col items-start justify-start bg-[#f9f9f9] p-4 rounded-md mt-6 shadow-md">
          <div className='w-[209px] h-[148px] flex-col'>
          <FaRegCircleCheck className="text-4xl text-gray-700 mb-2 mt-8" />
          <h4 className="text-lg font-semibold mt-3">Made by true artisans</h4>
          <p className="text-[15px] text-justify text-gray-600  mt-2">
          Handmade crafted goods made with real passion and craftmanship
          </p>
          </div>
           </div>

           <div className="w-[305px] h-[244px]  transform transition-transform duration-300 hover:scale-105 flex flex-col items-start justify-start bg-[#f9f9f9] focus:bg-[#f0f0f0] p-4 rounded-md mt-6 shadow-md">
          <div className='w-[209px] h-[148px] flex-col'>
          <CreditCard className="h-9 w-9 text-gray-700 mb-2 mt-8" />
          <h4 className="text-lg font-semibold mt-3">Unbeatable prices</h4>
          <p className="text-[15px] text-justify text-gray-600  mt-2">
          For our materials and quality you won&apost find better prices anywhere
          </p>
          </div>
           </div>


           <div className="w-[305px] h-[244px] transform transition-transform duration-300 hover:scale-105 flex flex-col items-start justify-start bg-[#f9f9f9] p-4 rounded-md mt-6 shadow-md">
          <div className='w-[209px] h-[148px] flex-col'>
          <LuSprout className="text-4xl text-gray-700 mb-2 mt-8" />
          <h4 className="text-lg font-semibold mt-3">Recycled packaging</h4>
          <p className="text-[15px] text-justify text-gray-600  mt-2">
          We use 100% recycled to ensure our footprint is more manageable
          </p>
          </div>
           </div>
           </div>

          
        
      </div>
    </div>
    
  )
}

export default Features