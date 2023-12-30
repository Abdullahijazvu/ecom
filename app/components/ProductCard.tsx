"use client"

import { FC } from 'react';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

const ProductCard: FC<{ item: any }> = ({ item }) => {
  const handleAddToCart = async () => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({
        product_id: item.id,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
          <Image src={urlForImage(item.image).url()} alt="product" width={300} height={300} />
          <h2>{item.title}</h2>
      <h3>${item.price}</h3>
      <button onClick={handleAddToCart} className="border py-2 px-6 rounded bg-blue-600 text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

// import Image, { StaticImageData } from "next/image";
// import AddToCart from "./AddToCart";
// import Link from "next/link";

// function ProductCard(props: {
//   title: string;
//   price: number;
//   img: StaticImageData;
//   category: string;
//   id: number | string;
// }) {
//   return (
//     <Link href={`/products/${props.id}`}>
//       <div className="py-5">
//         <Image src={props.img} alt="product" />
//         <h3 className="font-bold text-lg mt-3">{props.title}</h3>
//         <p className="font-bold text-lg">${props.price}</p>
//         <p className="font-bold text-lg">
//           Category{" "}
//           <span className="text-base font-normal capitalize">
//             {props.category}
//           </span>
//         </p>
//         <AddToCart />
//       </div>
//     </Link>
//   );
// }

// export default ProductCard;
