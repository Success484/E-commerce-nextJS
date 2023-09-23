import React from 'react'
import Footer from './Footer'
// import FooterList from './FooterList'
import Link from 'next/link'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'


export default function ItemsList() {
  return (
    <div className='bg-gray-900'>
    <footer className='bg-gray-900 text-white'>
      <Footer />
        <div className='md:flex md:justify-between md:items-center sm:px-12 p-6'>
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-5 text-gray-500'>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>T-shirt and jean</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Short and t-shirt</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Full pack belt</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>brown bag</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>afliate market</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Everything you need</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Our journey</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Our award</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Company policies</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>And Terms</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Coustomers</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Reviews</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Our workers</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Contact us</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Stores Location</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>About us</Link></li>
        </ul>
    </footer>
     <span className=' grid grid-cola-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-8 text-gray-400 text-sm pb-8'>
      <span>© 2020-2023. Allright reserved.</span>
      <span>Terms . privacy policy</span>
      <span className='flex gap-8'><div className='header_top__icon_wrapper'>
            <BsFacebook size={30}/>
            </div>
            <div className='header_top__icon_wrapper'>
            <BsTwitter size={30}/>
            </div>
            <div className='header_top__icon_wrapper'>
            <BsInstagram size={30}/>
            </div>
            <div className='header_top__icon_wrapper'>
            <BsLinkedin size={30}/>
            </div></span>
     </span>
     </div>
   
  )
}