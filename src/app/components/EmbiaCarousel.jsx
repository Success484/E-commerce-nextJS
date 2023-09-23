"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import style from '../styles/Style.module.css'

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      
      <div className="embla__container">
        <div className="embla__slide">
          
          <Image src="/banner1.avif" className={style.banner} height={200} width={1300} alt="banner"  />
          </div>

        <div className="embla__slide">
        <Image src="/banner2.avif" className={style.banner} height={50} width={1300} alt="banner"  />
        </div>

        <div className="embla__slide">
        <Image src="/banner3.avif" className={style.banner} height={50} width={1300} alt="banner"  />
        </div>
        
      </div>
    </div>
        
  )
}
