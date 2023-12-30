import { Product } from './types'
import P1 from '@/public/product-1.webp'

export const Products: Product[] = [
    {
        id:"1",
        name: "Product-1",
        tagline: "Dress",
        category: "female",
        price: 100,
        image: P1
    },
    {
        id:"2",
        name: "Product 2",
        tagline: "Dress",
        category: "female",
        price: 200,
        image: P1
    },
    {
        id:"3",
        name: "Product 3",
        tagline: "Dress",
        category: "male",
        price: 600,
        image: P1
    },
    {
        id:"4",
        name: "Product 4",
        tagline: "Dress",
        category: "male",
        price: 550,
        image: P1
    },
    {
        id:"5",
        name: "Product 5",
        tagline: "Shirt",
        category: "male",
        price: 650,
        image: P1
    },
    {
        id:"6",
        name: "Product 6",
        tagline: "Shirt",
        category: "kids",
        price: 660,
        image: P1
    },
]