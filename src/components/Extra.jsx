import React from 'react'
import {FaShippingFast} from 'react-icons/fa'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {TbDiscount2Off} from 'react-icons/tb'
const Extra = () => {
  return (
    <div className='flex flex-col   gap-y-8 md:flex-row justify-between p-8  md:p-12 mt-8 gap-x-6 mx-0  md:mx-24 h-fit'>
        <div className='flex gap-x-8'>
            <FaShippingFast size={50}/>
            <div>
                <p className='text-lg text-bold'>Bedava Kargo Seçeneği</p>
                <p className='text-sm '>Belli bir fiyat üzerinden alışveriş yaptığınızda kargo bedava!</p>
            </div>
        </div>
        <div className='flex gap-x-8'>
            <AiOutlineFieldTime size={50}/>
            <div>
                <p className='text-lg text-bold'>7/24 Sipariş </p>
                <p className='text-sm max-w-xs'>İstediğiniz Zaman Sipariş İmkanı!</p>
            </div>
        </div>
        <div className='flex gap-x-8'>
            <RiMoneyDollarCircleLine size={50}/>
            <div>
                <p className='text-lg text-bold'>Hesaplı Ürünler</p>
                <p className='text-sm max-w-xs'>Normal Alışverişlerinizden çok daha hesaplı!</p>
            </div>
        </div>
        <div className='flex gap-x-8'>
            <TbDiscount2Off size={50}/>
            <div>
                <p className='text-lg text-bold'>İndirimler ürünler</p>
                <p className='text-sm max-w-xs'>Sevdiğiniz ürüne İNDİRİM!</p>
            </div>
        </div>
    </div>
  )
}

export default Extra