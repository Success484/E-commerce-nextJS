"use client"
import Image from 'next/image'
import React from 'react'
import style from '../styles/Style.module.css'
import IconColorChanger from '../components/Icon'
import { BsCartFill } from 'react-icons/bs'
import { useState } from 'react'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { allSuit } from './page'








export default function Catr() {

  const [quantitie, setQuantitie] = useState(0)
  const DecrementHandle = () => {
      setQuantity (preCount => preCount -1)
  }
   const IncrementPlus = () => {
      setQuantitie (preCount => preCount +1)
  }


  const [iconColor, setIconColor] = useState('black')

  const handleIconClick = () => {
    // Change the color to a different one when clicked
    setIconColor(iconColor === 'black' ? 'red' : 'black');
  };


  const AllSuit = allSuit.map(Suits => (
    <section key={Suits.id} className={style.each}>
      <div className='flex justify-between'>
        <button type='submit' onClick={handleIconClick}><IconColorChanger/></button>
        </div>
        <Link href={`/items/${Suits.name.split(' ').join('')}`}>
        <Image src={Suits.image} height={300} width={300} alt={Suits.name} className={style.size}/>
        <h2 className='text-center pb-[18px] hover:text-[#ff8f9c]'>{Suits.name} <br /> &#8358;{Suits.price}</h2>
        </Link>
        <div className='grid justify-items-end'>
            <button type='submit' onClick={IncrementPlus}><BsCartFill size={25} className='hover:text-[#ff8f9c]'/></button>
            </div>
    </section>
    
  ))
  return (
     <div>
      <div className='border-b border-gray-200 py-6'>
        <div className='container sm:flex justify-between items-center'>
            <div className='font-bold text-[34px] text-center pb-4 sm:pb-0 text-blackish'>
                Wares
            </div>

            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                
            <input className='border-gray-200 p-2 px-4 rounded-lg w-full' type='text' placeholder='Your product name...' 
                // value={searchitem}
                // onChange={product}
                />

                <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer' size={20}/>
            </div>

            <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
                <BiUser />

                {/* <div className='relative'>
                    <FiHeart />
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                    text-white grid place-items-center translate-y-'>
                       {count}
                    </div>
                    </div> */}
                    <div className='relative'>
                    <Link href={"/"}><BsCartFill /></Link>
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                    text-white grid place-items-center translate-y-'>
                      {quantitie}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3'>
    {AllSuit}
    </div>
    </div>
  )
}
