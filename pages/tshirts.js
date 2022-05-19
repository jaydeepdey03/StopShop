import React from 'react'

const iterableObj = [
    {
        id: 1,
        category: "T-Shirt",
        name: "The Catalyzer",
        price: "₹10",
        image: "https://m.media-amazon.com/images/I/81GMdcSrInL._UL1500_.jpg"
    },
    {
        id: 2,
        category: "T-Shirt",
        name: "The Catalyzer",
        price: "₹10",
        image: "https://m.media-amazon.com/images/I/81GMdcSrInL._UL1500_.jpg"
    },
    {
        id: 3,
        category: "T-Shirt",
        name: "The Catalyzer",
        price: "₹10",
        image: "https://m.media-amazon.com/images/I/81GMdcSrInL._UL1500_.jpg"
    },
]

const Tshirt = () => {
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {iterableObj.map(item => (
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-96 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block m-auto" src={item.image} />
                                </a>
                                <div className="mt-4 text-center">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                    <p className="mt-1">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Tshirt