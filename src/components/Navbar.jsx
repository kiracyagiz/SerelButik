import React from 'react'
import logo from '../../images/logo.png'
import {BiDotsHorizontal} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex  flex-row justify-between h-[fit]'>
        <div>
            <img src={logo} className='w-[150px]' alt="" />
        </div>
        <div className='flex flex-row pt-16   px-6 gap-x-8'>
            <p className='hidden md:block'>ANASAYFA</p>
            <p className='hidden md:block'>HAKKIMIZDA</p>
            <p className='hidden md:block'>ÜRÜNLERİMİZ</p>
            <p className='hidden md:block'>İLETİŞİM</p>
            <BiDotsHorizontal size={30} className='block md:hidden'/>
        </div>
    </div>
  )
}

export default Navbar