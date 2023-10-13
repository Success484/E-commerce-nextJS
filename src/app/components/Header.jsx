import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between item-center'>
          <div className='hidden lg:flex gap-1'>
            <p classsName='text-[30px] font-semibold'>Wares</p>
          </div>

<div className='text-gray-500 text-[12px]'>
   <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - &#8358;6,000
   </div>


  <div className='flex gap-4'>
    <select
    className='text-gray-500 text-[12px] w-[70px] bg-white' 
    name='currency'
    id='currency'>

    <option value='USD $'>USD &#36;</option>
    <option value='USD $'>EUR &#8364; </option>
    <option value='USD $'>NGN &#8358;</option>
    </select>


    <select className='text-gray-500 text-[12px] w-[80px] bg-white'
    name='language'
    id='language'>
 
    <option value="English">English</option> 
    <option value="french">French</option>
    <option value="German">German</option>
    </select>

    <section className='text-gray-500 text-[12px] w-[80px]'><Link href='/login'> Login </Link></section>

  </div>
        </div>
      </div>
    </div>
  )
}

export default Header