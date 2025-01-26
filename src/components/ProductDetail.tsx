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
        <div className='w-full mx-auto px-4 bg-slate-100 py-10'>
            <main className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10'>
                <div className='aspect-square w-full'>
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            height={500}
                            width={500}
                            className='h-[500px] w-[500px] object-cover'
                        />
                    )}
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-4xl font-normal pt-6 md:pt-2'>{product.name}</h1>
                    <p className='text-xl md:text-2xl font-normal pt-3 md:pt-5'>${product.price}</p>
                    <p className='text-base md:text-[18px] font-normal pt-4 md:pt-8'>Product Description</p>
                    <p className='text-sm font-normal pt-2'>{product.description}</p>
                    <p className='pt-3'>Quantity</p>
                    <p className='text-sm font-normal pt-2 px-5 py-2 bg-white w-14'>{product.quantity}</p>

                    <div className='mt-6 md:mt-10'>
                        <button
                            className='px-4 py-2 md:px-4 md:py-4 shadow-md bg-[#2A254B] mr-5 text-white hover:bg-[#3d3577]'
                            onClick={(e) => handleAddToCart(e, product)}
                        >
                            Add to Cart
                        </button>
                        <button className='px-4 py-2 md:px-4 md:py-4 bg-white'>Save to favorite</button>
                    </div>
                </div>
            </main>
        </div>
    );
}