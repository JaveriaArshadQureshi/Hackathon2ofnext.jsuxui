import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'

const bottom = () => {
  return (
    <div>
        
    <div className='w-full bg-[#2A254B] max-sm:w-[350px] px-6 pt-0  text-white flex-col justify-center items-center' >
        {/* upper section  */}
        <section className='flex justify-around pt-10 max-sm:flex-wrap pb-10 m-0 max-sm:text-start gap-4  border-b border-[#F9F9F9] '>
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
            <div className="text-start">
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
              <h3 className="text-[18px] max-sm:text-[15px]">Join our mailing list</h3>
              <div className=" pt-6 pb-[100px] max-sm:pb-5">
            <input
              type="text"
              placeholder="your@email.com"
              className=" bg-white text-white focus:outline-none bg-opacity-10 relative px-[100px] max-sm:py-3 max-sm:text-sm max-sm:px-2 py-4"
            />
            <button className="text-[#2A254B] bg-white py-4 px-5 max-sm:py-3  max-sm:text-sm max-sm:px-2 hover:bg-opacity-80">
              Sign up
            </button>
          </div>
            </div>
        </section>
          {/* lower section  */}
          <section className='flex p-5  justify-between '>
          <div className="ml-10 text-sm max-sm:pb-4 "><h3>Copyright 2022 Avion LTD</h3></div>
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