"use client"

import logo from "/public/Logo.webp"
import Image from "next/image"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"
import {BiSearch} from 'react-icons/bi'
import { useState } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from'react-icons/io'
import Expand from "./Expand"
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store"

const Header = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
    // const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-36" />
        </Link>
        <div className="lg:flex hidden justify-evenly items-center w-full">
        <ul className="flex space-x-4">
            <li><Link className="text-sm" href="/category/female">Female</Link></li>
            <li><Link className="text-sm" href="/category/male">Male</Link></li>
            <li><Link className="text-sm" href="/category/kids">Kids</Link></li>
            <li><Link className="text-sm" href="/products">All Products</Link></li>
        </ul>
        <div className="border flex items-center text-gray-600 px-3 rounded-md">
          <BiSearch/>
          <input
          type="text"
          className="pl-1 pr-5 py-1 w-80"
          placeholder="Search in our Store"
          />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}
        </span>
            <ShoppingCart />
        </div>
          </div>
          <div className="cursor-pointer" onClick={()=> setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ?
            <div className="flex lg:hidden">
              <IoMdClose/>
          </div>
          : 
          <div className="flex lg:hidden">
            <GiHamburgerMenu/>
          </div>  
          }
        {isNavbarOpen && <MobileNavbar/>}
          </div>
    </div>
  )
}

export default Header

const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
        <Expand item={{ label: 'Female', href: '/category/female' }} />
        <Expand item={{ label: 'Male', href: '/category/male' }} />
        <Expand item={{ label: 'Kids', href: '/category/kids' }} />
        <Expand item={{ label: 'All Products', href: '/products' }} />
    </div>
  )
}