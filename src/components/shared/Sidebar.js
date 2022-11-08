import React from 'react'
import SidebarButtons from '../SidebarButtons'

import { SiDiscogs } from 'react-icons/si'
import { RiHome2Fill } from 'react-icons/ri'
import { RiPlayListFill } from 'react-icons/ri'
import { IoMdHeart } from 'react-icons/io'

export default function sidebar() {
  return (
    <div className='bg-[#1D1D1D] w-[15%] h-full p-3 flex flex-col text-white'>
      <div className='flex flex-col text-3xl py-2 items-center font-Kanit'><span>Moodie</span></div>
      <div className='flex-1 items-center gap-2 font-light px-3 py-2'>
        <SidebarButtons title="Inicio" to="/" icon={<RiHome2Fill/>}/>
        <SidebarButtons title="Coleções" to="/colecoes" icon={<SiDiscogs/>}/>
        <SidebarButtons title="Favoritas" to="/favoritas" icon={<IoMdHeart/>}/>
        <SidebarButtons title="Playlists" to="/playlists" icon={<RiPlayListFill/>}/>
      </div>
    </div>
  )
}
