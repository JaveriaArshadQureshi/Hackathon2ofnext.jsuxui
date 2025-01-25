import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div>
        <div className='max-sm:flex max-sm:flex-col flex'>
            <div>
               <Image src={"/images/aboutpic.png"} alt={"sofa"} height={543} width={670} />
            </div>
            <div className=' md:h-[543px] md:w-[670px]'>
            <div className=' max-sm:w-[342px]  max-sm:h-[264px] w-[536px] h-[225px] max-sm:mx-[20px] mt-[72px] ml-[84px] '>
             <h3 className='max-sm:text-[16px] text-[22px]'>Our service is&apos;t just personal, it&apos;s actually
             hyper personally exquisite</h3>
             <p className='mt-[25px] max-sm:text-[14px] text-gray-800'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
             <p className='mt-[25px] max-sm:text-[14px] text-gray-800'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            </div>
            <button className='max-sm:mt-[30px] max-sm:text-[14px] max-sm:px-[130px] hover:bg-black hover:text-[#f9f9f9] max-sm:ml-[20px] ml-[84px] mt-[150px] py-[16px] px-[32px] shadow-md bg-[#f9f9f9]'>Get in touch</button>
            </div>
        </div>
    </div>
  )
}

export default about
