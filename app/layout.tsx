import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "@/app/components/Provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Header/>
        <main className='mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20'>{children}</main>
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
