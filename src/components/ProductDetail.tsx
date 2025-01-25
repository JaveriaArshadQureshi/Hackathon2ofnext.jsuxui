
'use client';

import { Product } from '../../types/products';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { addToCart } from '@/app/actions/actions';
import Swal from 'sweetalert2';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.name} added to cart`,
            showConfirmButton: false,
            timer: 1000,
        });

        addToCart(product);
    };

    return (
        <div className='w-screen mx-auto px-4 bg-slate-100 py-10 '>
            <main className='grid grid-cols-1 md:grid-cols-2 px-10'>
                <div className='aspect-square'>
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            height={500}
                            width={500}
                            className='h-[500px] w-[500px]'
                        />
                    )}
                </div>
                <div>
                    <h1 className='text-4xl font-normal pt-10'>{product.name}</h1>
                    <p className='text-2xl font-normal pt-5'>${product.price}</p>
                    <p className='text-[18px] font-normal pt-8'>product description</p>
                    <p className='text-sm font-normal pt-2'>{product.description}</p>
                    {/* <p className='text-sm font-normal pt-8'>{product.dimensions}</p> */}
                    <p className='pt-3'>Quantity</p>
                    <p className='text-sm font-normal pt-2 px-5 py-2 bg-white w-14'>{product.quantity}</p>

                    <div className='mt-10'>
                        <button
                            className='px-4 py-4 shadow-md bg-[#2A254B] mr-5 text-white  hover:bg-[#3d3577]'
                            onClick={(e) => handleAddToCart(e, product)}
                        >
                            Add to Cart
                        </button>
                        <button className='px-4 py-4 bg-white'>Save to favorite</button>
                    </div>
                </div>
            </main>
        </div>
    );
}