import React from 'react'
import { Menu } from '../components/Menu'
import { Sidebar } from '../components/shared/SideBar'

export function MenuContainer(props) {
    

    return (
        <div className='flex'>
        <Sidebar />
        <Menu/>
            
        </div>
    )
}
