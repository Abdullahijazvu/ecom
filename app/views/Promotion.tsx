import Image from "next/image"
import P1 from '@/public/1st-1.jpg'
import P2 from '@/public/2nd-2.jpg'
import P3 from '@/public/3rd-3.jpg'
import Link from "next/link"
import { Button } from "@/components/ui/button"

const promotion = () => {
  return (
    <section>
        <p className='flex justify-center text-3xl font-bold mt-10 mb-10'>Our Promotions Events</p>
        <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
        <div className="flex flex-col space-y-5 lg:basis-2/5 lg:justify-between">
        <div className="flex basis-1 flex-col items-center bg-[#d6d6d8] px-8 pt-8 text-[#212121] custom1:flex-row custom1:pb-0 lg:basis-1/2">
            <h1>GET UP TO 60%</h1>
            <p>For the summer season</p>
            <Image src={P1} alt="Img"/>
        </div>
        <div className="flex basis-1 flex-col items-center space-y-5 bg-[#212121] p-8 text-white lg:basis-1/2">
            <p>Get 30% Off</p>
            <div>
                <p>USE PROMO CODE</p>
                <Link href={"/"}>
                    <Button >DINE WEEKEND SALE</Button>
                </Link>
            </div>
        </div>
        </div>  
        <div className="flex w-full flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 lg:lg:basis-3/5">
            <div className="flex basis-1 flex-col bg-[#d7d7d9] px-6 pt-6 text-[#212121] md:basis-1/2 justify-between">
            <h1>GET UP TO 60%</h1>
            <p>For the summer season</p>
            <Image src={P2} alt="Img"/>
            </div>
            <div className="flex basis-1 flex-col bg-[#efe1c7] px-6 pt-6 text-[#212121] md:basis-1/2 justify-between">
            <h1>GET UP TO 60%</h1>
            <p>For the summer season</p>
            <Image src={P3} alt="Img"/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default promotion