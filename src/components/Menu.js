import React, { useEffect, useState } from 'react'
import { productApi } from '../api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Menu(props) {
    const [data, setData] =  useState([])
    const state = useSelector(state=>state.products)
    
    const [visible, setVisible] = useState(8)
    const navigate = useNavigate()
    useEffect(() => {
       getData() 
    }, [])
const getData = ()=>{
    productApi.then((res)=>{
        setData(res.data.product)
                }).catch(err=>{
                    console.log(err)
                })
}

const loadMore = ()=>{
    setVisible(visible +4)
}
// 
    return (
        <div className='mx-auto "max-w-[1400px] px-4 py-12'>
        {/* continer */}
            <div className='w-[1000px] m-auto h-screen pt-4 '>
               
                {/* cards */}
                <div className='grid grid-cols-4 gap-4'>
                    {
                        data.slice(0, visible)?.map((item, index)=>(
                            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 realtive mt-2"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <span className="bg-black p-1 font-medium text-[#F1D5BB] rounded-lg">
                  ${item.price} 
                </span>
              </div>
              <div className="absoltue top-100 left-0">
                <button
                  className=" m-2 border-none bg-black text-[#F1D5BB] font-bold text-md hover:bg-[#F1D5BB] hover:text-black"
                  onClick={()=>navigate('/productdetail', {state: {...item}})} 
                >
                  {" "}
                  Order Now
                </button>
              </div>
            </div>

                        ))
                    }
                    {
                        visible < data.length ? (
                            <div className='flex justify-center items-center mx-auto content-center mt-8'>
                            <button  className="bg-black w-[118px] h-[30px] font-medium  text-[#F1D5BB] border-none " onClick={loadMore}>Load More</button>
                            </div>
                        ) : " "
                    }
                    
                   
                    
                </div>

            </div>
        </div>
    )
}

