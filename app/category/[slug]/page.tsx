import ProductCard from '@/app/ProductCard'
import { Products } from '@/app/utils/mock'
import { StaticImageData } from 'next/image'

const getProductsByCategory=(category: string)=>{
    return Products.filter((product)=>product.category === category)
    
  }

export default function Page({ params }: { params: { slug: string } }){
    const result = getProductsByCategory(params.slug)
    console.log(result);
    
    return (
      <div className='flex justify-between flex-wrap mt-16 py-10'>
      {result.length > 0 ? (
      result.map((product) => (
      <ProductCard 
      key={product.id} 
      title={product.name} 
      price={product.price} 
      img={product.image as StaticImageData}
      category={product.category}
       />
    )) 
    ) : (<p>No Products Found here</p>
    )}
  </div>
)
}