import logo from "/public/Logo.webp"
import Image from "next/image"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-55 h-8" />
        </Link>
        <ul className="flex gap-x-10">
            <li><Link className="text-sm" href="/category/female">Female</Link></li>
            <li><Link className="text-sm" href="/category/male">Male</Link></li>
            <li><Link className="text-sm" href="/category/kids">Kids</Link></li>
            <li><Link className="text-sm" href="/products">All Products</Link></li>
        </ul>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
            <ShoppingCart />
        </div>
    </div>
  )
}

export default Header