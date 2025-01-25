import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'

const bottom = () => {
  return (
    <div>
        
    <div className=' bg-[#2A254B] w-screen px-6 pt-0   text-white flex-col justify-center items-center' >
        {/* upper section  */}
        <section className='flex justify-around pt-10 max-sm:grid max-sm:grid-cols-2  pb-10 m-0 max-sm:text-start   border-b border-[#F9F9F9] '>
            <div >
                <h3 className="text-[18px] max-sm:text-[15px]">Menu</h3>
                <ul className="text-[14px] max-sm:[12px] pt-2 ">
                <li><Link href={"#"}>New arrivals</Link></li>
                <li><Link href={"#"}>Best sellers</Link></li>
                <li><Link href={"#"}>Recently viewed</Link></li>
                <li><Link href={"#"}>Popular this week</Link></li>
                <li><Link href={"#"}>All products</Link></li>
                </ul>
                
            </div>
            <div>
                <h3 className="text-[18px] max-sm:text-[15px]">Categories</h3>
                <ul className="text-[14px] max-sm:text-[12px] pt-2 ">
                <li><Link href={"#"}>Crockery</Link></li>
                <li><Link href={"#"}>Furniture</Link></li>
                <li><Link href={"#"}>Homeware</Link></li>
                <li><Link href={"#"}>Plant pots</Link></li>
                <li><Link href={"#"}>Chairs</Link></li>
                <li><Link href={"#"}>Crockery</Link></li>
                </ul>
            </div>
            <div className="text-start max-sm:mt-4">
                <h3 className="text-[18px]  max-sm:text-[15px]">Our company</h3>
                <ul className="text-[14px] max-sm:text-[12px]  pt-2 ">
                <li><Link href={"#"}>About us</Link></li>
                <li><Link href={"#"}>Vacancies</Link></li>
                <li><Link href={"#"}>Contact us</Link></li>
                <li><Link href={"#"}>Privacy</Link></li>
                <li><Link href={"#"}>Returns policy</Link></li>
                </ul>
            </div>
            <div>
              <h3 className="text-[18px] max-sm:text-[15px]  max-sm:mt-4">Join our mailing list</h3>
              <div className="flex pt-6 pb-[100px] max-sm:pb-5">
            <input
              type="text"
              placeholder="your@email.com"
              className=" bg-white text-white focus:outline-none bg-opacity-10 relative  md:px-[100px] max-sm:py-1 max-sm:text-[10px] max-sm:px-1 py-4"
            />
            <button className="text-[#2A254B] bg-white py-4 px-5 max-sm:py-1  max-sm:text-[10px] max-sm:px-1 hover:bg-opacity-80">
              Sign up
            </button>
          </div>
            </div>
        </section>
          {/* lower section  */}
          <section className='flex py-5 justify-center items-center  md:justify-between '>
          <div className=" md:ml-10 text-sm max-sm:pb-4 "><h3>Copyright 2022 Avion LTD</h3></div>
          <div className=' mr-10 flex gap-3 text-2xl max-sm:hidden'>
            <FaLinkedin />
            <FaFacebookSquare />
            <FaInstagram />
            <FaSkype/>
            <FaTwitter/>
            <FaPinterest/>
          </div>
            </section>    
          
          </div>
    </div>
  )
}

export default bottom