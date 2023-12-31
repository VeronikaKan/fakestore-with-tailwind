import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Details = ({ card }) => {
    const [inform, setInform] = useState({})

    useEffect(() => {
        const getData = async () => {
            let { data } = await axios(`https://fakestoreapi.com/products/${card}`)
            setInform(data)
        }
        getData()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        let arr = JSON.parse(localStorage.getItem("product")) || []
        arr[0] ? arr.forEach((el,i) => {
            if (el.id !== inform.id) {
                arr = [...arr, inform]
            }else {
                 arr = [...arr] }
        }) : [...arr, inform]
        localStorage.setItem("product", JSON.stringify([...arr,inform]))

        // setProducts([...arr,inform])
    }
    return (
        <div>
            <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={inform.image} className="w-full relative z-10" alt="" />
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{inform.title}</h1>
                                <p className="text-sm">{inform.description}</p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{inform.price}</span>

                                </div>
                                <div className="inline-block align-bottom">
                                    <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold" onClick={handleClick}><i className="mdi mdi-cart -ml-2 mr-2" ></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Details