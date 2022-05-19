import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='w-full shadow-lg'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src='/redicon.jpg' className='w-10 h-10 rounded-full' alt="" />
                        <span className="ml-3 text-xl">Stop Shop</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={`/tshirts`} ><a className="mr-5 hover:text-gray-900">T-Shirt</a></Link>
                        <Link href={`/hoodies`} ><a className="mr-5 hover:text-gray-900">Hoodies</a></Link>
                        <Link href={`/mugs`} ><a className="mr-5 hover:text-gray-900">Mug</a></Link>
                        <Link href={`/stickers`} ><a className="mr-5 hover:text-gray-900">Stickers</a></Link>
                    </nav>
                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                    <AiOutlineShoppingCart className='h-8 w-8' />
                </div>
            </header>
        </div>
    )
}

export default Navbar
