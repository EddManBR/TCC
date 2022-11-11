import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Head from './Head'

export default function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <Sidebar/>
        <div className='flex-1'>
            <Head/>
            <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}
