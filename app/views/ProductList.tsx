import { Image as IImage} from 'sanity'
import { client } from '@/sanity/lib/client'
import ProductCard from '@/app/ProductCard';

export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        price,
        _id,
        title,
        image,
        category -> {
            name
        }
    }`);
    return res
}

interface IProduct {
    title: string,
    _id: string,
    description: string,
    image: IImage,
    price: number,
    category: {
        name: string
    }
}

export default async function Home(){
    const data: IProduct[] = await getProductData()

    return (
      <div className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10'>
        {data.map((item)=>(
          <ProductCard item={item}/>
        ))
    }
    </div>
    )
}