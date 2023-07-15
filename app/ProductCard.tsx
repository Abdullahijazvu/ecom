"use client"
import { Image as IImage} from 'sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { FC } from 'react';

const ProductCard:FC<{item: any}> = ({item}) => {

  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      })
    })
    const result = await res.json()
    console.log(result);
  }
    return (
          // <div className='py-5 z-20 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 md:block'>
          <div>
                <Image src={urlForImage(item.image).url()} alt="product" width={300} height={300} />
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <button onClick={handleAddToCart} className='border py-2 px-6 rounded bg-blue-600 text-white'>Add to Cart</button>
            </div>
    )
}

export default ProductCard