"use client"
import Image from 'next/image'
// import React, { useState } from 'react'
import style from '../styles/Style.module.css'
import {BsFillSuitHeartFill, BsSearch, BsCartFill} from 'react-icons/bs'
import Link from 'next/link'
import { useState } from 'react'
import { clothes  } from '../page'
// import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiHeart} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import IconColorChanger from './Icon'
import {AiFillPlusCircle} from 'react-icons/ai'
// import { data } from 'autoprefixer'



export default function NewProduct({items}) {
  const [searchitem, setSearchitem] = useState('')
  function product(e) {
    setSearchitem(e.target.value)
  }

  // for like
  
  
  const [quantity, setQuantity] = useState(0)
  const handleDecrement = () => {
      setQuantity (preCount => preCount -1)
  }
   const handleIncrement = () => {
      setQuantity (preCount => preCount +1)
  }

// For adding


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


  const [count, setCount] = useState(0);

  // Function to toggle the counter
  const toggleCount = () => {
    setCount(count === 0 ? 1 : 0);
  };

    const itemfiltered = clothes.filter(pro => pro.name.toLowerCase().includes(searchitem.toLowerCase())) || pro.class
    const allItems = itemfiltered.length > 0 ? itemfiltered.map(pro => (
      <article key={pro.id} className={style.each}>
        <button type='submit' onClick={handleIconClick}><IconColorChanger/></button>
        <Link href={`/items/${pro.name.split(' ').join('')}`}>
        <Image src ={pro.image} alt = {pro.name} width={300} height={300} className={style.size}/>
            <h2 className='text-center pb-[18px] hover:text-[#ff8f9c]'>{pro.name} <br /> &#8358;{pro.price}</h2>
            <div className='grid justify-items-end'>
            <button type='submit' onClick={IncrementPlus}><BsCartFill size={25} className='hover:text-[#ff8f9c]'/></button>
            </div>
        </Link>
    </article>

 

    ))

    : (
      <h2></h2>
    )

    return (
      <>
      <div>
        
      <div className='border-b border-gray-200 py-6'>
        <div className='container sm:flex justify-between items-center'>
            <div className='font-bold text-[34px] text-center pb-4 sm:pb-0 text-blackish'>
                Wares
            </div>

            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                
            <input className='border-gray-200 p-2 px-4 rounded-lg w-full' type='text' placeholder='Your product name...' 
                value={searchitem}
                onChange={product}/>

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
        
        
        
        <input className='border-none p-2 px-4' type='text' 
                value={searchitem}
                onChange={product}/>

{/* <div className='relative'>
                    <HiOutlineShoppingBag />
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                    text-white grid place-items-center translate-y-'>
                        0
                    </div>
                    </div> */}


      <div className=' container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Product</h2>
         <br />
         <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3'>
         {allItems}
         </div>
         
    </div></div>
    </>
    )
  }
  