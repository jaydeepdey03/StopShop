import React, { useState } from 'react'
import '../styles/Sidebar.module.css'
import { AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle,AiOutlineMinusCircle } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'

const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    function toggle() {
        setShowSidebar(!showSidebar);
    }


    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <AiOutlineShoppingCart onClick={toggle} className='h-8 w-8 cursor-pointer' />
            )}

            <div
                className={`top-0 right-0 w-[100vw] md:w-[35vw] bg-gray-100  p-10 pl-20 text-black fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <div className='mt-10 flex flex-col space-y-8'>
                    <h1 className='text-4xl font-bold'>Your Cart</h1>
                    <ol className='list-decimal font-semibold text-2xl'>
                        <li className='text-2xl'>
                            <div className='item flex my-5 space-x-5'>
                                <div>Items Name</div>
                                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillPlusCircle className='text-red-600 text-2xl' /> <span className='mx-4 text-2xl'>1</span><AiFillMinusCircle className='text-red-600 text-2xl' /></div>
                            </div>
                        </li>
                        <li className='text-2xl'>
                            <div className='item flex my-5 space-x-5'>
                                <div>Items Name</div>
                                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillPlusCircle className='text-red-600 text-2xl' /> <span className='mx-4 text-2xl'>1</span><AiFillMinusCircle className='text-red-600 text-2xl' /></div>
                            </div>
                        </li>
                        <li className='text-2xl'>
                            <div className='item flex my-5 space-x-5'>
                                <div>Items Name</div>
                                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillPlusCircle className='text-red-600 text-2xl' /> <span className='mx-4 text-2xl'>1</span><AiFillMinusCircle className='text-red-600 text-2xl' /></div>
                            </div>
                        </li>
                        <li className='text-2xl'>
                            <div className='item flex my-5 space-x-5'>
                                <div>Items Name</div>
                                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillPlusCircle className='text-red-600 text-2xl' /> <span className='mx-4 text-2xl'>1</span><AiFillMinusCircle className='text-red-600 text-2xl' /></div>
                            </div>
                        </li>
                    </ol>
                    <div className='flex space-x-20'>
                        <button class="bg-red-500 hover:bg-red-700 flex justify-center items-center space-x-3 text-white font-bold py-2 px-4 rounded">
                           <BsBagCheck /> <span> Checkout</span>
                        </button>
                        <button class="bg-red-500 hover:bg-red-700 flex justify-center items-center space-x-3 text-white font-bold py-2 px-4 rounded">
                           <AiOutlineMinusCircle /> <span> Checkout</span>
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
