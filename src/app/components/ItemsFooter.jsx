import React from 'react'
import Footer from './Footer'
// import FooterList from './FooterList'
import Link from 'next/link'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'


export default function ItemsList() {
  const currentYear = new Date().getFullYear()
  const fixedYear = 2021
  return (
    <div className='bg-gray-900'>
    <footer className='bg-gray-900 text-white'>
      <Footer />
        <div className='md:flex md:justify-between md:items-center sm:px-12 p-6'>
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-5 text-gray-500'>
          <li><Link href="/bags" className='hover:text-[#ff8f9c]'>Our latest bags</Link></li>
          <li><Link href="/glasses" className='hover:text-[#ff8f9c]'>Nice glasses</Link></li>
          <li><Link href="/coat" className='hover:text-[#ff8f9c]'>Soft coat</Link></li>
          <li><Link href="/briefcases" className='hover:text-[#ff8f9c]'>Our briefcases</Link></li>
          <li><Link href="#" className='hover:text-[#ff8f9c]'>Afliate market</Link></li>
          <li><Link href="/" className='hover:text-[#ff8f9c]'>Home page</Link></li>
          <li><Link href="/caps" className='hover:text-[#ff8f9c]'>Face cap</Link></li>
          <li><Link href="/bags" className='hover:text-[#ff8f9c]'>Our bags</Link></li>
          <li><Link href="/workers" className='hover:text-[#ff8f9c]'>Our workers</Link></li>
          <li><Link href="/about" className='hover:text-[#ff8f9c]'>About us</Link></li>
        </ul>
    </footer>
     <span className=' grid grid-cola-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-8 text-gray-400 text-sm pb-8'>
      <span>&#169; {fixedYear}-{currentYear} Allright reserved.</span>
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