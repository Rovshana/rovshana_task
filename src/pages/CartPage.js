import React from 'react'
import { Cart } from '../components/Cart'
import { Sidebar } from '../components/shared/SideBar'

export function CartPage(props) {
    

    return (
        <div className='flex'>
        <Sidebar/>
            <Cart/>
        </div>
    )
}
