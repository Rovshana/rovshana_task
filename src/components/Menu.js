import React, { useEffect } from 'react'
import { productApi } from '../api'

export function Menu(props) {
    useEffect(() => {
        productApi.then(res=>{
            console.log(res)
        })
    }, [])

    return (
        <>
            
        </>
    )
}
