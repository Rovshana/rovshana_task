import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/ProductSlice'
import {Sidebar} from '../components/shared/SideBar'
export function ProductDetail(props) {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const dispatch = useDispatch()

    return (
        <div className='flex' >
            <Sidebar/>
        {/* as container */}
            <div className='w-[1000px] m-auto h-screen flex justify-center items-center  '>
                {/* center s*/}
                <div className=" flex bg-[#F1D5BB] rounded-lg ">
                    <div className='mr-4'>
                    <img className=' w-[500px] h-[500px] object-cover rounded-full p-6'  src={location.state.photo} alt={location.state.name}/>
                    </div>
                    {/* details */}
                    <div className='pt-4  '>
                    <div className='pb-10 flex justify-center items-center'>
                        <p className='font-medium text-[30px] pl-4'>{location.state.name}</p>
                       
                    </div>
                    
                    <div className=' flex justify-center items-center'>
                        <span className='font-normal text-[30px] mr-5 inline line-through'>${location.state.oldPrice}</span>
                        <span className='font-medium text-[50px] ml-2'>${location.state.price}</span>
                    </div>
                    <div className='flex justify-center items-center pt-10' onClick={()=>dispatch(addToCart(location.state))}>
                    
                        <button  onClick={()=> navigate('/cartpage') } className="border-none w-[500px] mr-2 p-4 mt-5  bg-black text-white">Add to Cart</button>
                    </div>
                    </div>
                </div>


                

            </div>
            
        </div>
    )
}
