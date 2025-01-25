// import Image from 'next/image'
// import React from 'react'

// const product = () => {
//   return (
//     <div className='w-[1280] m-auto flex flex-col justify-center items-center '>
      
//       <div  className='grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4  px-14'>
//         <div className='p-2 md:p-4'> 
//         <div className='transform transition-transform duration-300 hover:scale-105'>
//             <Image src="/images/photo.jpg " alt="chair " width={305} height={462}  />
//             </div>
//             <h5 className='mt-2 md:mt-5 text-sm md:text-[16px]'>The Dandy chair</h5>
//             <p className='text-sm md:text-[16px]'>£250</p>
//         </div>

//         <div className='p-2 md:p-4'> 
//         <div className='transform transition-transform duration-300 hover:scale-105'>
//             <Image src="/images/photo1.jpg " alt="pots" width={305} height={462} />
//             </div>
//             <h5 className='mt-2 md:mt-5 text-sm md:text-[16px]'>Rustic Vase Set</h5>
//             <p className='text-sm md:text-[16px]'>£155</p>
//         </div>

      

//         <div className='p-2 md:p-4'> 
//         <div className='transform transition-transform duration-300 hover:scale-105'>
//             <Image src="/images/photo2.jpg " alt="vase " width={305} height={462} />
//             </div>
//             <h5 className='mt-2 md:mt-5 text-sm md:text-[16px]'>The Silky Vase</h5>
//             <p className='text-sm md:text-[16px]'>£125</p>
//         </div>

//         <div className='p-2 md:p-4 '> 
//           <div className='transform transition-transform duration-300 hover:scale-105'>
//             <Image src="/images/photo3.jpg " alt="The Lucy Lamp " width={305} height={462} />
//             </div>
//             <h5 className='mt-2 md:mt-5 text-sm md:text-[16px]' >The Lucy Lamp</h5>
//             <p className='text-sm md:text-[16px]'>£399</p>
//         </div>
//         </div>

//         <div className='mt-8'>
//         <button className=' bg-[#f9f9f9]  py-2 px-3 shadow-md hover:bg-black hover:text-[#f9f9f9]'>
//             View Collection
//         </button>
//         </div>
        
       

//     </div>

    
//   )
// }

// export default product

"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '.../../../types/products';
import { client } from '@/sanity/lib/client';
import { four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';


const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchData: Product[] = await client.fetch(four);
      setProducts(fetchData);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <main className=" w-[1280] flex flex-col justify-center items-center p-4 m-auto">
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">View all products</h2>
        </div> */}

        {/* Products */}
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4   md:gap-4 px-7 py-4  md:px-14  md:py-8">
          {products.map((product) => (
            <div key={product._id}  className='p-2 md:p-4'>
              <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <div className="relative h-auto w-full">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    height={462}
                    width={305}
                    className="h-[125px] w-[115px] md:h-[315px] md:w-[305px] transform transition-transform duration-300 hover:scale-105"
                  />
                
                </div>
              )}
              <h3 className="text-sm md:text-[16px] font-semibold mt-2 md:mt-4">{product.name}</h3>
              <p className=" text-sm md:text-[16px] text-gray-600">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className='mt-8'>
        <button className=' bg-[#f9f9f9]  py-2 px-3 shadow-md hover:bg-black hover:text-[#f9f9f9]'>
            View Collection
        </button>
        </div>
      </main>
    </div>
  );
};

export default Page;