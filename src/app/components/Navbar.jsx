import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-red'>
               <Link className='navbar__link relative ' href="#">Home</Link>
               <Link className='navbar__link relative' href="/categories">Categories</Link>
               <Link className='navbar__link relative' href="#">Hot Offers</Link>
               <Link className='navbar__link relative' href="/login">Login</Link>
               <Link className='navbar__link relative' href="/signUp">Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar