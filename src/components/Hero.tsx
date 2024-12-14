import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-full m-auto p-0"> <Image src="/images/Hero.jpg" alt='heroimage' width={1440} height={704}/>
  
    </div>
  )
}

export default Hero