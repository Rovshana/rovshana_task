import React from 'react'
import { useLocation } from 'react-router-dom'

export function ProductDetail(props) {
    const location = useLocation()
    console.log(location)

    return (
        <div >
        {/* as container */}
            <div className='w-[1000px] m-auto h-screen '>
                {/* center s*/}
                <div className=" w-[900px] h-[600px]  pt-4 bg-[#F1D5BB] mt-5 ">
                    <div className=''>
                    <img  src={location.state.photo} alt={location.state.name}/>
                    </div>
                    {/* details */}
                    <div>
                        <p>Name</p>
                        <span>Price</span>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button className="border-none w-[500px] p-4 mt-5  bg-black text-white">Add to Cart</button>
                    </div>
                </div>


                

            </div>
            
        </div>
    )
}
