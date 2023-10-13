import React from 'react';
import Image from 'next/image';
import style from '../styles/Style.module.css'
import Link from 'next/link';

const HoveredImageText = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3'> 
    <Link href='/briefcases'>
      <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src="/cban.jpg" 
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our suitcase the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/caps'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/allcap.jpg"
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our cap the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/watch'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/watch1.png" 
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of watch bag the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/glasses'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/glass1.png" 
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our glasses the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/bags'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/bag1.png" 
          alt="Hover Image"
          width={250}
          height={250}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our bags the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/coat'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/coat2.png" 
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our coat the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/shoes'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/shoe1.png" 
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our shoes the best</p>
        </div>
    </div>
    </div>
    </Link>

    <Link href='/perfumes'>
    <div className={style.container}>
    <div className={style.imageContainer}>
        <Image
          src="/perfume2.png" 
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>Check more of our perfumes the best</p>
        </div>
    </div>
    </div>
    </Link>
    </div>   
  );
};

export default HoveredImageText;
