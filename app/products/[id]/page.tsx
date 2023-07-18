import Quantity from '@/app/components/Quantity'
import { Products } from '@/app/utils/mock'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import AddToCart from '@/app/components/AddToCart'


const getProductsDetail=(id: number | string)=>{
  return Products.filter((product)=>product.id == id)
}

const sizes = ['XS','SM','MD','LG','XL']
export default function Page({params}:{params: {id: string}}){
    const result = getProductsDetail(params.id)
    
    return (  
      <div className='flex flex-wrap mt-16 py-10'>
        { result.map((product)=>(
            <div key={product.id} className='flex justify-between gap-6'>
                <div>
                  <Image src={product.image} alt={product.name}/>
                </div>
                <div>
                  <div>
                    <h1 className='text-2xl'>{product.name}</h1>
                    <h2 className='text-base text-gray-400 font-semibold'>{product.tagline}</h2>
                  </div>
                <div>
                  <h3 className='text-sm mt-6 font-semibold'>SELECT SIZE</h3>
                  <div className='flex gap-x-3'>
                  {sizes.map((item)=>
                      <div key={item} className='center w-6 h-6 mt-2 duration-300 border rounded-full hover:shadow-xl'>
                      <span className='text-[10px] cursor-pointer font-semibold text-center text-gray-600'>{item}</span>
                    </div>)
                  }
                  </div>
                  <div className='flex items-center gap-x-3 mt-6'>
                    <h3 className='text-[10px] font-semibold'>Quantity: </h3>
                    <Quantity/>
                  </div>
                  <div className='flex items-center mt-5 gap-x-4'>
                    <AddToCart/>
                    <h2 className='text-2xl font-bold '>${product.price.toFixed(2)}</h2>
                  </div>
                </div>
                </div>
            </div>
    ))}
    </div>
  )}