import React from 'react'
import { Menu, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { FaRegUserCircle } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
  return (
    <nav className='w-screen px-6  bg-white '>
        <div className='upperpart  flex items-center  justify-between p-2 md:border-b-2 border-[#726E8D]  '>
            <Search className='h-4 w-4 max-sm:hidden cursor-pointer'/>
            <div className='text-xl font-medium  text-[#22202E]'>Avion</div>
            <div className='flex gap-3'>
            <Link href={"/cart"}><ShoppingCart className='h-4 w-4  max-sm:hidden cursor-pointer'/></Link>
            < FaRegUserCircle className='h-4 w-4   max-sm:hidden cursor-pointer'/>
            </div>
           
           <div className='md:hidden max-sm:flex '>
            <Sheet >
              <SheetTrigger className='flex gap-3'>
                
                <button><Menu className='h-4 w-4 ' /></button>
                
              </SheetTrigger>
              <SheetContent className='bg-white text-start '>
                <SheetHeader>
                  <SheetTitle >Avion</SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-3 text-start text-[#726E8D] '>
                <Link href={"/"} className='hover:text-[#212025]'>Home</Link>
                <Link href={"/about"} className='hover:text-[#212025]'>About</Link>
                <Link href={"/product"} className='hover:text-[#212025]'>Products</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Plant pots</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Ceramics</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Tables</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Chairs</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Crockery</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Tableware</Link>
                <Link href={"#"} className='hover:text-[#212025]'>Cutlery</Link>
                <span className='flex gap-3'>
                <Link href={"/cart"}> <ShoppingCart className='h-4 w-4   cursor-pointer'/></Link>
                < FaRegUserCircle className='h-4 w-4  cursor-pointer'/> 
                 <Search className='h-4 w-4 cursor-pointer'/>
                 </span>
                </div>
              </SheetContent>
            </Sheet>
            </div>

        </div>
        <div className="lowerpart text-[#726E8D] max-sm:hidden  p-3 flex gap-10 justify-center ">
           <Link href={"/"} className='hover:text-[#212025]'>Home</Link>
           <Link href={"/about"} className='hover:text-[#212025]'>About</Link>
           <Link href={"/product"} className='hover:text-[#212025]'>Products</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Plant pots</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Ceramics</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Tables</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Chairs</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Crockery</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Tableware</Link>
           <Link href={"#"} className='hover:text-[#212025]'>Cutlery</Link>
        </div>
    </nav>
  )
}

export default Navbar