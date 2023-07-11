import P1 from '/public/next.svg'
import ProductCard from '@/app/ProductCard'
import { Products } from '@/app/utils/mock'
import { StaticImageData } from 'next/image'

const AllProducts=()=>{
    return (
          <div className='flex justify-between flex-wrap mt-16 py-10'>
            {Products.map((product)=>(
              <ProductCard key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>
            ))}
          </div>
    )
  }
export default AllProducts