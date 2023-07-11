import P1 from '@/public/product-1.webp'
import ProductCard from '@/app/ProductCard'
import { Products } from '@/app/utils/mock'

const ProductList = () => {
  const productChecks = Products.slice(0,3)
  return (
    <div>
      <p className='flex justify-center text-3xl font-bold mt-10 mb-10'>Check What We Have</p>
        <div className='flex justify-evenly mt-16'>
          {productChecks.map((product)=>(
            <ProductCard key={product.id} title={product.name} price={product.price} img={P1} category={product.category} id={product.id}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList