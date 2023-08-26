import React from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <div className=' flex justify-between '>
        <div>
            <img src={logo} className='w-[140px] h-auto' alt="" />
        </div>
        <div className='flex gap-x-6 mt-12 mx-6'>
            <p>Anasayfa</p>
            <p>Hakkımızda</p>
            <p>Ürünlerimiz</p>
            <p>İletişim</p>
        </div>
    </div>
  )
}

export default Navbar