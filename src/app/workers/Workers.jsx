import Image from 'next/image'
import React from 'react'
import { workers } from './page'
import style from '../styles/Style.module.css'

export default function Workers() {
  const WORKERS = workers.map(work => (
    <section key={work.name} className={style.each}>
    <Image src={work.image} height={300} width={300} alt={work.name} className={style.size}/>
    <h2 className='text-center pb-[18px] mt-3'>{work.name}<br/>{work.work}</h2> 
    </section>
  ))
  return (
    <>
    <h2 className='text-center text-[35px] m-8 font-medium'>OUR WORKERS</h2>
    <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3'>{WORKERS}</div>
    </>
  )
}
