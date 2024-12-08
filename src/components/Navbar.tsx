import React from 'react'
import { Search, ShoppingCart,  } from 'lucide-react'
import Link from 'next/link'
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='w-full px-6  bg-white '>
        <div className='upperpart  flex items-center justify-between p-2 md:border-b-2 border-[#726E8D]  '>
            <Search className='h-4 w-4'/>
            <div className='text-2xl font-medium  text-[#22202E]'>Avion</div>
            <div className='flex gap-2'>
            <ShoppingCart className='w-5 h-5'/>
            < FaRegUserCircle className='h-5 w-5'/>
            </div>
          
        </div>
        <div className="lowerpart text-[#726E8D] max-sm:hidden p-3 flex gap-10 justify-center ">
           <Link href={"#"}>Plant pots</Link>
           <Link href={"#"}>Ceramics</Link>
           <Link href={"#"}>Tables</Link>
           <Link href={"#"}>Chairs</Link>
           <Link href={"#"}>Crockery</Link>
           <Link href={"#"}>Tableware</Link>
           <Link href={"#"}>Cutlery</Link>
        </div>
    </nav>
  )
}

export default Navbar