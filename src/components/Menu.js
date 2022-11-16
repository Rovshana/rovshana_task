import React, { useEffect, useState } from 'react'
import { productApi } from '../api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Menu(props) {
    const [data, setData] =  useState([])
    const state = useSelector(state=>state.products)
    console.log("reduxdan",state)
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
    return (
        <>
        {/* continer */}
            <div className='w-[1000px] m-auto h-screen '>
               
                {/* cards */}
                <div className='grid grid-cols-4 gap-4'>
                    {
                        data.slice(0, visible)?.map((item, index)=>(
                            <div className='w-[224px] h-[275px] mt-5' key={index}>
                        <div className='cursor-pointer' onClick={()=>navigate('/productdetail', {state: {...item}})} >
                            <img  src={item.photo} alt="sushi" className='w-[200px] h-[200px] object-cover'/>
                        </div>
                        <div className='flex justify-center items-center pt-2'>
                        <p className='font-[500] text-[20px]'>{item.name}</p>
                        </div>
                    </div>

                        ))
                    }
                    {
                        visible < data.length ? (
                            <div className='flex justify-center items-center mx-auto content-center mt-8'>
                            <button  className="bg-black w-[118px] h-[30px]  text-white border-none " onClick={loadMore}>Load More</button>
                            </div>
                        ) : " "
                    }
                    
                   
                    
                </div>

            </div>
        </>
    )
}

