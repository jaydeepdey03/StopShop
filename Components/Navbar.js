import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar';

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
                    <Sidebar />
                </div>
            </header>
        </div>
    )
}

export default Navbar
