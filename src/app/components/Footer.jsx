import React from 'react'
// import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
// import style from '../styles/Style.module.css'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
        <h1 className='lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
          <span className='text-red-400'>free</span> until you are ready to launch
        </h1>
        <div>
          <input type="text" name="message" id="" placeholder='Enter your msg' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
          <button className='bg-red-400 hover:bg-red-500 duration-300 px-5 py-2.5 font[poppins] rounded-md text-white md:w-auto w-full'>
            Send Message
          </button>
        </div>
      </div>
    </footer>
  )
}
