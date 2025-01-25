import About from '@/components/About'
import Email from '@/components/Email'
import Features from '@/components/Features'
import Features2 from '@/components/Features2'
import React from 'react'

const page = () => {
  return (
    <div>
        <main>
        {/* uppersection  */}
        <div className=' max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mt-2 max-sm:px-8 max-sm:mb-4 md:flex  md:justify-between md:items-center  md:px-20 md:my-20'>
            <h3 className="font-normal max-sm:text-[24px] text-[26px] ">A brand built on the love of craftmanship,<br className="hidden md:block"/>
            quality and outstanding customer service</h3>
            <button className=' max-sm:px-[100px]  max-sm:text-[14px] md:px-[20px] py-[8px] bg-[#f9f9f9] max-sm:mt-8 hover:bg-black hover:text-[#f9f9f9] shadow-md'>
                View our products
            </button>
        </div>
        {/* midpart 1 */}
        <Features2/>
        {/* midpart 2 */}
        <div>
          <About />
        </div>
        {/* midpart 3 */}
        <Features/>
        {/* lowerpart */}
        <Email/>
        </main>
    </div>
  )
}

export default page