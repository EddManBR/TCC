import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <div>sidebar</div>
        <div>
            <div>Head</div>
            <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}
