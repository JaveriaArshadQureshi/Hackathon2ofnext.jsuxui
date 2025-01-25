
import ProductDetail from '@/components/ProductDetail';
import { Product } from '../../../../types/products';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';


interface ProductDetailProps {
    params: { slug: string };
}

async function getProducts(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0] {
            _id,
            name,
            image,
            price,
            description,
            dimensions,
            quantity,
        }`,
        { slug }
    );
}

export default async function Page({ params }: ProductDetailProps) {
    const { slug } = params;
    const product = await getProducts(slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return <ProductDetail product={product} />;
}