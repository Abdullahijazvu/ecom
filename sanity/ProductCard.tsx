// import Image from 'next/image'
// import { urlForImage } from './lib/image'

// const ProductCard: FC<{item: any}> = ({item}) => {

//     const handleAddToCart = async () => {
//         const res = await fetch("/api/cart", {
//             method: "POST",
//             body: JSON.stringify({
//                 product_id: item._id
//             })
//         })
//         const result = await res.json()
//         console.log(result);
//     }

//     return (
//             <div>
//             <Image src={urlForImage(item.image).url()} alt='product'/>
//             <h3 className='font-bold text-lg mt-3'>{item.title}</h3>
//             <p className='font-bold text-lg'>${item.price}</p>
//             <p className='text-base font-normal capitalize'>Category: <span className='text-base font-normal'>{item.category}</span></p>
//             <button onClick={handleAddToCart} className='border py-2 px-6 rounded bg-blue-600 text-white'>Add to Cart</button>
//             </div>
//         )
// }

// export default ProductCard