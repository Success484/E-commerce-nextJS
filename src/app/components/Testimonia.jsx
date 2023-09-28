"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import style from '../styles/Style.module.css'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'

export const Testimonia = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
     
      
      <div className="embla" ref={emblaRef}>
      <div className="embla__container ">
        
      <article>
      <h2 className='m-[30px] font-bold text-2xl pb-4'>Customers Testimonials</h2>
     </article>
        
        <div className="embla__slide">
        <div className='m-auto grid items-center justify-center text-center w-2/5 border boder-gray-100 bg-white drop-shadow-lg p-3 mb-3'>
        
        <h2><ImQuotesLeft color='red'/> At first i was very skeptical to buy, then with all incredible reviews i ordered and got with supersize as they guaranteed. Even i got the dress bit late but they responded my messages and inquiries without any delay. Highly appreciate that, Thanks a lot for the overall extraordinary service.
        <ImQuotesRight color='red' /></h2>
        <div className='m-auto grid items-center justify-center text-center '>
          <Image src="/text1.webp" height={70} width={100} alt="image" className={style.img}/>
          <div>John.d</div>
        </div>
        </div>
        </div>



        <div className="embla__slide">
        <div className='m-auto grid items-center justify-center text-center w-2/5 border boder-gray-100 bg-white drop-shadow-lg p-3'>
        
      <h2><ImQuotesLeft color='red'/> Amazing customer service. Great quality product, I got more than what I expected. Delivery of the Sarees to me was really fast. Truly impressed, keep it up, youre simply the best and definitely looking forward to more shoppings from you.<ImQuotesRight color='red'/></h2>
      <div className='m-auto grid items-center justify-center text-center '>
          <Image src="/text2.webp" height={70} width={100} alt="image" className={style.img}/>
        </div>
        </div>
        </div>




        <div className="embla__slide">
        <div className='m-auto grid items-center justify-center text-center w-2/5 border boder-gray-100 bg-white drop-shadow-lg p-3'>
        
        <h2><ImQuotesLeft color='red'/> The products offered on this website are very unique. I Love my outfit!! The stitching is so perfect and worth the price. Perfect place to purchase Ethnic clothes.<ImQuotesRight color='red' /></h2>
        <div className='m-auto grid items-center justify-center text-center '>
          <Image src="/text3.webp" height={70} width={100} alt="image" className={style.img}/>
        </div>
        </div>
        </div>


      </div>
    </div>
  )
}






// import React from 'react'
// import style from '../styles/Style.module.css'
// import Image from 'next/image'

// export default function Testimonia() {
//   return (
//     <section>
//     <div><h2 className='m-[30px] font-bold text-2xl pb-4'>Customers Testimonials</h2>
//     </div>

//     <div className={`grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 bg-gray-100 ${style.test}`}>
//       <div>
//         <h2> At first i was very skeptical to buy, then with all incredible reviews i ordered and got with supersize as they guaranteed. Even i got the dress bit late but they responded my messages and inquiries without any delay. Highly appreciate that, Thanks a lot for the overall extraordinary service.</h2>
//        <Image src="/text1.webp" height={70} width={100} alt="image" className={style.img}/>
//        <p>Jim Horry</p>
//       </div>
//       <div>
//         <h2> The products offered on this website are very unique. I Love my outfit!! The stitching is so perfect and worth the price. Perfect place to purchase Ethnic clothes.</h2>
//         <Image src="/text2.webp" height={70} width={100} alt="image" className={style.img}/>
//         <p>Christian Page</p>
//       </div>
//       <div>
//         <h2> Amazing customer service. Great quality product, I got more than what I expected. Delivery of the Sarees to me was really fast. Truly impressed, keep it up, youre simply the best and definitely looking forward to more shoppings from you.</h2>
//         <Image src="/text3.webp" height={70} width={100} alt="image" className={style.img} />
//         <p>Micheal Green</p>
//       </div>
//       </div>
//       </section>
//   )
// }