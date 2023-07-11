import Image, {StaticImageData} from 'next/image'
import Link from "next/link"

function ProductCard(props:{
  title: string; 
  price:number;
  img:StaticImageData; 
  category:string; 
  id: number
}) {
  return (
    <Link href={`/products/${props.id}`}>
      <div className='py-5 z-20 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 md:block'>
        <Image src={props.img} alt='product'/>
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
        <p className='text-base font-normal capitalize'>Category: <span className='text-base font-normal'>{props.category}</span></p>
    </div>
    </Link>
  )
}

export default ProductCard