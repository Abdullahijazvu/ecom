// "use client"

// import { Image as IImage } from 'sanity'
// import { client } from './lib/client'
// import ProductCard from '@/app/components/ProductCard';

// export const getProductData = async () => {
//     const res = await client.fetch(`*[_type=="product"]{
//         price,
//         _id,
//         title,
//         image,
//         category -> {
//             name
//         }
//     }`);
//     return res
// }

// interface IProduct {
//     title: string,
//     _id: string,
//     description: string,
//     image: IImage,
//     price: number,
//     category: {
//         name: string
//     }
// }

// export default async function Home(){
//     const data: IProduct[] = await getProductData()

//     return (
//         <div className='py-5 z-20 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 md:block'>
//         {data.map((item)=>(
//             <div>
//                 <ProductCard item={item}/>
//             </div>
//         ))
//     }
//     </div>
//     )
// }