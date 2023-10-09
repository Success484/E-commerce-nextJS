import React from 'react'
import style from '../styles/Style.module.css'
import Image from 'next/image'
import Workers from '../workers/Workers'

export default function page() {
  return (
    <div className='grid'>
    <div className='bg-white h-[300px] w-[100%] grid justify-center items-center'>
        <div><p className='grid justify-center items-center text-[40px] text-center'>About us</p></div>
    </div>

    <div className="bg-blue-400 w-full">
         <div className='text-white text-center p-10 w-full lg:flex md:flex sm:grid'>
         <div className='lg:text-[17px] md:text-[20px] text-white sm:text-[40px] text-center pb-3 mx-10 '>OUR MISSION</div>
         <p className='ml-[40px] text-left'>
            At Wares, our mission is simple yet powerful: to enhance your life through quality products that inspire and elevate your everyday experiences. We believe that the right products have the potential to make your life better, and that is why we are dedicated to bringing you the best. We understand that in today is fast-paced world, convenience matters. That is why we meticulously source, test, and offer a curated selection of products that not only meet your needs but also align with your values. Quality, innovation, and affordability are at the core of everything we do.
          </p>
         </div>
    </div>

    <div className="bg-white w-full">
         <div className='text-black text-center p-10 w-full lg:flex md:flex sm:grid'>
         <div className='lg:text-[17px] md:text-[20px] text-black sm:text-[40px] text-center pb-3 mx-10 '>OUR VALUE</div>
         <p className='ml-[40px] text-left'>
         At Wares Store, quality is our top priority. We are committed to
              providing our customers with products that are built to last and
              exceed their expectations. From the materials we source to the
              craftsmanship that goes into every item, we never compromise on
              quality. Our customers are at the heart of everything we do. We strive to
              ensure that every shopping experience with us is a positive one.
              Our dedicated customer support team is always ready to assist you
              with any inquiries or issues, making sure you are 100% satisfied
              with your purchase.
          </p>
         </div>
    </div>
 <Workers />

    
    </div>
    // </div>
  )
}
