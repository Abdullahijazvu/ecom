import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import heroImage from '@/public/header.webp'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import img from '@/public/next.svg'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
        {/* Left Side */}
        <div className='flex-1'>
            <Badge className="py-3 px-6 rounded-lg bg-blue-100 text-blue-900 hover:bg-blue-200 cursor-pointer mt-10 tracking-widest text-1xl">Sale 70%</Badge>
            <h1 className='mt-10 text-4xl tracking-wide font-bold lg:text-5xl'>An Industrail Take on Streetwear</h1>
            <p className="leading-7 [%:not(:first-child)]:mt-6 mt-10">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Link href={"/products"}>
              <Button className="bg-black h-12 px-8 mt-10">
                <ShoppingCart className="mr-2 h-4 w-4"></ShoppingCart>
                Start Shopping
              </Button>
            </Link>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
              <Image src={img} alt="img" className="w-20"/>
              <Image src={img} alt="img" className="w-20"/>
              <Image src={img} alt="img" className="w-20"/>
              <Image src={img} alt="img" className="w-20"/>
            </div>
        </div>
        {/* Right Side */}
        <div className='flex-1'>
            <Image src={heroImage} alt="hero"/>
        </div>
    </section>
  )
}

export default Hero