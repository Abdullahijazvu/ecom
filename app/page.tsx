import Image from 'next/image'
import Hero from '@/app/views/Hero'
import ProductList from '@/app/views/ProductList'
import Promotion from '@/app/views/Promotion'
import Designer from '@/app/views/Designer'
import Newsletter from '@/app/views/Newsletter'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Promotion/>
      <ProductList/>
      <Designer/>
      <Newsletter/>
    </div>
  )
}
