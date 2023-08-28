import React from 'react';
import logo from '../../images/logo.png';
import { BiMenu } from 'react-icons/bi';
import { MdHome, MdInfo, MdLocalMall, MdMailOutline } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4">
      <div className="flex items-center">
        <img src={logo} className="w-12" alt="Logo" />
        <h1 className="ml-2 text-xl font-bold">SEREL BUTİK</h1>
      </div>
      <div className="hidden md:flex space-x-4 text-center items-center  ">
        <a href="#" className="hover:text-blue-500 flex gap-x-4"><MdHome size={20} /> Anasayfa</a>
        <a href="#" className="hover:text-blue-500 flex gap-x-4"><MdInfo size={20} /> Hakkımızda</a>
        <a href="#" className="hover:text-blue-500 flex gap-x-4 "><MdLocalMall size={20} /> Ürünlerimiz</a>
        <a href="#" className="hover:text-blue-500 flex gap-x-4 "><MdMailOutline size={20} /> İletişim</a>
      </div>
      <div className="md:hidden">
        <BiMenu className="text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
