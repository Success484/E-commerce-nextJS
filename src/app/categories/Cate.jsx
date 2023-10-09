import React from 'react';
import Image from 'next/image';
import style from '../styles/Style.module.css'
import Link from 'next/link';


// const allSuit = [
//   {
//       "id": 1,
//       "name": "Classic Black Suit",
//       "price": "₦25,000",
//       "description": "A timeless black suit for formal occasions.",
//       "image": "classic_black_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 2,
//       "name": "Navy Blue Slim Fit Suit",
//       "price": "₦30,000",
//       "description": "A stylish navy blue slim fit suit.",
//       "image": "navy_blue_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 3,
//       "name": "Charcoal Gray Suit",
//       "price": "₦28,000",
//       "description": "A versatile charcoal gray suit.",
//       "image": "charcoal_gray_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 4,
//       "name": "Brown Tweed Suit",
//       "price": "₦32,000",
//       "description": "A classic brown tweed suit for a rustic look.",
//       "image": "brown_tweed_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 5,
//       "name": "Slim Fit Tuxedo",
//       "price": "₦35,000",
//       "description": "A sleek black tuxedo for special occasions.",
//       "image": "tuxedo_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 6,
//       "name": "Light Gray Suit",
//       "price": "₦29,000",
//       "description": "A modern light gray suit for a contemporary look.",
//       "image": "light_gray_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 7,
//       "name": "Double-Breasted Pinstripe Suit",
//       "price": "₦34,000",
//       "description": "A classic pinstripe suit with a double-breasted design.",
//       "image": "pinstripe_suit.jpg",
//       "class": "case"
//     },
//     {
//       "id": 8,
//       "name": "Burgundy Velvet Suit",
//       "price": "₦38,000",
//       "description": "A luxurious burgundy velvet suit for special occasions.",
//       "image": "burgundy_velvet_suit.jpg",
//       "class": "case"
//     }
// ]


// const AllSuit = allSuit.map((Suits) => {
//   <section key={Suits.id}>
//       <h2>{Suits.name}</h2>
//   </section>
// })


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
